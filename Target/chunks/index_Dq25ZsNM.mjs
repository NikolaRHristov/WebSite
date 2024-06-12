import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_B59ePMZa.mjs';
import 'kleur/colors';
import { $ as $$Cargo } from './Cargo_B5fQt1b6.mjs';
import { $ as $$NPM } from './NPM_BRAZzeEx.mjs';
import { $ as $$Service$1 } from './Service_B0UjloZa.mjs';
import { a as $$Row } from './Row_BqHV4KgH.mjs';

const $$Service = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Service", $$Service$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Readme/CodeEditorLand/Dependency/Tauri/Service.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Cargo", $$Cargo, {})}${renderComponent($$result2, "Service", $$Service, {})}${renderComponent($$result2, "NPM", $$NPM, {})}${maybeRenderHead()}<a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FDependencyTauri?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FDependencyTauri.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/DependencyTauri/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/DependencyTauri/index.astro";
const $$url = "/Raw/Readme/CodeEditorLand/DependencyTauri";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_Dq25ZsNM.mjs.map
