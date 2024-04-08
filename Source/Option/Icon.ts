import type Type from "@Interface/Icon.js";

export default {
	CSS: [
		(await import("@Asset/Image/Package/LightCSS3.svg")).default,
		(await import("@Asset/Image/Package/DarkCSS3.svg")).default,
	],
	Shell: [
		(await import("@Asset/Image/Package/LightGNUBash.svg")).default,
		(await import("@Asset/Image/Package/DarkGNUBash.svg")).default,
	],
	Go: [
		(await import("@Asset/Image/Package/LightGo.svg")).default,
		(await import("@Asset/Image/Package/DarkGo.svg")).default,
	],
	JavaScript: [
		(await import("@Asset/Image/Package/LightJavaScript.svg")).default,
		(await import("@Asset/Image/Package/DarkJavaScript.svg")).default,
	],
	Lua: [
		(await import("@Asset/Image/Package/LightLua.svg")).default,
		(await import("@Asset/Image/Package/DarkLua.svg")).default,
	],
	MDX: [
		(await import("@Asset/Image/Package/LightMDX.svg")).default,
		(await import("@Asset/Image/Package/DarkMDX.svg")).default,
	],
	PowerShell: [
		(await import("@Asset/Image/Package/LightPowershell.svg")).default,
		(await import("@Asset/Image/Package/DarkPowershell.svg")).default,
	],
	Python: [
		(await import("@Asset/Image/Package/LightPython.svg")).default,
		(await import("@Asset/Image/Package/DarkPython.svg")).default,
	],
	Rust: [
		(await import("@Asset/Image/Package/LightRust.svg")).default,
		(await import("@Asset/Image/Package/DarkRust.svg")).default,
	],
	TypeScript: [
		(await import("@Asset/Image/Package/LightTypeScript.svg")).default,
		(await import("@Asset/Image/Package/DarkTypeScript.svg")).default,
	],
	Batchfile: [
		(await import("@Asset/Image/Package/LightWindowsTerminal.svg")).default,
		(await import("@Asset/Image/Package/DarkWindowsTerminal.svg")).default,
	],
	Astro: [
		(await import("@Asset/Image/Package/LightAstro.svg")).default,
		(await import("@Asset/Image/Package/DarkAstro.svg")).default,
	],
} satisfies Type;
