import astroDark from "@Asset/Image/Package/astroDark.svg";
import astroLight from "@Asset/Image/Package/astroLight.svg";
import css3Dark from "@Asset/Image/Package/css3Dark.svg";
import css3Light from "@Asset/Image/Package/css3Light.svg";
import gnubashDark from "@Asset/Image/Package/gnubashDark.svg";
import gnubashLight from "@Asset/Image/Package/gnubashLight.svg";
import goDark from "@Asset/Image/Package/goDark.svg";
import goLight from "@Asset/Image/Package/goLight.svg";
import javascriptDark from "@Asset/Image/Package/javascriptDark.svg";
import javascriptLight from "@Asset/Image/Package/javascriptLight.svg";
import luaDark from "@Asset/Image/Package/luaDark.svg";
import luaLight from "@Asset/Image/Package/luaLight.svg";
import mdxDark from "@Asset/Image/Package/mdxDark.svg";
import mdxLight from "@Asset/Image/Package/mdxLight.svg";
import powershellDark from "@Asset/Image/Package/powershellDark.svg";
import powershellLight from "@Asset/Image/Package/powershellLight.svg";
import pythonDark from "@Asset/Image/Package/pythonDark.svg";
import pythonLight from "@Asset/Image/Package/pythonLight.svg";
import rustDark from "@Asset/Image/Package/rustDark.svg";
import rustLight from "@Asset/Image/Package/rustLight.svg";
import typescriptDark from "@Asset/Image/Package/typescriptDark.svg";
import typescriptLight from "@Asset/Image/Package/typescriptLight.svg";
import windowsterminalDark from "@Asset/Image/Package/windowsterminalDark.svg";
import windowsterminalLight from "@Asset/Image/Package/windowsterminalLight.svg";

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
