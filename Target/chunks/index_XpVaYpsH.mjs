import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import { $ as $$Heading, a as $$Row } from './Row_IrM2WuDj.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Dark/Image/GitHub/Astro.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/Astro.svg", "Text": "\u2001Related\u2001\u2014", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "NPM:@playform/compress",
    "NPM:@playform/format"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/PlayForm/Inline/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/PlayForm/Inline/index.astro";
const $$url = "/Raw/Readme/PlayForm/Inline";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_XpVaYpsH.mjs.map
