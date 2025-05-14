import { b as createAstro, c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, m as maybeRenderHead } from '../../../../chunks/astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import { $ as $$Land } from '../../../../chunks/Land_DskmQF0l.mjs';
import { a as $$Heading, $ as $$Row } from '../../../../chunks/Row_CgfhtwN_.mjs';
import { $ as $$Table } from '../../../../chunks/Table_BnOvTqEP.mjs';
export { r as renderers } from '../../../../chunks/Parse_BpXc5kYA.mjs';

const $$Astro = createAstro("HTTPS://NikolaHristov.Tech");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Table", $$Table, {}, { "default": ($$result3) => renderTemplate`${maybeRenderHead()}<tr><td colspan="4"><h1><a href="HTTPS://holopin.io/@Nikola" target="_blank"><img alt="@Nikola's Holopin board" src="HTTPS://holopin.io/api/user/board?user=Nikola"></a></h1></td></tr>${renderComponent($$result3, "Land", $$Land, { "Open": true })}${renderComponent($$result3, "Heading", $$Heading, { "AltIcon": "NPM", "DarkIcon": "HTTPS://PlayForm.Cloud/Image/GitHub/n.svg", "Text": "NPM" })}${renderComponent($$result3, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "NPM:@playform/document",
    "NPM:@playform/build"
  ]) })}${renderComponent($$result3, "Heading", $$Heading, { "Text": "Project", "Emoji": "\u{1F525}" })}${renderComponent($$result3, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "NPM:@playform/pipe",
    "NPM:@playform/delete",
    "GitHub:PlayForm/Run",
    "GitHub:PlayForm/Summary",
    "GitHub:PlayForm/Round"
  ]) })}${renderComponent($$result3, "Heading", $$Heading, { "AltIcon": "Astro", "DarkIcon": "HTTPS://PlayForm.Cloud/Dark/Image/GitHub/Astro.svg", "LightIcon": "HTTPS://PlayForm.Cloud/Image/GitHub/Astro.svg", "Text": "Astro" })}${renderComponent($$result3, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "NPM:@playform/format",
    "NPM:@playform/compress",
    "NPM:@playform/inline",
    "GitHub:PlayForm/Starter"
  ]) })}${renderComponent($$result3, "Heading", $$Heading, { "AltIcon": "GitHub", "DarkIcon": "HTTPS://raw.githubusercontent.com/NikolaRHristov/NikolaRHristov/Current/.github/Image/GitHub-Mark-Light-32px.png", "LightIcon": "HTTPS://raw.githubusercontent.com/NikolaRHristov/NikolaRHristov/Current/.github/Image/GitHub-Mark-32px.png", "Text": "GitHub" })}${renderComponent($$result3, "Row", $$Row, { "Package": /* @__PURE__ */ new Set(["NPM:@playform/maintain"]) })}${renderComponent($$result3, "Heading", $$Heading, { "AltIcon": "DotFile", "DarkIcon": "HTTPS://raw.githubusercontent.com/jglovier/dotfiles-logo/master/dotfiles-logo-icon.png", "Text": "DotFile" })}${renderComponent($$result3, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    "GitHub:NikolaRHristov/DotFile",
    "GitHub:NikolaRHristov/NVIM",
    "GitHub:NikolaRHristov/Bash",
    "GitHub:NikolaRHristov/Powershell",
    "GitHub:NikolaRHristov/ZSH"
  ]) })}` })}
Generated from: <a href="HTTPS://GitHub.Com/NikolaRHristov/Website/blob/Current/Source/pages/Raw/Readme/NikolaRHristov/NikolaRHristov/index.astro" target="_blank">
NikolaRHristov/Website/blob/Current/Source/pages/Raw/Readme/NikolaRHristov/NikolaRHristov/index.astro
</a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/NikolaRHristov/NikolaRHristov/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/NikolaRHristov/NikolaRHristov/index.astro";
const $$url = "/Raw/Readme/NikolaRHristov/NikolaRHristov";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
