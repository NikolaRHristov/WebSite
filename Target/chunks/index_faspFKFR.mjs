import { g as createAstro, c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from './astro/server_C16YkyrG.mjs';
import 'kleur/colors';
import { $ as $$Heading, a as $$Row } from './Row_CJDJwNfC.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const Readme = (await import('./README_C1t6XH6N.mjs')).rawContent();
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Dark/Image/GitHub/Astro.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/Astro.svg", "Text": "Related\u2001\u2014", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "NPM:@playform/compress",
    "NPM:@playform/format"
  ]) })}</table>${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(Readme)}` })}` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Inline/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Inline/index.astro";
const $$url = "/Raw/Readme/PlayForm/Inline";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_faspFKFR.mjs.map
