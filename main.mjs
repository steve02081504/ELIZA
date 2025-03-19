/**
 * @typedef {import('../../../../../src/decl/charAPI.ts').charAPI_t} charAPI_t
 */

import fs from 'node:fs'
import path from 'node:path'
import { ElizaBot } from './elizabot.mjs'

const bot = new ElizaBot()

const chardir = import.meta.dirname
const charurl = `/chars/${encodeURIComponent(path.basename(chardir))}`

/** @type {charAPI_t} */
export default {
	// 角色的基本信息
	info: {
		'en-US': {
			name: 'Eliza',
			avatar: `${charurl}/avatar.png`,
			description: 'the First Chatbot in the world',
			description_markdown: fs.readFileSync(chardir + '/readme.md', 'utf-8'),
			version: '1.0.0',
			author: 'Joseph Weizenbaum & Steve02081504',
			homepage: 'https://github.com/steve02081504/Eliza',
			tags: ['electronic antiques', 'no AIsource'],
		}
	},

	Init: (stat) => { },
	Uninstall: (reason, from) => { },
	Load: (stat) => { },
	Unload: (reason) => { },

	interfaces: {
		chat: {
			GetGreeting: (arg, index) => ({content: bot.getInitialMessage()}),
			GetGroupGreeting: (arg, index) => ({content: bot.greet(arg.chat_log[arg.chat_log.length - 1].content || arg.UserCharname)}),
			GetPrompt: async (args, prompt_struct, detail_level) => {
				return {
					text: [],
					additional_chat_log: [],
					extension: {},
				}
			},
			GetPromptForOther: (args, prompt_struct, detail_level) => {
				return {
					text: [{
						content: 'a mock Rogerian psychotherapist',
						important: 0
					}],
					additional_chat_log: [],
					extension: {},
				}
			},
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
