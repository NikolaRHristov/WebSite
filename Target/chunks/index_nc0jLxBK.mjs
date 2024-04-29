import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import { $ as $$Cargo } from './Cargo_V40-tfmq.mjs';
import { $ as $$NPM } from './NPM_Bsg2oti8.mjs';
import { $ as $$Service$1 } from './Service_CzoR_D-h.mjs';
import { a as $$Row } from './Row_IrM2WuDj.mjs';

const $$Astro$1 = createAstro("https://nikolahristov.tech/");
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Service;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Service", $$Service$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/CodeEditorLand/Foundation/Tauri/Service.astro", void 0);

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Cargo", $$Cargo, {})}${renderComponent($$result2, "Service", $$Service, {})}${renderComponent($$result2, "NPM", $$NPM, {})}${maybeRenderHead()}<a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationTauri?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationTauri.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationTauri/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationTauri/index.astro";
const $$url = "/Raw/Readme/CodeEditorLand/FoundationTauri";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_nc0jLxBK.mjs.map
