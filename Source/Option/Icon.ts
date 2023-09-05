import DarkAstro from "@Asset/Image/Package/DarkAstro.svg";
import DarkCSS3 from "@Asset/Image/Package/DarkCSS3.svg";
import DarkGNUBash from "@Asset/Image/Package/DarkGNUBash.svg";
import DarkGo from "@Asset/Image/Package/DarkGo.svg";
import DarkJavaScript from "@Asset/Image/Package/DarkJavaScript.svg";
import DarkLua from "@Asset/Image/Package/DarkLua.svg";
import DarkMDX from "@Asset/Image/Package/DarkMDX.svg";
import DarkPowershell from "@Asset/Image/Package/DarkPowershell.svg";
import DarkPython from "@Asset/Image/Package/DarkPython.svg";
import DarkRust from "@Asset/Image/Package/DarkRust.svg";
import DarkTypeScript from "@Asset/Image/Package/DarkTypeScript.svg";
import DarkWindowsTerminal from "@Asset/Image/Package/DarkWindowsTerminal.svg";
import LightAstro from "@Asset/Image/Package/LightAstro.svg";
import LightCSS3 from "@Asset/Image/Package/LightCSS3.svg";
import LightGNUBash from "@Asset/Image/Package/LightGNUBash.svg";
import LightGo from "@Asset/Image/Package/LightGo.svg";
import LightJavaScript from "@Asset/Image/Package/LightJavaScript.svg";
import LightLua from "@Asset/Image/Package/LightLua.svg";
import LightMDX from "@Asset/Image/Package/LightMDX.svg";
import LightPowershell from "@Asset/Image/Package/LightPowershell.svg";
import LightPython from "@Asset/Image/Package/LightPython.svg";
import LightRust from "@Asset/Image/Package/LightRust.svg";
import LightTypeScript from "@Asset/Image/Package/LightTypeScript.svg";
import LightWindowsTerminal from "@Asset/Image/Package/LightWindowsTerminal.svg";

export interface Icon {
	[key: string]: [ImageMetadata, ImageMetadata];
}

export default {
	"CSS": [LightCSS3, DarkCSS3],
	"Shell": [LightGNUBash, DarkGNUBash],
	"Go": [LightGo, DarkGo],
	"JavaScript": [LightJavaScript, DarkJavaScript],
	"Lua": [LightLua, DarkLua],
	"MDX": [LightMDX, DarkMDX],
	"PowerShell": [LightPowershell, DarkPowershell],
	"Python": [LightPython, DarkPython],
	"Rust": [LightRust, DarkRust],
	"TypeScript": [LightTypeScript, DarkTypeScript],
	"Batchfile": [LightWindowsTerminal, DarkWindowsTerminal],
	"Astro": [LightAstro, DarkAstro],
} satisfies Icon as Icon;
