import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_DWqKzqzf.mjs';
import 'kleur/colors';
import { $ as $$NPM$1 } from './NPM_B70vDGva.mjs';
import { a as $$Row } from './Row_D485p1ue.mjs';

const $$Astro$1 = createAstro("https://nikolahristov.tech/");
const $$NPM = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$NPM;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "NPM", $$NPM$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/CodeEditorLand/Foundation/OXC/NPM.astro", void 0);

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "NPM", $$NPM, {})}${maybeRenderHead()}<a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationOXCNPM?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationOXCNPM.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationOXCNPM/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationOXCNPM/index.astro";
const $$url = "/Raw/Readme/CodeEditorLand/FoundationOXCNPM";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_DSytS6m0.mjs.map
