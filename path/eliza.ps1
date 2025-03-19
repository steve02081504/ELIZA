$ELIZAdir = "$PSScriptRoot/.."

if (Get-Command deno -ErrorAction SilentlyContinue) {
	deno run "$ELIZAdir/bin.mjs" $args
}
elseif (Get-Command bun -ErrorAction SilentlyContinue) {
	bun run "$ELIZAdir/bin.mjs" $args
}
else {
	Write-Host "Deno missing, auto installing..."
	Invoke-RestMethod https://deno.land/install.ps1 | Invoke-Expression
	$env:PATH = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")
	if (!(Get-Command deno -ErrorAction SilentlyContinue)) {
		Write-Error "No compatible JavaScript runtime found. Please install Deno/Bun."
		exit 1
	}
	deno run "$ELIZAdir/bin.mjs" $args
}
