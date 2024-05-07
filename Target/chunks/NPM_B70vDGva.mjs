import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment } from './astro/server_DWqKzqzf.mjs';
import 'kleur/colors';
import { $ as $$Heading } from './Row_D485p1ue.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$NPM = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$NPM;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Heading", $$Heading, { "LightIcon": "https://nikolahristov.tech/Image/GitHub/NPM.svg", "DarkIcon": "https://nikolahristov.tech/Image/GitHub/NPM.svg", "Text": "\u2014\u2001NPM\u2001\u2014" })}` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Heading/NPM.astro", void 0);

export { $$NPM as $ };
//# sourceMappingURL=NPM_B70vDGva.mjs.map
