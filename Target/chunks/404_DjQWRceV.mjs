import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_D19umvdX.mjs';
/* empty css                       */

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col"> <main class="flex grow justify-center"> <div class="flex grow self-center"> <div class="container sm:pb-36"> <article class="article"> <p class="text-center">404 | Not Found.</p> </article> </div> </div> </main> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/404.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
//# sourceMappingURL=404_DjQWRceV.mjs.map
