import css3Dark from "@assets/Images/packages/css3Dark.svg";
import css3Light from "@assets/Images/packages/css3Light.svg";
import gnubashDark from "@assets/Images/packages/gnubashDark.svg";
import gnubashLight from "@assets/Images/packages/gnubashLight.svg";
import goDark from "@assets/Images/packages/goDark.svg";
import goLight from "@assets/Images/packages/goLight.svg";
import javascriptDark from "@assets/Images/packages/javascriptDark.svg";
import javascriptLight from "@assets/Images/packages/javascriptLight.svg";
import luaDark from "@assets/Images/packages/luaDark.svg";
import luaLight from "@assets/Images/packages/luaLight.svg";
import mdxDark from "@assets/Images/packages/mdxDark.svg";
import mdxLight from "@assets/Images/packages/mdxLight.svg";
import powershellDark from "@assets/Images/packages/powershellDark.svg";
import powershellLight from "@assets/Images/packages/powershellLight.svg";
import pythonDark from "@assets/Images/packages/pythonDark.svg";
import pythonLight from "@assets/Images/packages/pythonLight.svg";
import rustDark from "@assets/Images/packages/rustDark.svg";
import rustLight from "@assets/Images/packages/rustLight.svg";
import typescriptDark from "@assets/Images/packages/typescriptDark.svg";
import typescriptLight from "@assets/Images/packages/typescriptLight.svg";
import windowsterminalDark from "@assets/Images/packages/windowsterminalDark.svg";
import windowsterminalLight from "@assets/Images/packages/windowsterminalLight.svg";
import astroDark from "@assets/Images/packages/astroDark.svg";
import astroLight from "@assets/Images/packages/astroLight.svg";

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
