import { c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import { $ as $$NPM$1 } from '../../../../chunks/NPM_DM8NiFew.mjs';
import { $ as $$Row } from '../../../../chunks/Row_CgfhtwN_.mjs';
export { r as renderers } from '../../../../chunks/Parse_BpXc5kYA.mjs';

const $$NPM = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "NPM", $$NPM$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Readme/CodeEditorLand/Dependency/Biome/NPM.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "NPM", $$NPM, {})}${maybeRenderHead()}<a href="HTTPS://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FDependencyTauriNPM?ref=badge_large&issueType=license"><img src="HTTPS://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FDependencyTauriNPM.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/DependencyBiomeNPM/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/DependencyBiomeNPM/index.astro";
const $$url = "/Raw/Readme/CodeEditorLand/DependencyBiomeNPM";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
