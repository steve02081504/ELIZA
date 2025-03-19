import { ElizaBot } from './elizabot.mjs'

export function print_eliza_logo(output = console.log) {
	output('Welcome to')
	output('  EEEEEE  LL      IIII   ZZZZZZZ   AAAAA ')
	output('  EE      LL       II        ZZ   AA   AA')
	output('  EEEEE   LL       II      ZZZ    AAAAAAA')
	output('  EE      LL       II     ZZ      AA   AA')
	output('  EEEEEE  LLLLLL  IIII   ZZZZZZZ  AA   AA')
	output('')
	output('\x1b]8;;https://github.com/steve02081504/ELIZA\x07Eliza\x1b]8;;\x07 is a mock Rogerian psychotherapist.')
	output('The original programmed was described by \x1b]8;;https://en.wikipedia.org/wiki/Joseph_Weizenbaum\x07Joseph Weizenbaum\x1b]8;;\x07 in 1964.')
	output('This implementation by \x1b]8;;https://github.com/steve02081504\x07Steve02081504\x1b]8;;\x07 2025.')
}
export function eliza_main() {
	print_eliza_logo()
	console.log('')
	console.log('')
	console.log('')

	const eliza = new ElizaBot()

	console.log(eliza.getInitialMessage())

	while (!eliza.quit) {
		const input = prompt('>')
		console.log(eliza.transform(input))
	}
}
if (import.meta.main) eliza_main()
