import astroDark from "@Asset/Image/packages/astroDark.svg";
import astroLight from "@Asset/Image/packages/astroLight.svg";
import css3Dark from "@Asset/Image/packages/css3Dark.svg";
import css3Light from "@Asset/Image/packages/css3Light.svg";
import gnubashDark from "@Asset/Image/packages/gnubashDark.svg";
import gnubashLight from "@Asset/Image/packages/gnubashLight.svg";
import goDark from "@Asset/Image/packages/goDark.svg";
import goLight from "@Asset/Image/packages/goLight.svg";
import javascriptDark from "@Asset/Image/packages/javascriptDark.svg";
import javascriptLight from "@Asset/Image/packages/javascriptLight.svg";
import luaDark from "@Asset/Image/packages/luaDark.svg";
import luaLight from "@Asset/Image/packages/luaLight.svg";
import mdxDark from "@Asset/Image/packages/mdxDark.svg";
import mdxLight from "@Asset/Image/packages/mdxLight.svg";
import powershellDark from "@Asset/Image/packages/powershellDark.svg";
import powershellLight from "@Asset/Image/packages/powershellLight.svg";
import pythonDark from "@Asset/Image/packages/pythonDark.svg";
import pythonLight from "@Asset/Image/packages/pythonLight.svg";
import rustDark from "@Asset/Image/packages/rustDark.svg";
import rustLight from "@Asset/Image/packages/rustLight.svg";
import typescriptDark from "@Asset/Image/packages/typescriptDark.svg";
import typescriptLight from "@Asset/Image/packages/typescriptLight.svg";
import windowsterminalDark from "@Asset/Image/packages/windowsterminalDark.svg";
import windowsterminalLight from "@Asset/Image/packages/windowsterminalLight.svg";

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
