import { c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, u as unescapeHTML } from '../../../../chunks/astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import { $ as $$Land } from '../../../../chunks/Land_DskmQF0l.mjs';
export { r as renderers } from '../../../../chunks/Parse_BpXc5kYA.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Readme = (await import('../../../../chunks/README_BnhwJPEE.mjs').then(n => n._)).rawContent();
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Land", $$Land, {})}${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(Readme)}` })}` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/EcoSystem/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/EcoSystem/index.astro";
const $$url = "/Raw/Readme/CodeEditorLand/EcoSystem";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
