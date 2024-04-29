import { c as createAstro, a as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead, F as Fragment } from './astro/server_kc-Qi11T.mjs';
import 'kleur/colors';
import { $ as $$Cargo } from './Cargo_B53L9Na2.mjs';
import { $ as $$NPM } from './NPM_BQY-B_lO.mjs';
import { $ as $$Service } from './Service_8ymlgRMt.mjs';

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<a href="https://app.fossa.com/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLand?ref=badge_small"><img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLand.svg?type=small" alt="FOSSA Status"></a>${renderComponent($$result2, "Cargo", $$Cargo, {})}${renderComponent($$result2, "Service", $$Service, {})}${renderComponent($$result2, "NPM", $$NPM, {})}<a href="https://fossa.app/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLand?ref=badge_large&issueType=license"><img src="https://fossa.app/api/projects/git%2Bgithub.com%2FCodeEditorLand%2FFoundationLand.svg?type=large&issueType=license" alt="FOSSA Status"></a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationLand/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/FoundationLand/index.astro";
const $$url = "/Raw/Readme/CodeEditorLand/FoundationLand";

export { $$Index as default, $$file as file, $$url as url };
//# sourceMappingURL=index_Bnvq-4UY.mjs.map
