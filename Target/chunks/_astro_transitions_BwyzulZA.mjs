import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute } from './astro_C2bZ26Y6.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Developer/Application/NikolaRHristov/Website/node_modules/astro/components/ViewTransitions.astro", void 0);
const $$ViewTransitions$1 = $$ViewTransitions;

export { $$ViewTransitions$1 as ViewTransitions };
//# sourceMappingURL=_astro_transitions_BwyzulZA.mjs.map
