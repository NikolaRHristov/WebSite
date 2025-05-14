import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_qZ-yjMJG.mjs';
/* empty css                                 */
export { r as renderers } from '../chunks/Parse_BpXc5kYA.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full flex-col"> <main class="flex grow justify-center"> <div class="flex h-full grow self-center"> <div class="container mb-20 mt-20 rounded-2xl pt-36 sm:pb-36"> <div class="flex justify-center"> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/Index/Rakuten.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/Index/Rakuten.svg" alt="Rakuten" loading="lazy"> </picture> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/Index/Meta.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/Index/Meta.svg" alt="Meta" loading="lazy"> </picture> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/Index/Discord.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/Index/Discord.svg" alt="Discord" loading="lazy"> </picture> </div> <div class="grid grid-flow-col grid-cols-4"> <div class="item"> <div class="avatar"> <picture> <source src=""> </picture> </div> </div> </div> </div> </div> </main> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
