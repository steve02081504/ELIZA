/* global fountCharCI */
const CI = fountCharCI

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

	const second = await CI.runInput([
		{ role: 'user', content: 'I am sad', files: [], extension: {} },
		{ role: 'char', content: first.reply.content, files: [], extension: { ElizaState: first.reply.extension.ElizaState } },
		{ role: 'user', content: 'Why?', files: [], extension: {} },
	])
	CI.assert(typeof second.reply?.content === 'string' && second.reply.content.length > 0, `expected non-empty follow-up reply, got: ${JSON.stringify(second.reply)}`)
	CI.assert(second.reply.extension?.ElizaState, 'expected ElizaState after follow-up reply')
})

await CI.test('GetPromptForOther', async () => {
	const prompt = await CI.char.interfaces.chat.GetPromptForOther({})
	CI.assert(Array.isArray(prompt?.text) && prompt.text.some(t => String(t.content || '').includes('Rogerian')), `expected Rogerian prompt, got: ${JSON.stringify(prompt)}`)
})
