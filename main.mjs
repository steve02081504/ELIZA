/**
 * @typedef {import('../../../../../src/decl/charAPI.ts').CharAPI_t} CharAPI_t
 */

import fs from 'node:fs'
import path from 'node:path'

import { ElizaBot } from './elizabot.mjs'

const bot = new ElizaBot()

const chardir = import.meta.dirname
const charurl = `/parts/chars:${encodeURIComponent(path.basename(chardir))}`

/** @type {CharAPI_t} */
export default {
	info: {
		'en-US': {
			name: 'Eliza',
			avatar: `${charurl}/avatar.png`,
			description: 'the First Chatbot in the world',
			description_markdown: fs.readFileSync(chardir + '/readme.md', 'utf-8'),
			version: '1.0.0',
			author: 'Joseph Weizenbaum & Steve02081504',
			home_page: 'https://github.com/steve02081504/ELIZA',
			issue_page: 'https://github.com/steve02081504/ELIZA/issues',
			tags: ['electronic antiques', 'no AIsource'],
		}
	},

	Init: () => { },
	Uninstall: () => { },
	Load: () => { },
	Unload: () => { },

	interfaces: {
		chat: {
			/**
			 * @returns {{ content: string }} 初始问候
			 */
			GetGreeting: () => ({ content: bot.getInitialMessage() }),
			/**
			 * @param {{ chat_log: { content?: string }[] , UserCharname?: string }} arg 请求
			 * @returns {{ content: string }} 群组问候
			 */
			GetGroupGreeting: (arg) => ({ content: bot.greet(arg.chat_log[arg.chat_log.length - 1].content || arg.UserCharname) }),
			/**
			 * @returns {Promise<{ text: never[], additional_chat_log: never[], extension: object }>} 空提示
			 */
			GetPrompt: async () => ({
				text: [],
				additional_chat_log: [],
				extension: {},
			}),
			/**
			 * @returns {{ text: { content: string, important: number }[], additional_chat_log: never[], extension: object }} 他者视角提示
			 */
			GetPromptForOther: () => ({
				text: [{
					content: 'a mock Rogerian psychotherapist',
					important: 0
				}],
				additional_chat_log: [],
				extension: {},
			}),
			/**
			 * @param {{ chat_log: { content?: string, extension?: { ElizaState?: object } }[] }} args 请求
			 * @returns {Promise<{ content: string, extension: { ElizaState: object } }>} 回复
			 */
			GetReply: async (args) => {
				const ElizaState = args.chat_log.findLast(x => x.extension?.ElizaState)?.extension?.ElizaState
				if (ElizaState) bot.setState(ElizaState)
				else bot.reset()
				const result = bot.transform(args.chat_log.findLast(_ => true).content)
				return {
					content: result,
					extension: {
						ElizaState: bot.getState()
					}
				}
			}
		}
	}
}
