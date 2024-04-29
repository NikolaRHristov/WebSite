import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import { $ as $$Service$1 } from './Service_D_Vjv7Zl.mjs';
import { a as $$Row } from './Row_DHqVazXj.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Service;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Service", $$Service$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/CodeEditorLand/Foundation/Land/Service.astro", void 0);

export { $$Service as $ };
//# sourceMappingURL=Service_P1C5BXt_.mjs.map
