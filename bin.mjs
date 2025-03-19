import { ElizaBot } from './elizabot.mjs'

function startElizaTerminal() {
	const eliza = new ElizaBot()

	console.log('Welcome to')
	console.log('       EEEEEE  LL      IIII   ZZZZZZZ   AAAAA ')
	console.log('       EE      LL       II        ZZ   AA   AA')
	console.log('       EEEEE   LL       II      ZZZ    AAAAAAA')
	console.log('       EE      LL       II     ZZ      AA   AA')
	console.log('       EEEEEE  LLLLLL  IIII   ZZZZZZZ  AA   AA')
	console.log('')
	console.log('\x1b]8;;https://github.com/steve02081504/ELIZA\x07Eliza\x1b]8;;\x07 is a mock Rogerian psychotherapist.')
	console.log('The original programmed was described by \x1b]8;;https://en.wikipedia.org/wiki/Joseph_Weizenbaum\x07Joseph Weizenbaum\x1b]8;;\x07 in 1964.')
	console.log('This implementation by \x1b]8;;https://github.com/steve02081504\x07Steve02081504\x1b]8;;\x07 2025.')
	console.log('')
	console.log('')
	console.log('')


	console.log(eliza.getInitialMessage())

	while (!eliza.quit) {
		const input = prompt('>')
		console.log(eliza.transform(input))
	}
}

startElizaTerminal()
