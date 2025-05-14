import { b as createAstro, c as createComponent, m as maybeRenderHead, r as renderComponent, F as Fragment, e as addAttribute, a as renderTemplate, u as unescapeHTML } from './astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro$2 = createAstro("HTTPS://NikolaHristov.Tech");
const $$Heading = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
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
  return renderTemplate`${maybeRenderHead()}<tr> <td colspan="1"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`<h3 align="center">`)}` })} <picture> ${DarkIcon ? renderTemplate`<source media="(prefers-color-scheme: dark)"${addAttribute(DarkIcon, "srcset")}>` : ""} ${LightIcon ? renderTemplate`<source media="(prefers-color-scheme: light)"${addAttribute(LightIcon, "srcset")}>` : ""} ${LightIcon ? renderTemplate`<img width="28"${addAttribute(AltIcon ?? "", "alt")}${addAttribute(LightIcon, "src")}>` : ""} </picture> ${Emoji} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`</h3>`)}` })} </td> <td colspan="3" valign="top"> ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`<h3 align="center">`)}` })} ${Text ?? ""} ${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${unescapeHTML(`</h3>`)}` })} </td> </tr>`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Readme/Heading.astro", void 0);

const $$Astro$1 = createAstro("HTTPS://NikolaHristov.Tech");
const Dark = "&color=black&labelColor=black&logoColor=white&logoWidth=0";
const Light = "&color=white&labelColor=white&logoColor=black&logoWidth=0";
const $$Badge = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Badge;
  const { Link, Image, Alt } = Astro2.props.Badge;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(Link, "href")} target="_blank"> <picture> <source media="(prefers-color-scheme: dark)"${addAttribute(`${Image}${Dark}`, "srcset")}> <source media="(prefers-color-scheme: light)"${addAttribute(`${Image}${Light}`, "srcset")}> <img${addAttribute(`${Image}${Dark}`, "src")}${addAttribute(Alt, "alt")}${addAttribute(Alt, "title")}> </picture> </a>`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Readme/Badge.astro", void 0);

const $$Astro = createAstro("HTTPS://NikolaHristov.Tech");
const { default: Icon } = await import('./Icon_CA61_XzZ.mjs');
const { default: Parse } = await import('./Parse_BpXc5kYA.mjs').then(n => n.P);
const $$Row = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Row;
  const Items = await Parse(Astro2.props.Package);
  return renderTemplate`${[
    ...(await import('./Chunks_CO1rO0Y1.mjs')).default(Array.from(Items), 2)
  ].map(
    (Row) => Row && renderTemplate`${maybeRenderHead()}<tr>${Row.map((Package) => {
      let Span = Row.length > 1 ? 2 : 3;
      let Length = Array.from(Package.Badge).filter(
        (Badge2) => !Badge2.Float
      ).length;
      Span -= Length >= 1 ? 1 : 0;
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": async ($$result2) => renderTemplate`${Length >= 1 ? renderTemplate`<td valign="top"${addAttribute(Span, "colspan")}>${Array.from(Package.Badge).filter((Badge2) => !Badge2.Float).map((_Badge) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "Badge": _Badge })}<br>` })}`)}</td>` : ""}<td valign="top"${addAttribute(Span, "colspan")}><a${addAttribute(Package.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`HTTPS://img.shields.io/github/stars/${Package.GitHub}?style=flat&label=Star&logo=github${Dark}`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`HTTPS://img.shields.io/github/stars/${Package.GitHub}?style=flat&label=Star&logo=github${Light}`, "srcset")}><img${addAttribute(`HTTPS://img.shields.io/github/stars/${Package.GitHub}?style=flat&label=Star&logo=github${Dark}`, "src")} alt="Star"></picture></a><br>${Array.from(Package.Badge).filter((Badge2) => Badge2.Float).map((_Badge) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Badge", $$Badge, { "Badge": _Badge })}<br>` })}`)}<a${addAttribute(Package.Link, "href")} target="_blank"><b>${Package.Name}</b></a></td>` })}`;
    })}</tr>`
  )}`;
}, "D:/Developer/Application/NikolaRHristov/WebSite/Source/Component/Readme/Row.astro", void 0);

export { $$Row as $, $$Heading as a };
