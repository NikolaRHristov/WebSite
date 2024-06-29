import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, d as renderSlot, s as spreadAttributes, e as renderSlotToString, f as renderAllHeadContent, u as unescapeHTML, g as createAstro, h as renderScript, a as renderComponent, F as Fragment } from './astro/server_C16YkyrG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */
import { renderSync, parse, walkSync, ELEMENT_NODE } from 'ultrahtml';

const GitHub = new Proxy({"src":"/_astro/GitHub.BNBI8Cyf.svg","width":98,"height":96,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Developer/Application/NikolaRHristov/WebSite/Source/Asset/Image/Footer/GitHub.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/Developer/Application/NikolaRHristov/WebSite/Source/Asset/Image/Footer/GitHub.svg");
							return target[name];
						}
					});

const DarkGitHub = new Proxy({"src":"/_astro/GitHub.CfOmMIR5.svg","width":98,"height":96,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Developer/Application/NikolaRHristov/WebSite/Source/Asset/Dark/Image/Footer/GitHub.svg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("D:/Developer/Application/NikolaRHristov/WebSite/Source/Asset/Dark/Image/Footer/GitHub.svg");
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="Footer flex"> <ul class="flex shrink flex-col justify-start sm:flex-row"> <li> <a href="https://github.com/NikolaRHristov" target="_blank" rel="noopener noreferrer" class="icon flex"> <picture> <source media="(prefers-color-scheme: light)"${addAttribute(GitHub.src, "srcset")}> <source media="(prefers-color-scheme: dark)"${addAttribute(DarkGitHub.src, "srcset")}> <img alt="GitHub"${addAttribute(GitHub.src, "src")}> </picture> </a> </li> </ul> ${renderSlot($$result, $$slots["default"])} </footer> `;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Footer.astro", void 0);

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
  if (name === "base") return true;
  if (name !== "meta") return false;
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
  if (name !== "script") return false;
  return !(has(src) && (has(defer) || has(async) || is(type, "module")) || type.includes("json"));
}
function isSyncStyles(name, { rel }) {
  if (name === "style") return true;
  return name === "link" && is(rel, "stylesheet");
}
function isPreload(name, { rel }) {
  return name === "link" && any(rel, ["preload", "modulepreload"]);
}
function isDeferScript(name, { src, defer, async, type }) {
  if (name !== "script") return false;
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
    if (e !== "done") throw e;
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

const $$Astro$1 = createAstro("https://nikolahristov.tech/");
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Developer/node_modules/astro/components/ViewTransitions.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Developer/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    Font = [],
    Title = "Nikola Hristov",
    Description = `\u{1F4E6}\u2001Founder\u2001\u2192\u2001CEO\u2001\u2014\u2001\u26C5\u2001@PlayForm\u2001\u2014
\u{1F4E6}\u2001Founder\u2001\u2192\u2001Member\u2001\u2014\u2001\u{1F6EC}\u2001@CodeEditorLand\u2001\u2014`
  } = Astro2.props;
  const Link = (Link2 = []) => Link2.map(
    (Link3) => `<link rel="stylesheet" type="text/css" href="${Link3}" />`
  ).join("\n");
  return renderTemplate`<html lang="en" class="no-js" dir="ltr"> ${renderComponent($$result, "Head", Head, {}, { "default": ($$result2) => renderTemplate`${renderScript($$result2, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts")}<title>${Title}</title><meta charset="utf-8"><meta name="description"${addAttribute(Description, "content")}><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="theme-color" content="#eaeaea"><meta name="format-detection" content="telephone=no"><meta name="twitter:dnt" content="on"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">${renderSlot($$result2, $$slots["styles"])}${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(Link(Font.map((Font2) => Font2)))}` })}${renderScript($$result2, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts")}${renderSlot($$result2, $$slots["scripts"])}<link rel="apple-touch-icon" sizes="114x114" href="/Favicon/apple-touch-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/Favicon/apple-touch-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/Favicon/apple-touch-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/Favicon/apple-touch-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon-180x180.png"><link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-touch-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/Favicon/apple-touch-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/Favicon/apple-touch-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/Favicon/apple-touch-icon-76x76.png"><link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png"><link rel="icon" type="image/png" sizes="192x192" href="/Favicon/android-chrome-192x192.png"><link rel="icon" type="image/png" sizes="194x194" href="/Favicon/favicon-194x194.png"><link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png"><link rel="mask-icon" href="/Favicon/safari-pinned-tab.svg" color="#eaeaea"><link rel="shortcut icon" href="/favicon.ico"><meta name="msapplication-TileImage" content="/Favicon/mstile-144x144.png"><link href="https://github.com/NikolaRHristov" rel="me"><link href="https://facebook.com/nikolarahristov" rel="me"><link href="https://instagram.com/NikolaRHristov" rel="me"><link href="https://twitter.com/NikolaRHristov" rel="me"><link href="https://mastodon.social/@nikolahristov" rel="me"><link href="mailto:Nikola@PlayForm.Cloud" rel="me"><link rel="pgpkey authn" href="/key.pub"><link rel="webmention" href="https://webmention.io/nikolahristov.tech/webmention"><link rel="pingback" href="https://webmention.io/nikolahristov.tech/xmlrpc">${renderComponent($$result2, "ViewTransitions", $$ViewTransitions, {})}` })}${maybeRenderHead()}<body class="flex grow flex-col"> <div id="main" class="grow bg-[#eaeaea]"> ${renderSlot($$result, $$slots["default"])} </div> <div id="footer" class="shrink"> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderScript($$result, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Layout/Base.astro?astro&type=script&index=2&lang.ts")} <a class="absolute left-0 top-0 hidden" rel="me" href="https://mastodon.social/@nikolahristov"></a> </body></html>`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Layout/Base.astro", void 0);

export { $$Base as $ };
//# sourceMappingURL=Base_B9P7zcpT.mjs.map
