import astroDark from "@Asset/Images/packages/astroDark.svg";
import astroLight from "@Asset/Images/packages/astroLight.svg";
import css3Dark from "@Asset/Images/packages/css3Dark.svg";
import css3Light from "@Asset/Images/packages/css3Light.svg";
import gnubashDark from "@Asset/Images/packages/gnubashDark.svg";
import gnubashLight from "@Asset/Images/packages/gnubashLight.svg";
import goDark from "@Asset/Images/packages/goDark.svg";
import goLight from "@Asset/Images/packages/goLight.svg";
import javascriptDark from "@Asset/Images/packages/javascriptDark.svg";
import javascriptLight from "@Asset/Images/packages/javascriptLight.svg";
import luaDark from "@Asset/Images/packages/luaDark.svg";
import luaLight from "@Asset/Images/packages/luaLight.svg";
import mdxDark from "@Asset/Images/packages/mdxDark.svg";
import mdxLight from "@Asset/Images/packages/mdxLight.svg";
import powershellDark from "@Asset/Images/packages/powershellDark.svg";
import powershellLight from "@Asset/Images/packages/powershellLight.svg";
import pythonDark from "@Asset/Images/packages/pythonDark.svg";
import pythonLight from "@Asset/Images/packages/pythonLight.svg";
import rustDark from "@Asset/Images/packages/rustDark.svg";
import rustLight from "@Asset/Images/packages/rustLight.svg";
import typescriptDark from "@Asset/Images/packages/typescriptDark.svg";
import typescriptLight from "@Asset/Images/packages/typescriptLight.svg";
import windowsterminalDark from "@Asset/Images/packages/windowsterminalDark.svg";
import windowsterminalLight from "@Asset/Images/packages/windowsterminalLight.svg";

export interface Package {
	icons: {
		[key: string]: [ImageMetadata, ImageMetadata];
	};
}

export default {
	icons: {
		"CSS": [css3Light, css3Dark],
		"Shell": [gnubashLight, gnubashDark],
		"Go": [goLight, goDark],
		"JavaScript": [javascriptLight, javascriptDark],
		"Lua": [luaLight, luaDark],
		"MDX": [mdxLight, mdxDark],
		"PowerShell": [powershellLight, powershellDark],
		"Python": [pythonLight, pythonDark],
		"Rust": [rustLight, rustDark],
		"TypeScript": [typescriptLight, typescriptDark],
		"Batchfile": [windowsterminalLight, windowsterminalDark],
		"Astro": [astroLight, astroDark],
	},
} satisfies Package as Package;
