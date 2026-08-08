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

	/**
	 * @param {import('../../../../../src/decl/charAPI.ts').charInit_t} _stat
	 */
	Init: (_stat) => { },
	/**
	 * @param {string} _reason
	 * @param {string} _from
	 */
	Uninstall: (_reason, _from) => { },
	/**
	 * @param {import('../../../../../src/decl/charAPI.ts').charInit_t} _stat
	 */
	Load: (_stat) => { },
	/**
	 * @param {string} _reason
	 */
	Unload: (_reason) => { },

	interfaces: {
		chat: {
			/**
			 * @param {import('../../../../../src/public/parts/shells/chat/decl/chatLog.ts').chatReplyRequest_t} _arg
			 * @param {number} _index
			 * @returns {{ content: string }}
			 */
			GetGreeting: (_arg, _index) => ({ content: bot.getInitialMessage() }),
			/**
			 * @param {import('../../../../../src/public/parts/shells/chat/decl/chatLog.ts').chatReplyRequest_t} arg
			 * @param {number} _index
			 * @returns {{ content: string }}
			 */
			GetGroupGreeting: (arg, _index) => {
				const last = arg.chat_log?.length ? arg.chat_log[arg.chat_log.length - 1]?.content : undefined
				return { content: bot.greet(last || arg.UserCharname) }
			},
			/**
			 * @param {import('../../../../../src/public/parts/shells/chat/decl/chatLog.ts').chatReplyRequest_t} _args
			 * @returns {Promise<{ text: never[], additional_chat_log: never[], extension: object }>}
			 */
			GetPrompt: async (_args) => ({
				text: [],
				additional_chat_log: [],
				extension: {},
			}),
			/**
			 * @param {import('../../../../../src/public/parts/shells/chat/decl/chatLog.ts').chatReplyRequest_t} _args
			 * @returns {{ text: { content: string, important: number }[], additional_chat_log: never[], extension: object }}
			 */
			GetPromptForOther: (_args) => ({
				text: [{
					content: 'a mock Rogerian psychotherapist',
					important: 0
				}],
				additional_chat_log: [],
				extension: {},
			}),
			/**
			 * @param {import('../../../../../src/public/parts/shells/chat/decl/chatLog.ts').chatReplyRequest_t} args
			 * @returns {Promise<{ content: string, extension: { ElizaState: object } }>}
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
