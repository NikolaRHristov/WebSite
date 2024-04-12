import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, u as unescapeHTML, F as Fragment } from './astro/server_CIhPDN5Z.mjs';
import 'kleur/colors';

const $$Astro$1 = createAstro("https://nikolahristov.tech/");
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Heading;
  let {
    AltIcon = null,
    DarkIcon = null,
    Emoji = null,
    LightIcon = null,
    Text = null
  } = Astro2.props;
  LightIcon = LightIcon ?? DarkIcon;
  DarkIcon = DarkIcon ?? LightIcon;
  return renderTemplate`${maybeRenderHead()}<tr> <td colspan="4"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`<h3 align="center">`)}` })} <picture> ${DarkIcon ? renderTemplate`<source media="(prefers-color-scheme: dark)"${addAttribute(DarkIcon, "srcset")}>` : ""} ${LightIcon ? renderTemplate`<source media="(prefers-color-scheme: light)"${addAttribute(LightIcon, "srcset")}>` : ""} ${LightIcon ? renderTemplate`<img width="28"${addAttribute(AltIcon ?? "", "alt")}${addAttribute(LightIcon, "src")}>` : ""} </picture> ${Emoji} <br> ${Text ?? ""} <br> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`</h3>`)}` })} </td> </tr>`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Heading.astro", void 0);

const $$Astro = createAstro("https://nikolahristov.tech/");
await import('./Icon_C4pM-rEA.mjs');
const { default: Parse } = await import('./Parse_tVFEiknT.mjs');
const $$Row = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Row;
  const Dark = "&color=black&labelColor=black&logoColor=white&logoWidth=0";
  const Light = "&color=white&labelColor=white&logoColor=black&logoWidth=0";
  const Items = await Parse(Astro2.props.Package);
  return renderTemplate`${[...(await import('./Chunks_CO1rO0Y1.mjs')).default(Array.from(Items), 2)].map(
    (Row) => Row && renderTemplate`${maybeRenderHead()}<tr>${Row.map((Package) => {
      let Span = Row.length > 1 ? 2 : 3;
      Span -= Package.Badge.size >= 1 ? 1 : 0;
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<td valign="top"${addAttribute(Span, "colspan")}><br><a${addAttribute(Package.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}&logoColor=black`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Light}&logoColor=black`, "srcset")}><img${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}&logoColor=black`, "src")} alt="Stars"></picture></a><br><a${addAttribute(Package.Link, "href")} target="_blank"><b>${Package.Name}</b></a><br><b>${unescapeHTML(Package.Description?.split(
        "."
      )?.join(".<br />")?.split("!")?.join("!<br />")?.split("?")?.join("?<br />"))}</b><br></td>${Package.Badge.size >= 1 ? renderTemplate`<td valign="top"${addAttribute(Span, "colspan")}><br>${Array.from(Package.Badge).map(
        (Badge) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<a${addAttribute(Badge.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`${Badge.Image}${Dark}`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`${Badge.Image}${Light}`, "srcset")}><img${addAttribute(`${Badge.Image}${Dark}`, "src")}${addAttribute(Badge.Alt, "alt")}${addAttribute(
          Badge.Alt,
          "title"
        )}></picture></a><br>` })}`
      )}<br></td>` : ""}` })}`;
    })}</tr>`
  )}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/Row.astro", void 0);

export { $$Heading as $, $$Row as a };
//# sourceMappingURL=Row_MwCT5AmO.mjs.map
