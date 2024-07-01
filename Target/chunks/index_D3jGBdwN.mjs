import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment, u as unescapeHTML } from './astro/server_C16YkyrG.mjs';
import 'kleur/colors';
import { $ as $$Heading, a as $$Row } from './Row_CUSgr4kC.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Readme = (await import('./README_k-EksMcS.mjs')).rawContent();
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://nikolahristov.tech/Image/GitHub/Round/32x32.png", "LightIcon": "https://nikolahristov.tech/Image/GitHub/Round/32x32.png", "Text": "Round\u2001\u2014" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set(["GitHub:PlayForm/Round"]) })}</table>${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(Readme)}` })}` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Round/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Round/index.astro";
const $$url = "/Raw/Readme/PlayForm/Round";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_D3jGBdwN.mjs.map
