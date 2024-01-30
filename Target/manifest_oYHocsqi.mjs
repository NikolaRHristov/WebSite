import "@astrojs/internal-helpers/path";
import "cookie";
import "kleur/colors";
import "string-width";
import "./chunks/astro_ooOE7n8L.mjs";
import "clsx";
import { compile } from "path-to-regexp";
if ("undefined" != typeof process) {
	let e = process;
	"argv" in e &&
		Array.isArray(e.argv) &&
		(e.argv.includes("--verbose") || e.argv.includes("--silent"));
}
function getRouteGenerator(e, a) {
	const t = e
		.map(
			(e) =>
				"/" +
				e
					.map((e) =>
						e.spread
							? `:${e.content.slice(3)}(.*)?`
							: e.dynamic
								? `:${e.content}`
								: e.content
										.normalize()
										.replace(/\?/g, "%3F")
										.replace(/#/g, "%23")
										.replace(/%5B/g, "[")
										.replace(/%5D/g, "]")
										.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
					)
					.join("")
		)
		.join("");
	let s = "";
	"always" === a && e.length && (s = "/");
	return compile(t + s);
}
function deserializeRouteData(e) {
	return {
		route: e.route,
		type: e.type,
		pattern: new RegExp(e.pattern),
		params: e.params,
		component: e.component,
		generate: getRouteGenerator(e.segments, e._meta.trailingSlash),
		pathname: e.pathname || void 0,
		segments: e.segments,
		prerender: e.prerender,
		redirect: e.redirect,
		redirectRoute: e.redirectRoute
			? deserializeRouteData(e.redirectRoute)
			: void 0,
		fallbackRoutes: e.fallbackRoutes.map((e) => deserializeRouteData(e)),
	};
}
function deserializeManifest(e) {
	const a = [];
	for (const t of e.routes) {
		a.push({ ...t, routeData: deserializeRouteData(t.routeData) });
		t.routeData = deserializeRouteData(t.routeData);
	}
	const t = new Set(e.assets),
		s = new Map(e.componentMetadata),
		r = new Map(e.clientDirectives);
	return {
		...e,
		assets: t,
		componentMetadata: s,
		clientDirectives: r,
		routes: a,
	};
}
const manifest = deserializeManifest({
	adapterName: "",
	routes: [
		{
			file: "",
			links: [],
			scripts: [
				{ type: "external", value: "/_astro/hoisted.qxbo64jz.js" },
				{ type: "external", value: "/_astro/page.9Vx75qD_.js" },
			],
			styles: [{ type: "external", src: "/_astro/_Slug_.cCHhm_06.css" }],
			routeData: {
				route: "/",
				type: "page",
				pattern: "^\\/$",
				segments: [],
				params: [],
				component: "Source/pages/index.astro",
				pathname: "/",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [
				{ type: "external", value: "/_astro/hoisted.qxbo64jz.js" },
				{ type: "external", value: "/_astro/page.9Vx75qD_.js" },
			],
			styles: [
				{ type: "external", src: "/_astro/_Slug_._VWmucaH.css" },
				{ type: "external", src: "/_astro/_Slug_.cCHhm_06.css" },
			],
			routeData: {
				route: "/readme/[slug]",
				type: "page",
				pattern: "^\\/Readme\\/([^/]+?)\\/?$",
				segments: [
					[{ content: "Readme", dynamic: !1, spread: !1 }],
					[{ content: "Slug", dynamic: !0, spread: !1 }],
				],
				params: ["Slug"],
				component: "Source/pages/Readme/[Slug].astro",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [
				{ type: "external", value: "/_astro/hoisted.qxbo64jz.js" },
				{ type: "external", value: "/_astro/page.9Vx75qD_.js" },
			],
			styles: [
				{ type: "external", src: "/_astro/404.fajYJEaU.css" },
				{ type: "external", src: "/_astro/_Slug_.cCHhm_06.css" },
			],
			routeData: {
				route: "/404",
				type: "page",
				pattern: "^\\/404\\/?$",
				segments: [[{ content: "404", dynamic: !1, spread: !1 }]],
				params: [],
				component: "Source/pages/404.astro",
				pathname: "/404",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [{ type: "external", value: "/_astro/page.9Vx75qD_.js" }],
			styles: [],
			routeData: {
				route: "/raw/readme/codeeditorland",
				type: "page",
				pattern: "^\\/Raw\\/Readme\\/CodeEditorLand\\/?$",
				segments: [
					[{ content: "Raw", dynamic: !1, spread: !1 }],
					[{ content: "Readme", dynamic: !1, spread: !1 }],
					[{ content: "CodeEditorLand", dynamic: !1, spread: !1 }],
				],
				params: [],
				component: "Source/pages/Raw/Readme/CodeEditorLand/index.astro",
				pathname: "/Raw/Readme/CodeEditorLand",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [{ type: "external", value: "/_astro/page.9Vx75qD_.js" }],
			styles: [],
			routeData: {
				route: "/raw/readme/nikolarhristov",
				type: "page",
				pattern: "^\\/Raw\\/Readme\\/NikolaRHristov\\/?$",
				segments: [
					[{ content: "Raw", dynamic: !1, spread: !1 }],
					[{ content: "Readme", dynamic: !1, spread: !1 }],
					[{ content: "NikolaRHristov", dynamic: !1, spread: !1 }],
				],
				params: [],
				component: "Source/pages/Raw/Readme/NikolaRHristov/index.astro",
				pathname: "/Raw/Readme/NikolaRHristov",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [{ type: "external", value: "/_astro/page.9Vx75qD_.js" }],
			styles: [],
			routeData: {
				route: "/raw/readme/roundedcorners",
				type: "page",
				pattern: "^\\/Raw\\/Readme\\/RoundedCorners\\/?$",
				segments: [
					[{ content: "Raw", dynamic: !1, spread: !1 }],
					[{ content: "Readme", dynamic: !1, spread: !1 }],
					[{ content: "RoundedCorners", dynamic: !1, spread: !1 }],
				],
				params: [],
				component: "Source/pages/Raw/Readme/RoundedCorners/index.astro",
				pathname: "/Raw/Readme/RoundedCorners",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [{ type: "external", value: "/_astro/page.9Vx75qD_.js" }],
			styles: [],
			routeData: {
				route: "/raw/readme/astrocompress",
				type: "page",
				pattern: "^\\/Raw\\/Readme\\/AstroCompress\\/?$",
				segments: [
					[{ content: "Raw", dynamic: !1, spread: !1 }],
					[{ content: "Readme", dynamic: !1, spread: !1 }],
					[{ content: "AstroCompress", dynamic: !1, spread: !1 }],
				],
				params: [],
				component: "Source/pages/Raw/Readme/AstroCompress/index.astro",
				pathname: "/Raw/Readme/AstroCompress",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [{ type: "external", value: "/_astro/page.9Vx75qD_.js" }],
			styles: [],
			routeData: {
				route: "/raw/readme/astrocritters",
				type: "page",
				pattern: "^\\/Raw\\/Readme\\/AstroCritters\\/?$",
				segments: [
					[{ content: "Raw", dynamic: !1, spread: !1 }],
					[{ content: "Readme", dynamic: !1, spread: !1 }],
					[{ content: "AstroCritters", dynamic: !1, spread: !1 }],
				],
				params: [],
				component: "Source/pages/Raw/Readme/AstroCritters/index.astro",
				pathname: "/Raw/Readme/AstroCritters",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [{ type: "external", value: "/_astro/page.9Vx75qD_.js" }],
			styles: [],
			routeData: {
				route: "/raw/readme/astrobiome",
				type: "page",
				pattern: "^\\/Raw\\/Readme\\/AstroBiome\\/?$",
				segments: [
					[{ content: "Raw", dynamic: !1, spread: !1 }],
					[{ content: "Readme", dynamic: !1, spread: !1 }],
					[{ content: "AstroBiome", dynamic: !1, spread: !1 }],
				],
				params: [],
				component: "Source/pages/Raw/Readme/AstroBiome/index.astro",
				pathname: "/Raw/Readme/AstroBiome",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
		{
			file: "",
			links: [],
			scripts: [{ type: "external", value: "/_astro/page.9Vx75qD_.js" }],
			styles: [],
			routeData: {
				route: "/raw/readme/astrorome",
				type: "page",
				pattern: "^\\/Raw\\/Readme\\/AstroRome\\/?$",
				segments: [
					[{ content: "Raw", dynamic: !1, spread: !1 }],
					[{ content: "Readme", dynamic: !1, spread: !1 }],
					[{ content: "AstroRome", dynamic: !1, spread: !1 }],
				],
				params: [],
				component: "Source/pages/Raw/Readme/AstroRome/index.astro",
				pathname: "/Raw/Readme/AstroRome",
				prerender: !1,
				fallbackRoutes: [],
				_meta: { trailingSlash: "ignore" },
			},
		},
	],
	site: "https://nikolahristov.tech/",
	base: "/",
	trailingSlash: "ignore",
	compressHTML: !0,
	componentMetadata: [],
	renderers: [],
	clientDirectives: [
		[
			"idle",
			'(()=>{var i=t=>{let e=async()=>{await(await t())()};"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event("astro:idle"));})();',
		],
		[
			"load",
			'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event("astro:load"));})();',
		],
		[
			"media",
			'(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener("change",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event("astro:media"));})();',
		],
		[
			"only",
			'(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event("astro:only"));})();',
		],
		[
			"visible",
			'(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event("astro:visible"));})();',
		],
	],
	entryModules: {
		"\0@astro-page:Source/pages/index@_@astro": "pages/index.astro.mjs",
		"\0@astro-page:Source/pages/Readme/[Slug]@_@astro":
			"pages/readme/_slug_.astro.mjs",
		"\0@astro-page:Source/pages/404@_@astro": "pages/404.astro.mjs",
		"\0@astro-page:Source/pages/Raw/Readme/CodeEditorLand/index@_@astro":
			"pages/raw/readme/codeeditorland.astro.mjs",
		"\0@astro-page:Source/pages/Raw/Readme/NikolaRHristov/index@_@astro":
			"pages/raw/readme/nikolarhristov.astro.mjs",
		"\0@astro-page:Source/pages/Raw/Readme/RoundedCorners/index@_@astro":
			"pages/raw/readme/roundedcorners.astro.mjs",
		"\0@astro-page:Source/pages/Raw/Readme/AstroCompress/index@_@astro":
			"pages/raw/readme/astrocompress.astro.mjs",
		"\0@astro-page:Source/pages/Raw/Readme/AstroCritters/index@_@astro":
			"pages/raw/readme/astrocritters.astro.mjs",
		"\0@astro-page:Source/pages/Raw/Readme/AstroBiome/index@_@astro":
			"pages/raw/readme/astrobiome.astro.mjs",
		"\0@astro-page:Source/pages/Raw/Readme/AstroRome/index@_@astro":
			"pages/raw/readme/astrorome.astro.mjs",
		"\0@astro-renderers": "renderers.mjs",
		"\0empty-middleware": "_empty-middleware.mjs",
		"/Source/pages/Readme/[Slug].astro": "chunks/pages/_Slug__rIZt-kTz.mjs",
		"\0@astrojs-manifest": "manifest_oYHocsqi.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Option/Icon.ts":
			"chunks/Icon_uuPhmhcq.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Library/Bytes.ts":
			"chunks/Bytes_JgK_ZmWS.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Library/Chunks.ts":
			"chunks/Chunks_n4Msk03f.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Library/Environment.ts":
			"chunks/Environment_KSxVypBH.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightCSS3.svg":
			"chunks/LightCSS3_TktGNe4c.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkCSS3.svg":
			"chunks/DarkCSS3_H4JE1iOo.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightGNUBash.svg":
			"chunks/LightGNUBash_VLF5BQ9n.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkGNUBash.svg":
			"chunks/DarkGNUBash_gq02LCZN.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightGo.svg":
			"chunks/LightGo_q-fftK_3.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkGo.svg":
			"chunks/DarkGo_ArpzQ3rm.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightJavaScript.svg":
			"chunks/LightJavaScript_dexnqa6J.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkJavaScript.svg":
			"chunks/DarkJavaScript_IvpGawJL.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightLua.svg":
			"chunks/LightLua_jMF8s72K.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkLua.svg":
			"chunks/DarkLua_TxMtbmS3.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightMDX.svg":
			"chunks/LightMDX_vcT8_JyU.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkMDX.svg":
			"chunks/DarkMDX_eiSzooiH.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightPowershell.svg":
			"chunks/LightPowershell_U1_QbMYI.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkPowershell.svg":
			"chunks/DarkPowershell_IEYD2EcH.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightPython.svg":
			"chunks/LightPython_3q7GykCm.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkPython.svg":
			"chunks/DarkPython_ZzULR9I1.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightRust.svg":
			"chunks/LightRust_x4yPsu6R.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkRust.svg":
			"chunks/DarkRust_X2MRHylq.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightTypeScript.svg":
			"chunks/LightTypeScript_UVJA1FuC.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkTypeScript.svg":
			"chunks/DarkTypeScript_rHOCIrtX.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightWindowsTerminal.svg":
			"chunks/LightWindowsTerminal_V0XRd0hr.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkWindowsTerminal.svg":
			"chunks/DarkWindowsTerminal_O3MuFUPQ.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/LightAstro.svg":
			"chunks/LightAstro_CYKWf3tB.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Package/DarkAstro.svg":
			"chunks/DarkAstro_RZ2dTB8E.mjs",
		"D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/body-class-plugin/dist/index.modern.js":
			"_astro/index.modern.krbs8bWt.js",
		"D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/overlay-theme/dist/index.modern.js":
			"_astro/index.modern.grwuNUiy.js",
		"astro:scripts/page.js": "_astro/page.9Vx75qD_.js",
		"D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/head-plugin/dist/index.modern.js":
			"_astro/index.modern.cx1mZwdG.js",
		"D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/preload-plugin/dist/index.modern.js":
			"_astro/index.modern.zoi7uPwP.js",
		"/astro/hoisted.js?q=0": "_astro/hoisted.qxbo64jz.js",
		"D:/Developer/Application/NikolaRHristov/Website/node_modules/@swup/scroll-plugin/dist/index.modern.js":
			"_astro/index.modern.37hqqUNE.js",
		"D:/Developer/Application/NikolaRHristov/Website/node_modules/swup/dist/Swup.modern.js":
			"_astro/Swup.modern.ysAiPt2N.js",
		"D:/Developer/Application/NikolaRHristov/Website/node_modules/firebase/app/dist/esm/index.esm.js":
			"_astro/index.esm.aHQLvXRj.js",
		"astro:scripts/before-hydration.js": "",
	},
	assets: ["/_astro/page.9Vx75qD_.js"],
});
export { manifest };
