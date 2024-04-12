import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_CIhPDN5Z.mjs';
import 'kleur/colors';
import { $ as $$Cargo$1 } from './Cargo_3aPVeszW.mjs';
import { a as $$Row } from './Row_MwCT5AmO.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Cargo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cargo;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Cargo", $$Cargo$1, {})}${renderComponent($$result2, "Row", $$Row, { "Package": /* @__PURE__ */ new Set([
    {
      "GitHub:CodeEditorLand/FoundationLandCargoDocument": {
        Name: "Document"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandCargoMaintain": {
        Name: "Maintain"
      }
    },
    {
      "GitHub:CodeEditorLand/FoundationLandCargoRuntime": {
        Name: "Runtime"
      }
    }
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/CodeEditorLand/Foundation/Land/Cargo.astro", void 0);

export { $$Cargo as $ };
//# sourceMappingURL=Cargo_DqezoDj3.mjs.map
