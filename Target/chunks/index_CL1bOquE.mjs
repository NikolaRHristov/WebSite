import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_DWqKzqzf.mjs';
import 'kleur/colors';
import { $ as $$Heading, a as $$Row } from './Row_D485p1ue.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://raw.githubusercontent.com/PlayForm/Round/Current/src-tauri/src/Image/32x32.png", "LightIcon": "https://raw.githubusercontent.com/PlayForm/Round/Current/src-tauri/src/Image/32x32.png", "Text": "\u2014\u2001Round\u2001\u2014" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:PlayForm/Round",
    "GitHub:RoundWindows/Website"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/RoundWindows/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/RoundWindows/index.astro";
const $$url = "/Raw/Readme/RoundWindows";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_CL1bOquE.mjs.map
