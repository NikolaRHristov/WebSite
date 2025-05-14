import { c as createComponent, m as maybeRenderHead, e as addAttribute, d as renderSlot, a as renderTemplate, s as spreadAttributes, g as renderSlotToString, h as renderAllHeadContent, u as unescapeHTML, b as createAstro, i as renderScript, r as renderComponent, F as Fragment } from './astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import 'clsx';
import { c as createSvgComponent } from './runtime_DmAx2Xgx.mjs';
/* empty css                         */
import { renderSync, parse, walkSync, ELEMENT_NODE } from 'ultrahtml';

const DarkGitHub = createSvgComponent({"meta":{"src":"/_astro/GitHub.CfOmMIR5.svg","width":98,"height":96,"format":"svg"},"attributes":{"width":"98","height":"96"},"children":"\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z\" fill=\"#eaeaea\" />\n"});

const GitHub = createSvgComponent({"meta":{"src":"/_astro/GitHub.BNBI8Cyf.svg","width":98,"height":96,"format":"svg"},"attributes":{"width":"98","height":"96"},"children":"\n\t<path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z\" fill=\"#151515\" />\n"});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="Footer flex"> <ul class="flex shrink flex-col justify-start sm:flex-row"> <li> <a href="HTTPS://GitHub.Com/NikolaRHristov" target="_blank" rel="noopener noreferrer" class="icon flex"> <picture> <source media="(prefers-color-scheme: light)"${addAttribute(GitHub.src, "srcset")}> <source media="(prefers-color-scheme: dark)"${addAttribute(DarkGitHub.src, "srcset")}> <img alt="GitHub"${addAttribute(GitHub.src, "src")}> </picture> </a> </li> </ul> ${renderSlot($$result, $$slots["default"])} </footer> `;
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

const $$Astro$1 = createAstro("HTTPS://NikolaHristov.Tech");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "D:/Developer/node_modules/.pnpm/astro@5.7.13_@types+node@22_7ec6c75f50d81776070adebb741bd6a9/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Developer/node_modules/.pnpm/astro@5.7.13_@types+node@22_7ec6c75f50d81776070adebb741bd6a9/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro = createAstro("HTTPS://NikolaHristov.Tech");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    Font = [],
    Title = "Nikola Hristov",
    Description = `Founder & CEO\u2001\u{1F9D4}\u{1F3FB}\u2001@PlayForm\u2001\u2601\uFE0F`
  } = Astro2.props;
  const Link = (Link2 = []) => Link2.map(
    (Link3) => `<link rel="stylesheet" type="text/css" href="${Link3}" />`
  ).join("\n");
  return renderTemplate`<html lang="en" class="no-js" dir="ltr"> ${renderComponent($$result, "Head", Head, {}, { "default": ($$result2) => renderTemplate`${renderScript($$result2, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Layout/Base.astro?astro&type=script&index=0&lang.ts")}<title>${Title}</title><meta charset="utf-8"><meta name="description"${addAttribute(Description, "content")}><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="theme-color" content="#eaeaea"><meta name="format-detection" content="telephone=no"><meta name="twitter:dnt" content="on"><link rel="preconnect" href="HTTPS://fonts.googleapis.com" crossorigin><link rel="preconnect" href="HTTPS://fonts.gstatic.com" crossorigin><link rel="manifest" href="/Manifest.json" crossorigin="use-credentials">${renderSlot($$result2, $$slots["Head"])}${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(Link(Font.map((Font2) => Font2)))}` })}<link rel="apple-touch-icon" sizes="114x114" href="/Favicon/apple-touch-icon-114x114.png"><link rel="apple-touch-icon" sizes="120x120" href="/Favicon/apple-touch-icon-120x120.png"><link rel="apple-touch-icon" sizes="144x144" href="/Favicon/apple-touch-icon-144x144.png"><link rel="apple-touch-icon" sizes="152x152" href="/Favicon/apple-touch-icon-152x152.png"><link rel="apple-touch-icon" sizes="180x180" href="/Favicon/apple-touch-icon-180x180.png"><link rel="apple-touch-icon" sizes="57x57" href="/Favicon/apple-touch-icon-57x57.png"><link rel="apple-touch-icon" sizes="60x60" href="/Favicon/apple-touch-icon-60x60.png"><link rel="apple-touch-icon" sizes="72x72" href="/Favicon/apple-touch-icon-72x72.png"><link rel="apple-touch-icon" sizes="76x76" href="/Favicon/apple-touch-icon-76x76.png"><link rel="icon" type="image/png" sizes="16x16" href="/Favicon/favicon-16x16.png"><link rel="icon" type="image/png" sizes="192x192" href="/Favicon/android-chrome-192x192.png"><link rel="icon" type="image/png" sizes="194x194" href="/Favicon/favicon-194x194.png"><link rel="icon" type="image/png" sizes="32x32" href="/Favicon/favicon-32x32.png"><link rel="mask-icon" href="/Favicon/safari-pinned-tab.svg" color="#eaeaea"><link rel="shortcut icon" href="/favicon.ico"><meta name="msapplication-TileImage" content="/Favicon/mstile-144x144.png"><link href="HTTPS://GitHub.Com/NikolaRHristov" rel="me"><link href="HTTPS://facebook.com/nikolarahristov" rel="me"><link href="HTTPS://instagram.com/NikolaRHristov" rel="me"><link href="HTTPS://twitter.com/NikolaRHristov" rel="me"><link href="HTTPS://mastodon.social/@nikolahristov" rel="me"><link href="mailto:Nikola@PlayForm.Cloud" rel="me"><link rel="pgpkey authn" href="/key.pub"><link rel="webmention" href="HTTPS://webmention.io/nikolahristov.tech/webmention"><link rel="pingback" href="HTTPS://webmention.io/nikolahristov.tech/xmlrpc">${renderComponent($$result2, "ClientRouter", $$ClientRouter, {})}` })}${maybeRenderHead()}<body class="flex grow flex-col"> <div id="main" class="grow"> ${renderSlot($$result, $$slots["default"])} </div> <div id="footer" class="shrink"> ${renderComponent($$result, "Footer", $$Footer, {})} </div> ${renderScript($$result, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Layout/Base.astro?astro&type=script&index=1&lang.ts")} <a class="absolute top-0 left-0 hidden" rel="me" href="HTTPS://mastodon.social/@nikolahristov"></a> </body></html>`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Layout/Base.astro", void 0);

export { $$Base as $ };
