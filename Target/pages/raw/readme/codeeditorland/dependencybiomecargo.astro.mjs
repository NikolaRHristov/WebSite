import { c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import { $ as $$Cargo$1 } from '../../../../chunks/Cargo_HyeOhoFG.mjs';
import { $ as $$Row } from '../../../../chunks/Row_CgfhtwN_.mjs';
export { r as renderers } from '../../../../chunks/Parse_BpXc5kYA.mjs';

const $$Cargo = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Cargo", $$Cargo$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Readme/CodeEditorLand/Dependency/Biome/Cargo.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Cargo", $$Cargo, {})}${maybeRenderHead()}<a href="HTTPS://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FDependencyTauriCargo?ref=badge_large&issueType=license"><img src="HTTPS://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FDependencyTauriCargo.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/DependencyBiomeCargo/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/DependencyBiomeCargo/index.astro";
const $$url = "/Raw/Readme/CodeEditorLand/DependencyBiomeCargo";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
