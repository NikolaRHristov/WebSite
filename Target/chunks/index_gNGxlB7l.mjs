import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_CIhPDN5Z.mjs';
import 'kleur/colors';
import { $ as $$Heading, a as $$Row } from './Row_MwCT5AmO.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Dark/Image/GitHub/Astro.svg", "LightIcon": "https://nikolahristov.tech/Image/GitHub/Astro.svg", "Text": "Related:", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "NPM:@playform/compress": {
        Name: "Compress."
      }
    },
    {
      "NPM:@playform/format": {
        Name: "Format."
      }
    }
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/Inline/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/Playform/Inline/index.astro";
const $$url = "/Raw/Readme/Playform/Inline";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_gNGxlB7l.mjs.map
