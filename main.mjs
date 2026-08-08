/**
 * @typedef {import('../../../../../src/decl/charAPI.ts').CharAPI_t} CharAPI_t
 * @typedef {import('../../../../../src/decl/charAPI.ts').charInit_t} charInit_t
 * @typedef {import('../../../../../src/public/parts/shells/chat/decl/chatLog.ts').chatReplyRequest_t} chatReplyRequest_t
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
	 * 角色启用时的初始化钩子。
	 * @param {charInit_t} stat - 角色初始化信息。
	 * @returns {void}
	 */
	Init: (stat) => { },
	/**
	 * 角色卸载时的清理钩子。
	 * @param {string} reason - 卸载原因。
	 * @param {string} from - 卸载来源。
	 * @returns {void}
	 */
	Uninstall: (reason, from) => { },
	/**
	 * 角色加载时的钩子。
	 * @param {charInit_t} stat - 角色初始化信息。
	 * @returns {void}
	 */
	Load: (stat) => { },
	/**
	 * 角色卸载出内存时的钩子。
	 * @param {string} reason - 卸载原因。
	 * @returns {void}
	 */
	Unload: (reason) => { },

	interfaces: {
		chat: {
			/**
			 * 获取角色开场白。
			 * @param {chatReplyRequest_t} arg - 聊天回复请求。
			 * @param {number} index - 开场白索引。
			 * @returns {{ content: string }} 开场白回复。
			 */
			GetGreeting: (arg, index) => ({ content: bot.getInitialMessage() }),
			/**
			 * 获取角色加入群聊时的问候。
			 * @param {chatReplyRequest_t} arg - 聊天回复请求。
			 * @param {number} index - 问候索引。
			 * @returns {{ content: string }} 群组问候回复。
			 */
			GetGroupGreeting: (arg, index) => {
				const last = arg.chat_log?.length ? arg.chat_log[arg.chat_log.length - 1]?.content : undefined
				return { content: bot.greet(last || arg.UserCharname) }
			},
			/**
			 * 获取角色自身提示词。
			 * @param {chatReplyRequest_t} args - 聊天回复请求。
			 * @returns {Promise<{ text: never[], additional_chat_log: never[], extension: object }>} 空提示结构。
			 */
			GetPrompt: async (args) => ({
				text: [],
				additional_chat_log: [],
				extension: {},
			}),
			/**
			 * 获取其他角色视角下的该角色设定。
			 * @param {chatReplyRequest_t} args - 聊天回复请求。
			 * @returns {{ text: { content: string, important: number }[], additional_chat_log: never[], extension: object }} 他者视角提示。
			 */
			GetPromptForOther: (args) => ({
				text: [{
					content: 'a mock Rogerian psychotherapist',
					important: 0
				}],
				additional_chat_log: [],
				extension: {},
			}),
			/**
			 * 基于对话日志生成 Eliza 回复，并回写状态。
			 * @param {chatReplyRequest_t} args - 聊天回复请求。
			 * @returns {Promise<{ content: string, extension: { ElizaState: object } }>} 回复内容与 Eliza 状态。
			 */
			GetReply: async (args) => {
				const ElizaState = args.chat_log.findLast(x => x.extension?.ElizaState)?.extension?.ElizaState
				if (ElizaState) bot.setState(ElizaState)
				else bot.reset()
				const result = bot.transform(args.chat_log.at(-1).content)
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
