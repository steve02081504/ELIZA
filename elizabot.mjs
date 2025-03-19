import { ElizaData } from './elizadata.mjs'

/**
 * ElizaBot class - Simulates a Rogerian psychotherapist.
 */
export class ElizaBot {
	/**
	 * Constructor for the ElizaBot class.
	 * @param {Object} [initialData=ElizaData] - The initial data for the bot, containing keywords, responses, etc.  Defaults to the imported `ElizaData`.
	 * @param {Object} [config={}] - Configuration options for the bot.
	 * @param {number} [config.memorySize=20] - The maximum number of responses to store in memory.
	 * @param {boolean} [config.debug=false] -  If true, enables debug logging to the console.
	 * @param {boolean} [config.capitalizeFirstLetter=true] - If true, capitalizes the first letter of each response.
	 * @param {boolean} [config.noRandom=false] - If true, disables random selection of responses and uses the first available response.
	 */
	constructor(initialData = ElizaData, config = {}) {
		/**
		 * @type {Object}
		 * @private
		 * Configuration settings for the ElizaBot instance.
		*/
		this.config = {
			memorySize: 20,
			debug: false,
			capitalizeFirstLetter: true,
			noRandom: false,
			...config,
		}

		/**
		 * @type {Object}
		 * @private
		 * The parsed Eliza data, including keywords, rules, transforms, and responses.
		 */
		this.data = this.parseData(initialData)

		/**
		 * @type {string[]}
		 * @private
		 * An array to store recent responses for the "memory" feature.
		 */
		this.memory = []
		/**
		 * @type {Object}
		 * @private
		 * Stores the indices of the last chosen responses for each rule of each keyword.
		 */
		this.lastChoices = {}

		this.reset()
	}

	/**
	 * Resets the bot's state, clearing memory and last choices.
	 */
	reset() {
		/**
		 * @type {boolean}
		 * @private
		 * Flag to indicate if the user has requested to quit the conversation.
		 */
		this.quit = false
		this.memory = []
		this.lastChoices = {}
		// Initialize lastChoices for all keywords and rules.
		for (const keyword of this.data.keywords) {
			this.lastChoices[keyword.key] = {}
			for (let i = 0; i < keyword.rules.length; i++)
				this.lastChoices[keyword.key][i] = -1
		}
	}

	/**
	 * Parses the initial Eliza data, compiling regular expressions and organizing rules.
	 * @param {Object} data - The raw Eliza data.
	 * @returns {Object} The parsed Eliza data.
	 * @private
	 */
	parseData(data) {
		const parsed = { ...data }
		const synPatterns = {}

		// Create regular expressions for synonym groups.
		if (parsed.synonyms)
			for (const key in parsed.synonyms)
				synPatterns[key] = `(${key}|${parsed.synonyms[key].join('|')})`

		// Process keywords and their rules.
		if (parsed.keywords) {
			for (const keyword of parsed.keywords)
				keyword.rules = keyword.rules
					.map((rule) => {
						let { pattern } = rule
						let flags = 'i'  // Default to case-insensitive matching

						// Handle pre-compiled regular expressions.
						if (pattern instanceof RegExp) {
							flags = pattern.flags
							pattern = pattern.source
						}

						// Check for memory flag ($).
						if (pattern.startsWith('$')) {
							pattern = pattern.slice(1).trimStart()
							rule.memFlag = true
						}

						// Replace synonym placeholders (@synonym) with their regular expressions.
						const synRegex = /@(\S+)/g
						let synMatch
						while ((synMatch = synRegex.exec(pattern)) !== null) {
							const syn = synPatterns[synMatch[1]]
							if (syn)
								pattern =
									pattern.substring(0, synMatch.index) +
									syn +
									pattern.substring(synMatch.index + synMatch[0].length)
						}

						// Convert string patterns to regular expressions.
						if (typeof rule.pattern === 'string') {
							pattern = pattern.replace(/\*/g, '([\\w\\s\'’]+)') // Match any word characters, spaces, apostrophes, and right single quotation marks.
							pattern = pattern.replace(/\s+/g, '\\s+')       // Match one or more whitespace characters.

							// Handle parenthesized groups (word boundaries).
							pattern = pattern.replace(/\(([^)]+)\)/g, (match, group) => {
								return `(\\b${group.trim()}\\b)`
							})
							pattern = '\\b' + pattern + '\\b'             // Add word boundaries.
						}

						// Compile the regular expression and create the rule object.
						try {
							return {
								...rule,
								pattern: new RegExp(pattern, flags),
								responses: rule.responses || [],
								memFlag: rule.memFlag || false,
								goto: rule.goto || null,
							}
						} catch (error) {
							console.error('Error compiling regex:', pattern, error)
							return null // Return null for invalid rules, so they can be filtered out.
						}
					})
					.filter((rule) => rule !== null) // Remove any rules that failed to compile.


			// Sort keywords by priority (highest priority first).
			parsed.keywords.sort((a, b) => b.priority - a.priority)
		}

		// Compile pre- and post-transformation rules.
		parsed.preExp = this.compileTransforms(parsed.preTransforms)
		parsed.postExp = this.compileTransforms(parsed.postTransforms)

		return parsed
	}

	/**
	 * Compiles a set of text transformations into a single regular expression and a map.
	 * @param {Array<{from: string, to: string}>} transforms - An array of transformation objects.
	 * @returns {{regex: RegExp, map: Object}} An object containing the compiled regex and a map of 'from' to 'to' values.
	 * @private
	 */
	compileTransforms(transforms) {
		if (!transforms || !Array.isArray(transforms))
			return { regex: /####/, map: {} } // Return a dummy regex that will never match.


		const regexps = []
		const map = {}

		for (const transform of transforms)
			if (
				transform &&
				typeof transform.from === 'string' &&
				typeof transform.to === 'string'
			) {
				regexps.push(transform.from)
				map[transform.from.toLowerCase()] = transform.to
			} else if (this.config.debug)
				console.warn('Invalid transform object:', transform)

		return {
			regex: new RegExp(`\\b(${regexps.join('|')})\\b`, 'gi'), // Case-insensitive, global match with word boundaries.
			map,
		}
	}

	/**
	 * Processes user input and generates a response.
	 * @param {string} inputText - The user's input text.
	 * @returns {string} Eliza's response.
	 */
	transform(inputText) {
		if (!inputText || inputText.trim() === '')
			return this.getRandomResponse(this.data.responses.noInput || [])

		let text = inputText.toLowerCase()
		text = this.applyTransforms(text, this.data.preExp)
		const sentences = text.split(/[!.;?]+/) // Split into sentences.

		for (const sentence of sentences) {
			if (!sentence || sentence.trim() === '') continue

			// Check for quit phrases.
			if (
				this.data.quitPhrases &&
				this.data.quitPhrases.includes(sentence.trim())
			) {
				this.quit = true
				return this.getFinalMessage()
			}

			// Iterate through keywords and rules to find a match.
			for (const keyword of this.data.keywords)
				if (sentence.includes(keyword.key.toLowerCase())) {
					for (const rule of keyword.rules) {
						const reply = this.applyRule(sentence, keyword, rule)
						if (reply) return reply
					}
					break // Only match one keyword per sentence.
				}

		}

		// If no keyword matched, try to use memory or a default response.
		const memoryReply = this.getMemory()
		if (memoryReply) return memoryReply

		const xnoneKeyword = this.data.keywords.find((k) => k.key === 'xnone')

		// Handle questions differently
		const isQuestion = inputText.trim().endsWith('?')
		let defaultReply

		if (isQuestion && xnoneKeyword) {
			const questionResponses = xnoneKeyword.rules
				.flatMap((rule) => rule.responses)
				.filter(
					(response) =>
						response.includes('?') ||
						response.toLowerCase().startsWith('what') ||
						response.toLowerCase().startsWith('why') ||
						response.toLowerCase().startsWith('how') ||
						response.toLowerCase().startsWith('do')
				)

			if (questionResponses.length > 0)
				defaultReply = this.getRandomResponse(questionResponses)
			else if (xnoneKeyword)
				defaultReply = this.applyRule(
					inputText,
					xnoneKeyword,
					xnoneKeyword.rules[0]
				)

		} else if (xnoneKeyword)
			defaultReply = this.applyRule(
				inputText,
				xnoneKeyword,
				xnoneKeyword.rules[0]
			)


		return (
			defaultReply || this.getRandomResponse(this.data.responses.noMatch || [])
		)
	}
	/**
	 * Applies a specific rule to a sentence.
	 * @param {string} sentence - The input sentence.
	 * @param {Object} keyword - The keyword object.
	 * @param {Object} rule - The rule object.
	 * @returns {string|null} The generated response, or null if the rule doesn't match.
	 * @private
	 */
	applyRule(sentence, keyword, rule) {
		const match = sentence.match(rule.pattern)

		if (match) {
			// Handle 'goto' redirection.
			if (rule.goto) {
				const nextKeyword = this.data.keywords.find((k) => k.key === rule.goto)
				if (nextKeyword)
					return this.applyRule(sentence, nextKeyword, nextKeyword.rules[0])
				else if (this.config.debug)
					console.warn(`'goto' keyword "${rule.goto}" not found.`)

			}

			// Select a response (randomly or sequentially).
			let ri = this.config.noRandom
				? 0
				: Math.floor(Math.random() * rule.responses.length)
			if (!this.config.noRandom) {
				// Avoid repeating the same response immediately.
				if (this.lastChoices[keyword.key][keyword.rules.indexOf(rule)] === ri)
					ri = (ri + 1) % rule.responses.length

				this.lastChoices[keyword.key][keyword.rules.indexOf(rule)] = ri
			}

			const response = rule.responses[ri]

			// Replace placeholders in the response with captured groups from the regex match.
			let finalResponse = response.replace(
				/\((\d+)\)/g,
				(matchPlaceholder, index) => {
					let param = match[parseInt(index)] || '' // Get the captured group.
					param = this.applyTransforms(param, this.data.postExp) // Apply post-transformations.
					return param
				}
			)

			finalResponse = this.postTransform(finalResponse)

			// Save to memory if the rule has the memFlag set.
			if (rule.memFlag)
				this.saveToMemory(finalResponse)


			return finalResponse
		}
		return null
	}

	/**
	 * Applies a set of text transformations to a given text.
	 * @param {string} text - The input text.
	 * @param {{regex: RegExp, map: Object}} transforms - The compiled transformation rules.
	 * @returns {string} The transformed text.
	 * @private
	 */
	applyTransforms(text, transforms) {
		if (transforms.regex.test(text)) {
			let result = ''
			let lastIndex = 0
			let match
			// Iterate through all matches and apply transformations.
			while ((match = transforms.regex.exec(text)) !== null) {
				result += text.substring(lastIndex, match.index)
				result += transforms.map[match[0].toLowerCase()] || match[0] // Use the transformed value or the original if not found.
				lastIndex = transforms.regex.lastIndex
			}
			result += text.substring(lastIndex) // Add the remaining text.
			return result
		}
		return text
	}

	/**
	 * Performs final transformations on a response (trimming, punctuation, capitalization).
	 * @param {string} text - The response text.
	 * @returns {string} The post-transformed response text.
	 * @private
	 */
	postTransform(text) {
		let result = text.trim()
		if (!result) return result

		result = result.replace(/\s+/g, ' ') // Replace multiple spaces with single spaces.
		result = result.replace(/\s([!,.?])/g, '$1') // Remove spaces before punctuation.

		// Capitalize the first letter if configured.
		if (this.config.capitalizeFirstLetter)
			result = result.charAt(0).toUpperCase() + result.slice(1)

		return result
	}

	/**
	 * Saves a response to the bot's memory.
	 * @param {string} response - The response to save.
	 * @private
	 */
	saveToMemory(response) {
		this.memory.push(response)
		// Keep memory size within the configured limit.
		if (this.memory.length > this.config.memorySize)
			this.memory.shift()
	}

	/**
	 * Retrieves a response from the bot's memory.
	 * @returns {string} A response from memory, or an empty string if memory is empty.
	 * @private
	 */
	getMemory() {
		if (this.memory.length === 0) return ''
		if (this.config.noRandom) return this.memory.shift() // Return the oldest memory entry.

		// Randomly select and remove a memory entry.
		const index = Math.floor(Math.random() * this.memory.length)
		return this.memory.splice(index, 1)[0]
	}

	/**
	 * Returns a random response from a given list of responses.
	 * @param {string[]} responses - An array of possible responses.
	 * @returns {string} A randomly selected response, or an empty string if the array is empty.
	 * @private
	 */
	getRandomResponse(responses) {
		if (!responses || responses.length === 0) return ''
		const index = this.config.noRandom
			? 0
			: Math.floor(Math.random() * responses.length)
		return responses[index]
	}

	/**
	 * Returns the initial greeting message.
	 * @returns {string} The initial greeting message.
	 */
	getInitialMessage() {
		return this.getRandomResponse(this.data.responses.initial || [])
	}

	/**
	 * Returns a final message (used when the user quits).
	 * @returns {string} A final message.
	 */
	getFinalMessage() {
		return this.getRandomResponse(this.data.responses.final || [])
	}

	/**
	 * Gets the current state of the bot (memory, last choices, quit flag).
	 * @returns {{memory: string[], lastChoices: Object, quit: boolean}} The bot's state.
	 */
	getState() {
		return {
			memory: [...this.memory], // Return copies to prevent external modification.
			lastChoices: { ...this.lastChoices },
			quit: this.quit,
		}
	}

	/**
	 * Sets the bot's state (memory, last choices, quit flag).
	 * @param {{memory: string[], lastChoices: Object, quit: boolean}} state - The state to restore.
	 */
	setState(state) {
		if (!state) return
		this.memory = [...state.memory || []] // Restore memory (copy to prevent external modification).

		// Restore lastChoices, ensuring deep copy.
		this.lastChoices = {}
		for (const key in state.lastChoices)
			if (state.lastChoices.hasOwnProperty(key))
				this.lastChoices[key] = { ...state.lastChoices[key] }

		this.quit = !!state.quit // Restore quit flag.
	}

	/**
	 * Gets a configuration value.
	 * @param {string} [key] - The configuration key.  If omitted, returns the entire config object.
	 * @returns {*} The configuration value, or the entire config object if no key is provided.
	 */
	getConfig(key) {
		if (key) return this.config[key]
		return { ...this.config } // Return a copy to prevent external modification.
	}

	/**
	 * Sets a configuration value.
	 * @param {string|Object} key - The configuration key, or an object containing multiple key-value pairs.
	 * @param {*} [value] - The configuration value (if setting a single key).
	 */
	setConfig(key, value) {
		if (typeof key === 'object')
			// Set multiple configuration values.
			for (const k in key)
				this.setConfig(k, key[k])

		else if (Object.hasOwn(this.config, key)) {
			this.config[key] = value
			// Adjust memory size if it's changed.
			if (key === 'memorySize')
				while (this.memory.length > this.config.memorySize)
					this.memory.shift()

		} else if (this.config.debug)
			console.warn(`Attempted to set an invalid configuration key: ${key}`)

	}
	/**
	 * Appends new data to the bot's existing data.
	 * @param {Object} newData - The new data to append.
	 */
	appendData(newData) {
		if (!newData || typeof newData !== 'object') return

		const { synonyms, keywords, preTransforms, postTransforms, responses, quitPhrases } = newData

		// Merge synonyms.
		if (synonyms)
			this.data.synonyms = { ...this.data.synonyms || {}, ...synonyms }

		// Add new keywords.
		if (keywords) {
			const parsedKeywords = this.parseData({ keywords }).keywords
			this.data.keywords.push(...parsedKeywords)

			// Initialize lastChoices for the new keywords.
			for (const keyword of parsedKeywords) {
				this.lastChoices[keyword.key] = {}
				for (let i = 0; i < keyword.rules.length; i++)
					this.lastChoices[keyword.key][i] = -1
			}
			this.data.keywords.sort((a, b) => b.priority - a.priority)
		}

		// Helper function to update transform arrays.
		const updateTransforms = (existing, updates) => {
			if (updates && Array.isArray(updates))
				return (existing || []).concat(updates)
			return existing || []
		}

		// Update pre- and post-transforms.
		this.data.preTransforms = updateTransforms(this.data.preTransforms, preTransforms)
		this.data.postTransforms = updateTransforms(this.data.postTransforms, postTransforms)

		// Recompile transformation rules.
		this.data.preExp = this.compileTransforms(this.data.preTransforms)
		this.data.postExp = this.compileTransforms(this.data.postTransforms)

		// Merge responses.
		if (responses)
			for (const key in responses)
				if (this.data.responses && this.data.responses[key] && Array.isArray(this.data.responses[key]))
					this.data.responses[key] = this.data.responses[key].concat(responses[key])
				else {
					this.data.responses = this.data.responses || {}
					this.data.responses[key] = responses[key]
				}

		// Add quit phrases.
		if (quitPhrases)
			this.data.quitPhrases = [...this.data.quitPhrases || [], ...quitPhrases]

	}

	/**
	 * Returns a greeting
	 * @param {string} name The name of the person to greet.
	 * @returns {string} The initial greeting message.
	 */
	greet(name) {
		if (!name) return this.data.greets[Math.floor(Math.random() * this.data.greets.length)]
		return this.data.named_greets[Math.floor(Math.random() * this.data.named_greets.length)].replace('%name%', name)
	}
}
