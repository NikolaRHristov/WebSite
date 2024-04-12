import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from './astro/server_CIhPDN5Z.mjs';
import 'kleur/colors';
import { $ as $$Base } from './Base_QYqKxMaE.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full flex-col"> <main class="flex grow justify-center"> <div class="flex h-full grow self-center"> <div class="container mt-16 bg-[#40367b] pt-96 sm:pb-36"> <div class="flex justify-center bg-[#527c8d]"> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/Index/Rakuten.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/Index/Rakuten.svg" alt="Rakuten" loading="lazy"> </picture> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/Index/Meta.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/Index/Meta.svg" alt="Meta" loading="lazy"> </picture> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/Index/Discord.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/Index/Discord.svg" alt="Discord" loading="lazy"> </picture> </div> <div class="grid grid-flow-col grid-cols-4"> <div class="item"> <div class="avatar"> <picture> <source src=""> </picture> </div> </div> </div> </div> </div> </main> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_yNIrsEW0.mjs.map
