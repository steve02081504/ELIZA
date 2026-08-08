/* global fountCharCI */
const CI = fountCharCI

/**
 * 判断 lastChoices 中指定关键词是否已有选用记录。
 * @param {Record<string, Record<string | number, number>> | undefined} lastChoices - Eliza 的 lastChoices 状态。
 * @param {string} key - 关键词键名。
 * @returns {boolean} 该关键词下是否存在非 -1 的选用索引。
 */
function lastChoicesTouched(lastChoices, key) {
	return Object.values(lastChoices?.[key] || {}).some(v => v !== -1)
}

await CI.test('GetGreeting', async () => {
	const greeting = await CI.char.interfaces.chat.GetGreeting({ chat_log: [] }, 0)
	CI.assert(typeof greeting?.content === 'string' && greeting.content.length > 0, `expected non-empty greeting, got: ${JSON.stringify(greeting)}`)
})

await CI.test('GetReply', async () => {
	const { reply } = await CI.runInput('Hello')
	CI.assert(typeof reply?.content === 'string' && reply.content.length > 0, `expected non-empty reply, got: ${JSON.stringify(reply)}`)
	CI.assert(reply.extension?.ElizaState, 'expected ElizaState in reply extension')
})

await CI.test('GetReply preserves ElizaState', async () => {
	const first = await CI.runInput('I am sad')
	CI.assert(first.reply?.extension?.ElizaState, 'expected ElizaState after first reply')
	CI.assert(lastChoicesTouched(first.reply.extension.ElizaState.lastChoices, 'am'), 'expected "am" lastChoices touched after first reply')

	const second = await CI.runInput([
		{ role: 'user', content: 'I am sad', files: [], extension: {} },
		{ role: 'char', content: first.reply.content, files: [], extension: { ElizaState: first.reply.extension.ElizaState } },
		{ role: 'user', content: 'Why?', files: [], extension: {} },
	])
	CI.assert(typeof second.reply?.content === 'string' && second.reply.content.length > 0, `expected non-empty follow-up reply, got: ${JSON.stringify(second.reply)}`)
	CI.assert(second.reply.extension?.ElizaState, 'expected ElizaState after follow-up reply')
	CI.assert(
		lastChoicesTouched(second.reply.extension.ElizaState.lastChoices, 'am'),
		'expected prior "am" lastChoices retained across follow-up — would be cleared if GetReply always reset()',
	)

	const freshWhy = await CI.runInput('Why?')
	CI.assert(
		!lastChoicesTouched(freshWhy.reply.extension.ElizaState.lastChoices, 'am'),
		'control: fresh Why? must not carry "am" lastChoices',
	)
})

await CI.test('GetPromptForOther', async () => {
	const prompt = await CI.char.interfaces.chat.GetPromptForOther({})
	CI.assert(Array.isArray(prompt?.text) && prompt.text.some(t => String(t.content || '').includes('Rogerian')), `expected Rogerian prompt, got: ${JSON.stringify(prompt)}`)
})

await CI.test('GetGroupGreeting empty chat_log', async () => {
	const greeting = await CI.char.interfaces.chat.GetGroupGreeting({ chat_log: [], UserCharname: 'Tester' }, 0)
	CI.assert(typeof greeting?.content === 'string' && greeting.content.length > 0, `expected greeting from UserCharname, got: ${JSON.stringify(greeting)}`)
})
