import { c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import { a as $$Heading, $ as $$Row } from '../../../../chunks/Row_CgfhtwN_.mjs';
export { r as renderers } from '../../../../chunks/Parse_BpXc5kYA.mjs';

const $$Element = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F331}", "Text": "Element" })}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:CodeEditorLand/Echo",
    "GitHub:CodeEditorLand/Mountain",
    "GitHub:CodeEditorLand/River",
    "GitHub:CodeEditorLand/Sky",
    "GitHub:CodeEditorLand/Sun",
    "GitHub:CodeEditorLand/Wind"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Readme/CodeEditorLand/Element/Element.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Element", $$Element, {})}` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/Element/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/CodeEditorLand/Element/index.astro";
const $$url = "/Raw/Readme/CodeEditorLand/Element";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
