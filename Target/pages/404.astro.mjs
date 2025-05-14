import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_qZ-yjMJG.mjs';
/* empty css                               */
export { r as renderers } from '../chunks/Parse_BpXc5kYA.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col"> <main class="flex grow justify-center"> <div class="flex grow self-center"> <div class="container sm:pb-36"> <article class="article"> <p class="text-center">404 | Not Found.</p> </article> </div> </div> </main> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/404.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
