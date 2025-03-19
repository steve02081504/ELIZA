#!/bin/bash

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
ELIZA_DIR=$(dirname "$SCRIPT_DIR")

if command -v deno &> /dev/null; then
	deno run "$ELIZA_DIR/bin.mjs" "$@"
elif command -v bun &> /dev/null; then
	bun run "$ELIZA_DIR/bin.mjs" "$@"
else
	echo "Deno missing, auto installing..."
	curl -fsSL https://deno.land/install.sh | sh -s -- -y
	if [ "$?" -ne 0 ]; then
		echo "No compatible JavaScript runtime found. Please install Deno/Bun."
		exit 1
	fi
	source "$HOME/.profile"
	source "$HOME/.bash_profile"
	deno run "$ELIZA_DIR/bin.mjs" "$@"
fi
