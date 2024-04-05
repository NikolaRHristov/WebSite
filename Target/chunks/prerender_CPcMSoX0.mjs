import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, e as renderSlotToString, f as renderAllHeadContent, u as unescapeHTML, g as renderComponent, F as Fragment } from './astro_Ioi2Lkbx.mjs';
import 'kleur/colors';
/* empty css                       */
/* empty css                          */
import 'clsx';
/* empty css                          */
import { renderSync, parse, walkSync, ELEMENT_NODE } from 'ultrahtml';

const GitHub = new Proxy({"src":"/_astro/GitHub.BpgjkwLj.svg","width":98,"height":96,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Footer/GitHub.svg";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Footer/GitHub.svg");
							return target[name];
						}
					});

const $$Astro$m = createAstro("https://nikolahristov.tech/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="Footer flex"> <ul class="flex shrink flex-col justify-start sm:flex-row"> <li> <a href="https://github.com/NikolaRHristov" target="_blank" rel="noopener noreferrer" class="icon flex"> <picture> <source media="(prefers-color-scheme: light)"${addAttribute(GitHub.src, "srcset")}> <img alt="GitHub"${addAttribute(GitHub.src, "src")}> </picture> </a> </li> </ul> ${renderSlot($$result, $$slots["default"])} </footer> `;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Footer.astro", void 0);

function has(value) {
  return typeof value === "string";
}
function is(a, b) {
  return a === b;
}
function any(a, b) {
  return has(a) && b.includes(a.toLowerCase());
}
const ElementWeights = {
  META: 10,
  TITLE: 9,
  PRECONNECT: 8,
  ASYNC_SCRIPT: 7,
  IMPORT_STYLES: 6,
  SYNC_SCRIPT: 5,
  SYNC_STYLES: 4,
  PRELOAD: 3,
  DEFER_SCRIPT: 2,
  PREFETCH_PRERENDER: 1,
  OTHER: 0
};
const ElementDetectors = {
  META: isMeta,
  TITLE: isTitle,
  PRECONNECT: isPreconnect,
  DEFER_SCRIPT: isDeferScript,
  ASYNC_SCRIPT: isAsyncScript,
  IMPORT_STYLES: isImportStyles,
  SYNC_SCRIPT: isSyncScript,
  SYNC_STYLES: isSyncStyles,
  PRELOAD: isPreload,
  PREFETCH_PRERENDER: isPrefetchPrerender
};
const META_HTTP_EQUIV_KEYWORDS = [
  "accept-ch",
  "content-security-policy",
  "content-type",
  "default-style",
  "delegate-ch",
  "origin-trial",
  "x-dns-prefetch-control"
];
function isMeta(name, a) {
  if (name === "base")
    return true;
  if (name !== "meta")
    return false;
  return has(a.charset) || is(a.name, "viewport") || any(a["http-equiv"], META_HTTP_EQUIV_KEYWORDS);
}
function isTitle(name) {
  return name === "title";
}
function isPreconnect(name, { rel }) {
  return name === "link" && is(rel, "preconnect");
}
function isAsyncScript(name, { src, async }) {
  return name === "script" && has(src) && has(async);
}
function isImportStyles(name, a, children) {
  const importRe = /@import/;
  if (name === "style") {
    return importRe.test(children);
  }
  return false;
}
function isSyncScript(name, { src, defer, async, type = "" }) {
  if (name !== "script")
    return false;
  return !(has(src) && (has(defer) || has(async) || is(type, "module")) || type.includes("json"));
}
function isSyncStyles(name, { rel }) {
  if (name === "style")
    return true;
  return name === "link" && is(rel, "stylesheet");
}
function isPreload(name, { rel }) {
  return name === "link" && any(rel, ["preload", "modulepreload"]);
}
function isDeferScript(name, { src, defer, async, type }) {
  if (name !== "script")
    return false;
  return has(src) && has(defer) || has(src) && is(type, "module") && !has(async);
}
function isPrefetchPrerender(name, { rel }) {
  return name === "link" && any(rel, ["prefetch", "dns-prefetch", "prerender"]);
}
function getWeight(element) {
  for (const [id, detector] of Object.entries(ElementDetectors)) {
    const children = element.name === "style" && element.children.length > 0 ? renderSync(element) : "";
    if (detector(element.name, element.attributes, children)) {
      return ElementWeights[id];
    }
  }
  return ElementWeights.OTHER;
}

function capo(html) {
  const ast = parse(html);
  try {
    walkSync(ast, (node, parent, index) => {
      if (node.type === ELEMENT_NODE && node.name === "head") {
        if (parent) {
          parent.children.splice(index, 1, getSortedHead(node));
          throw "done";
        }
      }
    });
  } catch (e) {
    if (e !== "done")
      throw e;
  }
  return renderSync(ast);
}
function getSortedHead(head) {
  const weightedChildren = head.children.map((node) => {
    if (node.type === ELEMENT_NODE) {
      const weight = getWeight(node);
      return [weight, node];
    }
  }).filter(Boolean);
  const children = weightedChildren.sort((a, b) => b[0] - a[0]).map(([_, element]) => element);
  return { ...head, children };
}

const Head = createComponent({
  factory: async (result, props, slots) => {
    let head = "";
    head += `<head${spreadAttributes(props)} data-capo>`;
    head += await renderSlotToString(result, slots.default);
    head += renderAllHeadContent(result);
    head += "</head>";
    return unescapeHTML(capo(head));
  }
});

const $$Astro$l = createAstro("https://nikolahristov.tech/");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Developer/Application/NikolaRHristov/Website/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$k = createAstro("https://nikolahristov.tech/");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    Font = [],
    Title = "Nikola R. Hristov",
    Description = "CEO @Playform"
  } = Astro2.props;
  const Link = (Link2 = []) => Link2.map(
    (Link3) => `<link rel="stylesheet" type="text/css" href="${Link3}" />`
  ).join("\n");
  return renderTemplate`<html lang="en" class="no-js" dir="ltr"> ${renderComponent($$result, "Head", Head, {}, { "default": ($$result2) => renderTemplate`<title>${Title}</title><meta charset="utf-8"><meta name="description"${addAttribute(Description, "content")}><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="theme-color" content="#ffffff"><meta name="format-detection" content="telephone=no"><meta name="twitter:dnt" content="on"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">${renderSlot($$result2, $$slots["styles"])}${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(Link(Font.map((Font2) => Font2)))}` })}${renderSlot($$result2, $$slots["scripts"])}<link href="https://github.com/NikolaRHristov" rel="me"><link href="https://facebook.com/nikolarahristov" rel="me"><link href="https://instagram.com/NikolaRHristov" rel="me"><link href="https://twitter.com/NikolaRHristov" rel="me"><link href="https://mastodon.social/@nikolahristov" rel="me"><link href="mailto:nikola@playform.cloud" rel="me"><link rel="pgpkey authn" href="/key.pub"><link rel="webmention" href="https://webmention.io/nikolahristov.tech/webmention"><link rel="pingback" href="https://webmention.io/nikolahristov.tech/xmlrpc">${renderComponent($$result2, "ViewTransitions", $$ViewTransitions, {})}` })}${maybeRenderHead()}<body class="flex grow flex-col"> <div id="main" class="grow bg-[#8e993c]"> ${renderSlot($$result, $$slots["default"])} </div> <div id="footer" class="shrink"> ${renderComponent($$result, "Footer", $$Footer, {})} </div>  <a class="absolute left-0 top-0 hidden" rel="me" href="https://mastodon.social/@nikolahristov"></a> </body></html>`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Layout/Base.astro", void 0);

const $$Astro$j = createAstro("https://nikolahristov.tech/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col"> <main class="flex grow justify-center"> <div class="flex grow self-center"> <div class="container sm:pb-36"> <article class="article"> <p class="text-center">404 | Not Found.</p> </article> </div> </div> </main> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/404.astro", void 0);

const $$file$h = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/404.astro";
const $$url$h = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file$h,
	url: $$url$h
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$i = createAstro("https://nikolahristov.tech/");
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$Heading;
  let {
    AltIcon = null,
    DarkIcon = null,
    Emoji = null,
    LightIcon = null,
    Text = null
  } = Astro2.props;
  LightIcon = LightIcon ?? DarkIcon;
  DarkIcon = DarkIcon ?? LightIcon;
  return renderTemplate`${maybeRenderHead()}<tr> <td colspan="4"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`<h3 align="center">`)}` })} <picture> ${DarkIcon ? renderTemplate`<source media="(prefers-color-scheme: dark)"${addAttribute(DarkIcon, "srcset")}>` : ""} ${LightIcon ? renderTemplate`<source media="(prefers-color-scheme: light)"${addAttribute(LightIcon, "srcset")}>` : ""} ${LightIcon ? renderTemplate`<img width="28"${addAttribute(AltIcon ?? "", "alt")}${addAttribute(LightIcon, "src")}>` : ""} </picture> ${Emoji} <br> ${Text ?? ""} <br> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`</h3>`)}` })} </td> </tr>`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Heading.astro", void 0);

const $$Astro$h = createAstro("https://nikolahristov.tech/");
await import('./Icon_C4pM-rEA.mjs');
const { default: Parse } = await import('./Parse_C3GajhOa.mjs');
const $$Row = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Row;
  const Dark = "&color=black&labelColor=black&logoColor=white&logoWidth=0";
  const Light = "&color=white&labelColor=white&logoColor=black&logoWidth=0";
  const Items = await Parse(Astro2.props.Package);
  return renderTemplate`${[...(await import('./Chunks_CO1rO0Y1.mjs')).default(Array.from(Items), 2)].map(
    (Row) => Row && renderTemplate`${maybeRenderHead()}<tr>${Row.map((Package) => {
      let Span = Row.length > 1 ? 2 : 3;
      Span -= Package.Badge.size >= 1 ? 1 : 0;
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<td valign="top"${addAttribute(Span, "colspan")}><br><a${addAttribute(Package.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}&logoColor=black`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Light}&logoColor=black`, "srcset")}><img${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}&logoColor=black`, "src")} alt="Stars"></picture></a><br><a${addAttribute(Package.Link, "href")} target="_blank"><b>${Package.Name}</b></a><br><b>${unescapeHTML(Package.Description?.split(
        "."
      )?.join(".<br />")?.split("!")?.join("!<br />")?.split("?")?.join("?<br />"))}</b><br></td>${Package.Badge.size >= 1 ? renderTemplate`<td valign="top"${addAttribute(Span, "colspan")}><br>${Array.from(Package.Badge).map(
        (Badge) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<a${addAttribute(Badge.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`${Badge.Image}${Dark}`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`${Badge.Image}${Light}`, "srcset")}><img${addAttribute(`${Badge.Image}${Dark}`, "src")}${addAttribute(Badge.Alt, "alt")}${addAttribute(
          Badge.Alt,
          "title"
        )}></picture></a><br>` })}`
      )}<br></td>` : ""}` })}`;
    })}</tr>`
  )}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Row.astro", void 0);

const $$Astro$g = createAstro("https://nikolahristov.tech/");
const $$Index$f = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$f;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundation?ref=badge_small"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundation.svg?type=small" alt="FOSSA Status"></a><table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/Land-Logo.svg", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Land-Logo.svg", "Text": "Land:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:CodeEditorLand/Foundation",
    "GitHub:CodeEditorLand/Editor",
    {
      "GitHub:CodeEditorLand/FoundationLandCargo": {
        Name: "Cargo"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandNPM": {
        Name: "NPM"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandService": {
        Name: "Service"
      }
    }
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Tauri-Glyph-Color.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/Tauri-Glyph-Color.svg", "Text": "Tauri:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "GitHub:CodeEditorLand/FoundationTauri": {
        Name: "Tauri"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationTauriCargo": {
        Name: "Cargo"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationTauriNPM": {
        Name: "NPM"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationTauriService": {
        Name: "Service"
      }
    }
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Image/GitHub/OXC-Logo-Square.png", "LightIcon": "https://nikolahristov.tech/Image/GitHub/OXC-Logo-Square.png", "Text": "OXC:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "GitHub:CodeEditorLand/FoundationOXC": {
        Name: "OXC"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationOXCCargo": {
        Name: "Cargo"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationOXCNPM": {
        Name: "NPM"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationOXCService": {
        Name: "Service"
      }
    }
  ]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundation?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundation.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/Foundation/index.astro", void 0);

const $$file$g = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/Foundation/index.astro";
const $$url$g = "/Raw/Readme/CodeEditorLand/Foundation";

const index$f = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$f,
	file: $$file$g,
	url: $$url$g
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://nikolahristov.tech/");
const $$Index$e = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$e;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLand?ref=badge_small"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLand.svg?type=small" alt="FOSSA Status"></a><table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "Text": "Cargo:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "GitHub:CodeEditorLand/FoundationLandCargoDocument": {
        Name: "Document"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandCargoMaintain": {
        Name: "Maintain"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandCargoRuntime": {
        Name: "Runtime"
      }
    }
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F529}", "Text": "Service:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "Text": "NPM:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "GitHub:CodeEditorLand/FoundationLandNPMCommon": {
        Name: "Common"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandNPMIngress": {
        Name: "Ingress"
      }
    }
  ]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLand?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLand.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationLand/index.astro", void 0);

const $$file$f = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationLand/index.astro";
const $$url$f = "/Raw/Readme/CodeEditorLand/FoundationLand";

const index$e = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$e,
	file: $$file$f,
	url: $$url$f
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro("https://nikolahristov.tech/");
const $$Index$d = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$d;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "Text": "Cargo:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "GitHub:CodeEditorLand/FoundationLandCargoDocument": {
        Name: "Document"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandCargoMaintain": {
        Name: "Maintain"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandCargoRuntime": {
        Name: "Runtime"
      }
    }
  ]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLandCargo?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLandCargo.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationLandCargo/index.astro", void 0);

const $$file$e = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationLandCargo/index.astro";
const $$url$e = "/Raw/Readme/CodeEditorLand/FoundationLandCargo";

const index$d = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$d,
	file: $$file$e,
	url: $$url$e
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://nikolahristov.tech/");
const $$Index$c = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$Index$c;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "Text": "NPM:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "GitHub:CodeEditorLand/FoundationLandNPMCommon": {
        Name: "Common"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandNPMIngress": {
        Name: "Ingress"
      }
    }
  ]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLandNPM?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLandNPM.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationLandNPM/index.astro", void 0);

const $$file$d = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationLandNPM/index.astro";
const $$url$d = "/Raw/Readme/CodeEditorLand/FoundationLandNPM";

const index$c = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$c,
	file: $$file$d,
	url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro("https://nikolahristov.tech/");
const $$Index$b = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$b;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "Text": "Cargo:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationOXCCargo?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationOXCCargo.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationOXCCargo/index.astro", void 0);

const $$file$c = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationOXCCargo/index.astro";
const $$url$c = "/Raw/Readme/CodeEditorLand/FoundationOXCCargo";

const index$b = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$b,
	file: $$file$c,
	url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro("https://nikolahristov.tech/");
const $$Index$a = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$a;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "Text": "NPM:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationOXCNPM?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationOXCNPM.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationOXCNPM/index.astro", void 0);

const $$file$b = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationOXCNPM/index.astro";
const $$url$b = "/Raw/Readme/CodeEditorLand/FoundationOXCNPM";

const index$a = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$a,
	file: $$file$b,
	url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://nikolahristov.tech/");
const $$Index$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$9;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "Text": "Cargo:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F529}", "Text": "Service:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "Text": "NPM:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationTauri?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationTauri.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationTauri/index.astro", void 0);

const $$file$a = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationTauri/index.astro";
const $$url$a = "/Raw/Readme/CodeEditorLand/FoundationTauri";

const index$9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$9,
	file: $$file$a,
	url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://nikolahristov.tech/");
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Index$8;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Cargo-Logo-Small.png", "Text": "Cargo:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationTauriCargo?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationTauriCargo.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationTauriCargo/index.astro", void 0);

const $$file$9 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationTauriCargo/index.astro";
const $$url$9 = "/Raw/Readme/CodeEditorLand/FoundationTauriCargo";

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$8,
	file: $$file$9,
	url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro("https://nikolahristov.tech/");
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Index$7;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/NPM-Logo.svg", "Text": "NPM:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table><a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationTauriNPM?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationTauriNPM.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationTauriNPM/index.astro", void 0);

const $$file$8 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationTauriNPM/index.astro";
const $$url$8 = "/Raw/Readme/CodeEditorLand/FoundationTauriNPM";

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$7,
	file: $$file$8,
	url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://nikolahristov.tech/");
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Index$6;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1><a href="https://holopin.io/@nikola" target="_blank"><img alt="@nikola's Holopin board" src="https://holopin.io/api/user/board?user=nikola"></a></h1><table>${renderComponent($$result2, "Heading", $$Heading, { "Text": "Project:", "Emoji": "\u{1F525}" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/pipe": {
        Name: "Pipe"
      }
    },
    {
      "NPM:@playform/delete": {
        Name: "Delete"
      }
    },
    {
      "cargo:innkeeper": {
        Name: "Inn"
      }
    },
    {
      "GitHub:RoundWindows/Application": {
        Name: "Round Windows"
      }
    }
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Land-Logo.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/Land-Logo.svg", "Text": "Land:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:CodeEditorLand/Foundation",
    "GitHub:CodeEditorLand/Editor",
    {
      "GitHub:CodeEditorLand/FoundationLandCargo": {
        Name: "Cargo"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandNPM": {
        Name: "NPM"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandService": {
        Name: "Service"
      }
    }
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "AltIcon": "Astro", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/DarkAstro.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/LightAstro.svg", "Text": "Astro:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/format": {
        Name: "Format."
      }
    },
    {
      "NPM:@playform/compress": {
        Name: "Compress."
      }
    },
    {
      "NPM:@playform/inline": {
        Name: "Inline."
      }
    },
    {
      "GitHub:Playform/Starter": {
        Name: "Starter."
      }
    }
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "AltIcon": "NPM", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/n.svg", "Text": "NPM:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/document": {
        Name: "Document."
      }
    },
    {
      "NPM:@playform/build": {
        Name: "Build."
      }
    }
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "AltIcon": "GitHub", "DarkIcon": "https://raw.githubusercontent.com/NikolaRHristov/NikolaRHristov/Current/.github/Image/GitHub-Mark-Light-32px.png", "LightIcon": "https://raw.githubusercontent.com/NikolaRHristov/NikolaRHristov/Current/.github/Image/GitHub-Mark-32px.png", "Text": "GitHub:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/maintain": {
        Name: "Maintain."
      }
    }
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "AltIcon": "Dotfile", "DarkIcon": "https://raw.githubusercontent.com/jglovier/dotfiles-logo/master/dotfiles-logo-icon.png", "Text": "Dotfile:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:NikolaRHristov/Dotfile",
    "GitHub:NikolaRHristov/NVIM",
    "GitHub:NikolaRHristov/Bash",
    "GitHub:NikolaRHristov/Powershell",
    "GitHub:NikolaRHristov/ZSH"
  ]) })}</table>
Generated from: <a href="https://github.com/NikolaRHristov/Website/blob/main/Source/pages/Raw/Readme/NikolaRHristov/index.astro" target="_blank">
NikolaRHristov/Website/Source/pages/Raw/Readme/NikolaRHristov/index.astro
</a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/NikolaRHristov/NikolaRHristov/index.astro", void 0);

const $$file$7 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/NikolaRHristov/NikolaRHristov/index.astro";
const $$url$7 = "/Raw/Readme/NikolaRHristov/NikolaRHristov";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$6,
	file: $$file$7,
	url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://nikolahristov.tech/");
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Image/GitHub/DarkAstro.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/LightAstro.svg", "Text": "Related:", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/compress": {
        Name: "Compress"
      }
    },
    {
      "NPM:@playform/inline": {
        Name: "Critters"
      }
    }
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/BiomeAstro/index.astro", void 0);

const $$file$6 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/BiomeAstro/index.astro";
const $$url$6 = "/Raw/Readme/Playform/BiomeAstro";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$5,
	file: $$file$6,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://nikolahristov.tech/");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Image/GitHub/DarkAstro.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/LightAstro.svg", "Text": "Related:", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/inline": {
        Name: "Critters"
      }
    },
    {
      "NPM:@playform/format": {
        Name: "Biome"
      }
    }
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/CompressAstro/index.astro", void 0);

const $$file$5 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/CompressAstro/index.astro";
const $$url$5 = "/Raw/Readme/Playform/CompressAstro";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$4,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://nikolahristov.tech/");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Image/GitHub/DarkAstro.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/LightAstro.svg", "Text": "Related:", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/compress": {
        Name: "Compress"
      }
    },
    "NPM:@playform/format"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/CrittersAstro/index.astro", void 0);

const $$file$4 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/CrittersAstro/index.astro";
const $$url$4 = "/Raw/Readme/Playform/CrittersAstro";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://nikolahristov.tech/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Image/GitHub/DarkAstro.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/LightAstro.svg", "Text": "Related:", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/compress": {
        Name: "Compress"
      }
    },
    {
      "NPM:@playform/inline": {
        Name: "Critters"
      }
    }
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/RomeAstro/index.astro", void 0);

const $$file$3 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/RomeAstro/index.astro";
const $$url$3 = "/Raw/Readme/Playform/RomeAstro";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://nikolahristov.tech/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://raw.githubusercontent.com/RoundWindows/Application/main/src-tauri/src/Image/32x32.png", "LightIcon": "https://raw.githubusercontent.com/RoundWindows/Application/main/src-tauri/src/Image/32x32.png", "Text": "Round Windows:" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:RoundWindows/Application",
    "GitHub:RoundWindows/Website"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/RoundWindows/index.astro", void 0);

const $$file$2 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/RoundWindows/index.astro";
const $$url$2 = "/Raw/Readme/RoundWindows";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const __variableDynamicImportRuntimeHelper = (glob, path) => {
    const v = glob[path];
    if (v) {
        return typeof v === 'function' ? v() : Promise.resolve(v);
    }
    return new Promise((_, reject) => {
        (typeof queueMicrotask === 'function' ? queueMicrotask : setTimeout)(reject.bind(null, new Error('Unknown variable dynamic import: ' + path)));
    });
};

const $$Astro$1 = createAstro("https://nikolahristov.tech/");
const getStaticPaths = async () => [
  "Playform/Compress",
  "Playform/Inline",
  "Playform/RomeAstro",
  "CodeEditorLand/Foundation",
  "CodeEditorLand/FoundationLand",
  "CodeEditorLand/FoundationLandCargo",
  "CodeEditorLand/FoundationLandNPM",
  "CodeEditorLand/FoundationOXC",
  "CodeEditorLand/FoundationOXCCargo",
  "CodeEditorLand/FoundationOXCNPM",
  "CodeEditorLand/FoundationTauri",
  "CodeEditorLand/FoundationTauriCargo",
  "CodeEditorLand/FoundationTauriNPM",
  "NikolaRHristov/NikolaRHristov",
  "RoundWindows"
].map((Slug) => ({
  params: { Slug }
}));
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$;
  const Slug = typeof Astro2.params["Slug"] === "string" ? Astro2.params["Slug"] : "";
  const Readme = (await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../Raw/Readme/RoundWindows/index.astro": () => Promise.resolve().then(() => index$1)})), `../Raw/Readme/${Slug}/index.astro`)).default;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="markdown-body"> ${renderComponent($$result2, "Readme", Readme, {})} </div> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Readme/[...Slug].astro", void 0);

const $$file$1 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Readme/[...Slug].astro";
const $$url$1 = "/Readme/[...Slug]";

const ____Slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file$1,
	getStaticPaths,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full flex-col"> <main class="flex grow justify-center"> <div class="flex h-full grow self-center"> <div class="container mt-16 bg-[#40367b] pt-96 sm:pb-36"> <div class="flex justify-center bg-[#527c8d]"> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/index/Rakuten.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/index/Rakuten.svg" alt="Rakuten" loading="lazy"> </picture> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/index/Meta.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/index/Meta.svg" alt="Meta" loading="lazy"> </picture> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/index/Discord.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/index/Discord.svg" alt="Discord" loading="lazy"> </picture> </div> <div class="grid grid-flow-col grid-cols-4"> <div class="item"> <div class="avatar"> <picture> <source src=""> </picture> </div> </div> </div> </div> </div> </main> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _404 as _, index$e as a, index$d as b, index$c as c, index$b as d, index$a as e, index$9 as f, index$8 as g, index$7 as h, index$f as i, index$6 as j, index$5 as k, index$4 as l, index$3 as m, index$2 as n, index$1 as o, ____Slug_ as p, index as q };
//# sourceMappingURL=prerender_CPcMSoX0.mjs.map
