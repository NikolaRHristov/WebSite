import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment } from './astro/server_DWqKzqzf.mjs';
import 'kleur/colors';
import { $ as $$Heading } from './Row_D485p1ue.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Service;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F529}", "Text": "\u2014\u2001Service\u2001\u2014" })}` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Heading/Service.astro", void 0);

export { $$Service as $ };
//# sourceMappingURL=Service_BdqUVIAd.mjs.map
