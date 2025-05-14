import { b as createAstro, c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../../../chunks/astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import { a as $$Heading, $ as $$Row } from '../../../../chunks/Row_CgfhtwN_.mjs';
export { r as renderers } from '../../../../chunks/Parse_BpXc5kYA.mjs';

const $$Astro = createAstro("HTTPS://NikolaHristov.Tech");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const Readme = (await import('../../../../chunks/README_BmhDBifR.mjs').then(n => n._)).rawContent();
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "HTTPS://PlayForm.Cloud/Dark/Image/GitHub/Astro.svg", "LightIcon": "HTTPS://PlayForm.Cloud/Image/GitHub/Astro.svg", "Text": "Related", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set(["NPM:@playform/inline", "NPM:@playform/format"]) })}</table>${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${unescapeHTML(Readme)}` })}` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Compress/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Compress/index.astro";
const $$url = "/Raw/Readme/PlayForm/Compress";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
