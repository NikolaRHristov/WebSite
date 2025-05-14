import { b as createAstro, c as createComponent, r as renderComponent, F as Fragment, a as renderTemplate, d as renderSlot, u as unescapeHTML } from './astro/server_DB1DuRFp.mjs';
import 'kleur/colors';

const $$Astro = createAstro("HTTPS://NikolaHristov.Tech");
const $$Table = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Table;
  const { Open } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${!Open ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML("<table>")}` })}` : ""}${renderSlot($$result2, $$slots["default"])}${!Open ? renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML("</table>")}` })}` : ""}` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Readme/Table.astro", void 0);

export { $$Table as $ };
