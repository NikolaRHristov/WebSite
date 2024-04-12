import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, F as Fragment } from './astro/server_CIhPDN5Z.mjs';
import 'kleur/colors';
import { $ as $$Heading } from './Row_MwCT5AmO.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Service = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Service;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F529}", "Text": "Service:" })}` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Heading/Service.astro", void 0);

export { $$Service as $ };
//# sourceMappingURL=Service_Ciz0oRcU.mjs.map
