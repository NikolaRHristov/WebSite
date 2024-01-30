import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, u as unescapeHTML, F as Fragment, e as renderSlot, s as spreadAttributes, f as renderSlotToString, g as renderAllHeadContent } from './astro_DpUtOiSY.mjs';
import 'kleur/colors';
import 'clsx';
import 'cssesc';
/* empty css                          */
/* empty css                          */
import { renderSync, parse, walkSync, ELEMENT_NODE } from 'ultrahtml';
/* empty css                       */

const $$Astro$i = createAstro("https://nikolahristov.tech/");
const $$Heading = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
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

const Request = async (Where, With = {}, Type = "octokit") => {
  try {
    console.log(`Successfully ${Where}`);
    switch (Type) {
      case "octokit":
        return await new (await import('@octokit/core')).Octokit({
          auth: (await import('./Environment_KSxVypBH.mjs')).default.parse(process.env).Token
        }).request(Where, With);
    }
  } catch (_Error) {
    console.log(`Could not ${Where}`);
  }
};

const $$Astro$h = createAstro("https://nikolahristov.tech/");
const { default: Icon$1 } = await import('./Icon_ImOQ8Jnz.mjs');
const $$Row = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$Row;
  const Dark = "&color=black&labelColor=black&logoColor=white&logoWidth=0";
  const Light = "&color=white&labelColor=white&logoColor=black&logoWidth=0";
  const { Packages } = Astro2.props;
  let Items = /* @__PURE__ */ new Set();
  for (const Package of Packages) {
    try {
      if (Package.match(/GitHub:/)) {
        const GitHub = Package.split(":")[1];
        const Owner = GitHub?.split("/")[0];
        const Repository = GitHub?.split("/")[1];
        const _JSON = await Request(`GET /repos/${GitHub}`, {
          owner: Owner,
          repo: Repository
        });
        if (_JSON?.data) {
          Items.add({
            Link: _JSON.data?.html_url ?? "",
            Name: _JSON.data?.name ?? "",
            GitHub: _JSON.data?.full_name ?? "",
            Description: _JSON.data?.description ?? "",
            Badge: /* @__PURE__ */ new Set([
              {
                Link: `https://github.com/${Owner}/${Repository}`,
                Image: `https://img.shields.io/github/last-commit/${Owner}/${Repository}?label=Last%20Updated`,
                Alt: "Last Update"
              },
              {
                Link: `https://github.com/${Owner}/${Repository}`,
                Image: `https://img.shields.io/github/issues/${Owner}/${Repository}?label=Issues`,
                Alt: "Issues"
              },
              {
                Link: `https://github.com/${Owner}/${Repository}`,
                Image: `https://img.shields.io/github/downloads/${Owner}/${Repository}/total?label=Downloads`,
                Alt: "Downloads"
              }
            ])
          });
        }
      }
      if (Package.match(/NPM:/)) {
        const _Package = Package.split(":")[1];
        const _JSON = await (await fetch(`https://registry.npmjs.org/${_Package}`)).json();
        const GitHub = (_JSON?.homepage ?? "")?.replace(/(git\+)?http?s:\/\/github.com\//, "")?.replace("#readme", "")?.replace(".git", "");
        Items.add({
          Link: `https://github.com/${GitHub}`,
          Name: GitHub.split("/")[1] ?? "",
          GitHub,
          Description: _JSON?.description ?? "",
          Badge: /* @__PURE__ */ new Set([
            {
              Image: `https://img.shields.io/github/actions/workflow/status/${GitHub}/Node.yml?branch=main&label=Build&logo=node.js`,
              Link: `https://github.com/${GitHub}/actions/workflows/Node.yml`,
              Alt: "Build"
            },
            {
              Link: `https://npmjs.org/${_JSON.name}?activeTab=dependencies`,
              Image: `https://img.shields.io/librariesio/release/npm/${_JSON.name}?logo=dependabot&label=`,
              Alt: "Dependencies"
            },
            {
              Link: `https://npmjs.org/${_JSON.name}`,
              Image: `https://img.shields.io/npm/v/${_JSON.name}?label=Version&logo=npm`,
              Alt: "Version"
            },
            {
              Link: `https://npmjs.org/${_JSON.name}`,
              Image: `https://img.shields.io/npm/dt/${_JSON.name}?label=Downloads&logo=npm`,
              Alt: "Downloads"
            }
          ])
        });
      }
      if (Package.match(/cargo:/)) {
        const Crate = Package.split(":")[1];
        const _JSON = await (await fetch(`https://crates.io/api/v1/crates/${Crate}`)).json();
        const GitHub = (_JSON?.crate?.repository ?? "")?.replace(/(git\+)?http?s:\/\/github.com\//, "")?.replace("#readme", "")?.replace(".git", "");
        Items.add({
          Link: _JSON?.crate?.repository ?? "",
          Badge: /* @__PURE__ */ new Set([
            {
              Image: `https://img.shields.io/github/actions/workflow/status/${GitHub}/Rust.yml?branch=main&label=Build`,
              Link: `https://github.com/${GitHub}/actions/workflows/Rust.yml`,
              Alt: "Build"
            },
            {
              Link: `https://crates.io/${_JSON?.crate?.name}`,
              Image: `https://img.shields.io/crates/v/${_JSON?.crate?.name}?label=Version`,
              Alt: "Version"
            },
            {
              Link: `https://crates.io/${_JSON?.crate?.name}`,
              Image: `https://img.shields.io/crates/d/${_JSON?.crate?.name}?label=Downloads`,
              Alt: "Downloads"
            }
          ]),
          Description: _JSON?.crate?.description ?? "",
          GitHub,
          Name: _JSON?.crate?.name ?? ""
        });
      }
    } catch (_Error) {
      console.log(`Package: ${Package}`);
      console.log(_Error);
    }
  }
  for (const Item of Items) {
    const Language = (await Request(`GET /repos/${Item.GitHub}/languages`))?.data ?? [];
    Item.Language = /* @__PURE__ */ new Set();
    for (const Name in Language) {
      if (Object.prototype.hasOwnProperty.call(Language, Name)) {
        let [Light2, Dark2] = Icon$1[Name] ?? [null, null];
        Item.Language.add({
          Light: Light2,
          Dark: Dark2,
          Name,
          BoC: await (await import('./Bytes_3XqT_1lA.mjs')).default(Language[Name])
        });
      }
    }
  }
  return renderTemplate`${[...(await import('./Chunks_n4Msk03f.mjs')).default(Array.from(Items), 2)].map(
    (Row) => Row && renderTemplate`${maybeRenderHead()}<tr>${Row.map((Package) => {
      let Span = Row.length > 1 ? 2 : 3;
      Span -= Package.Badge.size >= 1 ? 1 : 0;
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<td valign="top"${addAttribute(Span, "colspan")}><br><a${addAttribute(Package.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Light}`, "srcset")}><img${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}`, "src")} alt="Stars"></picture></a><br><a${addAttribute(Package.Link, "href")} target="_blank"><b>${Package.Name}</b></a><br><b>${unescapeHTML(Package.Description?.split(
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

const $$Astro$g = createAstro("https://nikolahristov.tech/");
const $$Index$a = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Index$a;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://raw.githubusercontent.com/astro-community/AstroBiome/main/.github/Image/DarkAstro.svg", "LightIcon": "https://raw.githubusercontent.com/astro-community/AstroBiome/main/.github/Image/LightAstro.svg", "Text": "Related", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set(["NPM:astro-compress", "NPM:astro-critters"]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/AstroBiome/index.astro", void 0);

const $$file$c = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/AstroBiome/index.astro";
const $$url$c = "/Raw/Readme/AstroBiome";

const index$a = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$a,
	file: $$file$c,
	url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$f = createAstro("https://nikolahristov.tech/");
const $$Index$9 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$Index$9;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://raw.githubusercontent.com/astro-community/AstroCompress/main/.github/Image/DarkAstro.svg", "LightIcon": "https://raw.githubusercontent.com/astro-community/AstroCompress/main/.github/Image/LightAstro.svg", "Text": "Related", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set(["NPM:astro-critters", "NPM:astro-biome"]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/AstroCompress/index.astro", void 0);

const $$file$b = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/AstroCompress/index.astro";
const $$url$b = "/Raw/Readme/AstroCompress";

const index$9 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$9,
	file: $$file$b,
	url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$e = createAstro("https://nikolahristov.tech/");
const $$Index$8 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Index$8;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://raw.githubusercontent.com/astro-community/AstroCompress/main/.github/Image/DarkAstro.svg", "LightIcon": "https://raw.githubusercontent.com/astro-community/AstroCompress/main/.github/Image/LightAstro.svg", "Text": "Related", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set(["NPM:astro-compress", "NPM:astro-biome"]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/AstroCritters/index.astro", void 0);

const $$file$a = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/AstroCritters/index.astro";
const $$url$a = "/Raw/Readme/AstroCritters";

const index$8 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$8,
	file: $$file$a,
	url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://nikolahristov.tech/");
const { default: Icon } = await import('./Icon_ImOQ8Jnz.mjs');
const $$RowVertical = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$RowVertical;
  const Dark = "&color=black&labelColor=black&logoColor=white&logoWidth=0";
  const Light = "&color=white&labelColor=white&logoColor=black&logoWidth=0";
  const { Packages } = Astro2.props;
  let Items = /* @__PURE__ */ new Set();
  for (const Package of Packages) {
    try {
      if (Package.match(/GitHub:/)) {
        const GitHub = Package.split(":")[1];
        const Owner = GitHub?.split("/")[0];
        const Repository = GitHub?.split("/")[1];
        const _JSON = await Request(`GET /repos/${GitHub}`, {
          owner: Owner,
          repo: Repository
        });
        if (_JSON?.data) {
          Items.add({
            Link: _JSON.data?.html_url ?? "",
            Name: _JSON.data?.name ?? "",
            GitHub: _JSON.data?.full_name ?? "",
            Description: _JSON.data?.description ?? "",
            Badge: /* @__PURE__ */ new Set([
              {
                Link: `https://github.com/${Owner}/${Repository}`,
                Image: `https://img.shields.io/github/last-commit/${Owner}/${Repository}?label=Last%20Updated`,
                Alt: "Last Update"
              },
              {
                Link: `https://github.com/${Owner}/${Repository}`,
                Image: `https://img.shields.io/github/issues/${Owner}/${Repository}?label=Issues`,
                Alt: "Issues"
              },
              {
                Link: `https://github.com/${Owner}/${Repository}`,
                Image: `https://img.shields.io/github/downloads/${Owner}/${Repository}/total?label=Downloads`,
                Alt: "Downloads"
              }
            ])
          });
        }
      }
      if (Package.match(/NPM:/)) {
        const _Package = Package.split(":")[1];
        const _JSON = await (await fetch(`https://registry.npmjs.org/${_Package}`)).json();
        const GitHub = (_JSON?.homepage ?? "")?.replace(/(git\+)?http?s:\/\/github.com\//, "")?.replace("#readme", "")?.replace(".git", "");
        Items.add({
          Link: `https://github.com/${GitHub}`,
          Name: GitHub.split("/")[1] ?? "",
          GitHub,
          Description: _JSON?.description ?? "",
          Badge: /* @__PURE__ */ new Set([
            {
              Image: `https://img.shields.io/github/actions/workflow/status/${GitHub}/Node.yml?branch=main&label=Build&logo=node.js`,
              Link: `https://github.com/${GitHub}/actions/workflows/Node.yml`,
              Alt: "Build"
            },
            {
              Link: `https://npmjs.org/${_JSON.name}?activeTab=dependencies`,
              Image: `https://img.shields.io/librariesio/release/npm/${_JSON.name}?logo=dependabot&label=`,
              Alt: "Dependencies"
            },
            {
              Link: `https://npmjs.org/${_JSON.name}`,
              Image: `https://img.shields.io/npm/v/${_JSON.name}?label=Version&logo=npm`,
              Alt: "Version"
            },
            {
              Link: `https://npmjs.org/${_JSON.name}`,
              Image: `https://img.shields.io/npm/dt/${_JSON.name}?label=Downloads&logo=npm`,
              Alt: "Downloads"
            }
          ])
        });
      }
      if (Package.match(/cargo:/)) {
        const Crate = Package.split(":")[1];
        const _JSON = await (await fetch(`https://crates.io/api/v1/crates/${Crate}`)).json();
        const GitHub = (_JSON?.crate?.repository ?? "")?.replace(/(git\+)?http?s:\/\/github.com\//, "")?.replace("#readme", "")?.replace(".git", "");
        Items.add({
          Link: _JSON?.crate?.repository ?? "",
          Badge: /* @__PURE__ */ new Set([
            {
              Image: `https://img.shields.io/github/actions/workflow/status/${GitHub}/Rust.yml?branch=main&label=Build`,
              Link: `https://github.com/${GitHub}/actions/workflows/Rust.yml`,
              Alt: "Build"
            },
            {
              Link: `https://crates.io/${_JSON?.crate?.name}`,
              Image: `https://img.shields.io/crates/v/${_JSON?.crate?.name}?label=Version`,
              Alt: "Version"
            },
            {
              Link: `https://crates.io/${_JSON?.crate?.name}`,
              Image: `https://img.shields.io/crates/d/${_JSON?.crate?.name}?label=Downloads`,
              Alt: "Downloads"
            }
          ]),
          Description: _JSON?.crate?.description ?? "",
          GitHub,
          Name: _JSON?.crate?.name ?? ""
        });
      }
    } catch (_Error) {
      console.log(`Package: ${Package}`);
      console.log(_Error);
    }
  }
  for (const Item of Items) {
    const Language = (await Request(`GET /repos/${Item.GitHub}/languages`))?.data ?? [];
    Item.Language = /* @__PURE__ */ new Set();
    for (const Name in Language) {
      if (Object.prototype.hasOwnProperty.call(Language, Name)) {
        let [Light2, Dark2] = Icon[Name] ?? [null, null];
        Item.Language.add({
          Light: Light2,
          Dark: Dark2,
          Name,
          BoC: await (await import('./Bytes_3XqT_1lA.mjs')).default(Language[Name])
        });
      }
    }
  }
  const Site = Astro2.url.origin;
  return renderTemplate`${[...(await import('./Chunks_n4Msk03f.mjs')).default(Array.from(Items), 2)].map(
    (Row) => Row && renderTemplate`${maybeRenderHead()}<tr>${Row.map((Package) => {
      let Span = Row.length > 1 ? 2 : 3;
      Span -= Package.Badge.size >= 1 ? 1 : 0;
      return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<td valign="top"${addAttribute(Span, "colspan")}><br><a${addAttribute(Package.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Light}`, "srcset")}><img${addAttribute(`https://img.shields.io/github/stars/${Package.GitHub}?label=stars&logo=github${Dark}`, "src")} alt="Stars"></picture></a>${Array.from(Package.Badge).map((Badge) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML("&nbsp;&nbsp;")}` })}<a${addAttribute(Badge.Link, "href")} target="_blank"><picture><source media="(prefers-color-scheme: dark)"${addAttribute(`${Badge.Image}${Dark}`, "srcset")}><source media="(prefers-color-scheme: light)"${addAttribute(`${Badge.Image}${Light}`, "srcset")}><img${addAttribute(`${Badge.Image}${Dark}`, "src")}${addAttribute(Badge.Alt, "alt")}${addAttribute(Badge.Alt, "title")}></picture></a>` })}`)}<br><a${addAttribute(Package.Link, "href")} target="_blank"><b>${Package.Name}</b></a><br><b>${unescapeHTML(Package.Description)}</b><br>${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`<p>`)}` })}${Array.from(Package.Language ?? []).map(
        (Language, Index) => Language.Light && Language.Dark && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`<picture><source media="(prefers-color-scheme: dark)"${addAttribute(
          Site + Language.Light.src,
          "srcset"
        )}><source media="(prefers-color-scheme: light)"${addAttribute(
          Site + Language.Dark.src,
          "srcset"
        )}><img width="18" height="18"${addAttribute(
          Site + Language.Light.src,
          "src"
        )}${addAttribute(`${Language.BoC} of ${Language.Name}`, "title")}${addAttribute(Language.Name, "alt")}></picture>${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(
          Index + 1 == Package.Language?.size ? "" : "&nbsp;&nbsp;"
        )}` })}` })}`
      )}${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(`</p>`)}` })}</td>` })}`;
    })}</tr>`
  )}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Readme/RowVertical.astro", void 0);

const $$Astro$c = createAstro("https://nikolahristov.tech/");
const $$Index$7 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$Index$7;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F3DC}\uFE0F", "Text": "Related" })}${renderComponent($$result2, "Row", $$RowVertical, { "Packages": /* @__PURE__ */ new Set([
    "GitHub:CodeEditorLand/Land"
    // "GitHub:CodeEditorLand/ApplicationinsightsLand",
    // "GitHub:CodeEditorLand/AzureBoardsLand",
    // "GitHub:CodeEditorLand/AzureIotDeveloperKit",
    // "GitHub:CodeEditorLand/AzurePipelinesLand",
    // "GitHub:CodeEditorLand/AzureReposLand",
    // "GitHub:CodeEditorLand/AzureDatalakeToolsForLand",
    // "GitHub:CodeEditorLand/AzureStreamAnalyticsInLand",
    // "GitHub:CodeEditorLand/Codetour",
    // "GitHub:CodeEditorLand/ComposeLanguageService",
    // "GitHub:CodeEditorLand/DeoptexplorerLand",
    // "GitHub:CodeEditorLand/DevSkimLandPlugin",
    // "GitHub:CodeEditorLand/DstoolkitDevcontainers",
    // "GitHub:CodeEditorLand/Gnls",
    // "GitHub:CodeEditorLand/Linkcheckermd",
    // "GitHub:CodeEditorLand/MonacoEditor",
    // "GitHub:CodeEditorLand/NodeRequestLight",
    // "GitHub:CodeEditorLand/PlaywrightLand",
    // "GitHub:CodeEditorLand/PowerplatformLand",
    // "GitHub:CodeEditorLand/PowerplatformLandLab",
    // "GitHub:CodeEditorLand/PSDocsLand",
    // "GitHub:CodeEditorLand/PSRuleLand",
    // "GitHub:CodeEditorLand/Pvscbot",
    // "GitHub:CodeEditorLand/PythonSampleLandDjangoTutorial",
    // "GitHub:CodeEditorLand/PythonSampleLandFastapiTutorial",
    // "GitHub:CodeEditorLand/PythonSampleLandFlaskTutorial",
    // "GitHub:CodeEditorLand/SarifLandExtension",
    // "GitHub:CodeEditorLand/ScopestudioLand",
    // "GitHub:CodeEditorLand/SynapseLand",
    // "GitHub:CodeEditorLand/ThemeConverterForVs",
    // "GitHub:CodeEditorLand/TypeScriptLandExtensions",
    // "GitHub:CodeEditorLand/LandAnacondaExtensionPack",
    // "GitHub:CodeEditorLand/LandAnycode",
    // "GitHub:CodeEditorLand/LandApimanagement",
    // "GitHub:CodeEditorLand/LandAppcenter",
    // "GitHub:CodeEditorLand/LandArduino",
    // "GitHub:CodeEditorLand/LandAsa",
    // "GitHub:CodeEditorLand/LandAtomKeybindings",
    // "GitHub:CodeEditorLand/LandAutopep8",
    // "GitHub:CodeEditorLand/LandAzureAccount",
    // "GitHub:CodeEditorLand/LandAzureBlockchainEthereum",
    // "GitHub:CodeEditorLand/LandAzureFunctionsRemoteWebExtension",
    // "GitHub:CodeEditorLand/LandAzureIotEdge",
    // "GitHub:CodeEditorLand/LandAzureIotToolkit",
    // "GitHub:CodeEditorLand/LandAzureIotTools",
    // "GitHub:CodeEditorLand/LandAzurePack",
    // "GitHub:CodeEditorLand/LandAzureappservice",
    // "GitHub:CodeEditorLand/LandAzurearmtools",
    // "GitHub:CodeEditorLand/LandAzureAutomation",
    // "GitHub:CodeEditorLand/LandAzurecache",
    // "GitHub:CodeEditorLand/LandAzurecli",
    // "GitHub:CodeEditorLand/LandAzurecognitivesearch",
    // "GitHub:CodeEditorLand/LandAzurecontainerapps",
    // "GitHub:CodeEditorLand/LandAzureeventgrid",
    // "GitHub:CodeEditorLand/LandAzurefunctions",
    // "GitHub:CodeEditorLand/LandAzurehealthcareapisTools",
    // "GitHub:CodeEditorLand/LandAzurelogicapps",
    // "GitHub:CodeEditorLand/LandAzureresourcegroups",
    // "GitHub:CodeEditorLand/LandAzureserverlesspack",
    // "GitHub:CodeEditorLand/LandAzurespringcloud",
    // "GitHub:CodeEditorLand/LandAzurestaticwebapps",
    // "GitHub:CodeEditorLand/LandAzurestorage",
    // "GitHub:CodeEditorLand/LandAzuretools",
    // "GitHub:CodeEditorLand/LandAzurevirtualmachines",
    // "GitHub:CodeEditorLand/LandBackspace",
    // "GitHub:CodeEditorLand/LandBisect",
    // "GitHub:CodeEditorLand/LandBlackFormatter",
    // "GitHub:CodeEditorLand/LandBracketsKeybindings",
    // "GitHub:CodeEditorLand/LandBracketsPack",
    // "GitHub:CodeEditorLand/LandCdp",
    // "GitHub:CodeEditorLand/LandCdpProxy",
    // "GitHub:CodeEditorLand/LandChromeDebug",
    // "GitHub:CodeEditorLand/LandChromeDebugCore",
    // "GitHub:CodeEditorLand/LandCmakeTools",
    // "GitHub:CodeEditorLand/LandCmakeToolsApi",
    // "GitHub:CodeEditorLand/LandCodicons",
    // "GitHub:CodeEditorLand/LandComment",
    // "GitHub:CodeEditorLand/LandCopilotRelease",
    // "GitHub:CodeEditorLand/LandCordova",
    // "GitHub:CodeEditorLand/LandCosmosdb",
    // "GitHub:CodeEditorLand/LandCosmosdbgraph",
    // "GitHub:CodeEditorLand/LandCourseSample",
    // "GitHub:CodeEditorLand/LandCpptools",
    // "GitHub:CodeEditorLand/LandCpptoolsApi",
    // "GitHub:CodeEditorLand/LandCss",
    // "GitHub:CodeEditorLand/LandCssLanguageservice",
    // "GitHub:CodeEditorLand/LandCustomData",
    // "GitHub:CodeEditorLand/LandDapr",
    // "GitHub:CodeEditorLand/LandDataWrangler",
    // "GitHub:CodeEditorLand/LandDebugadapterNode",
    // "GitHub:CodeEditorLand/LandDeployAzure",
    // "GitHub:CodeEditorLand/LandDevChromeLauncher",
    // "GitHub:CodeEditorLand/LandDevContainers",
    // "GitHub:CodeEditorLand/LandDiagnosticTools",
    // "GitHub:CodeEditorLand/LandDiscussions",
    // "GitHub:CodeEditorLand/LandDocker",
    // "GitHub:CodeEditorLand/LandDockerExtensibility",
    // "GitHub:CodeEditorLand/LandDocs",
    // "GitHub:CodeEditorLand/LandDocsArchive",
    // "GitHub:CodeEditorLand/LandDocsAuthoring",
    // "GitHub:CodeEditorLand/LandDotnettools",
    // "GitHub:CodeEditorLand/LandDtdl",
    // "GitHub:CodeEditorLand/LandDts",
    // "GitHub:CodeEditorLand/LandDwarfDebugging",
    // "GitHub:CodeEditorLand/LandDwarfDebuggingExt",
    // "GitHub:CodeEditorLand/LandEdgeDebug",
    // "GitHub:CodeEditorLand/LandEdgeDebug2",
    // "GitHub:CodeEditorLand/LandEdgeDevtools",
    // "GitHub:CodeEditorLand/LandEdgeDevtoolsNetwork",
    // "GitHub:CodeEditorLand/LandEditorconfig",
    // "GitHub:CodeEditorLand/LandEmbeddedTools",
    // "GitHub:CodeEditorLand/LandEmmetHelper",
    // "GitHub:CodeEditorLand/LandEmmetLegacy",
    // "GitHub:CodeEditorLand/LandEslint",
    // "GitHub:CodeEditorLand/LandExplorerCommand",
    // "GitHub:CodeEditorLand/LandExtensionRecommender",
    // "GitHub:CodeEditorLand/LandExtensionSamples",
    // "GitHub:CodeEditorLand/LandExtensionTelemetry",
    // "GitHub:CodeEditorLand/LandExtensionTestRunner",
    // "GitHub:CodeEditorLand/LandExtensionLand",
    // "GitHub:CodeEditorLand/LandFigmaIcons",
    // "GitHub:CodeEditorLand/LandFigmaToolkit",
    // "GitHub:CodeEditorLand/LandFileDownloader",
    // "GitHub:CodeEditorLand/LandFileDownloaderApi",
    // "GitHub:CodeEditorLand/LandFilewatcherWindows",
    // "GitHub:CodeEditorLand/LandFlake8",
    // "GitHub:CodeEditorLand/LandGather",
    // "GitHub:CodeEditorLand/LandGeneratorCode",
    // "GitHub:CodeEditorLand/LandGeneratorCodeJavascript",
    // "GitHub:CodeEditorLand/LandGithubIssueNotebooks",
    // "GitHub:CodeEditorLand/LandGithubIssuesPrs",
    // "GitHub:CodeEditorLand/LandGithubTriageActions",
    // "GitHub:CodeEditorLand/LandGithubTriageExtension",
    // "GitHub:CodeEditorLand/LandGo",
    // "GitHub:CodeEditorLand/LandGradle",
    // "GitHub:CodeEditorLand/LandGrammarUpdater",
    // "GitHub:CodeEditorLand/LandGulpElectron",
    // "GitHub:CodeEditorLand/LandHexeditor",
    // "GitHub:CodeEditorLand/LandHtmlLanguageservice",
    // "GitHub:CodeEditorLand/LandHtmlhint",
    // "GitHub:CodeEditorLand/LandHtmltagwrap",
    // "GitHub:CodeEditorLand/LandHydrate",
    // "GitHub:CodeEditorLand/LandIcons",
    // "GitHub:CodeEditorLand/LandIconvLiteUmd",
    // "GitHub:CodeEditorLand/LandIosWebDebug",
    // "GitHub:CodeEditorLand/LandIotWorkbench",
    // "GitHub:CodeEditorLand/LandIsort",
    // "GitHub:CodeEditorLand/LandJavaDebug",
    // "GitHub:CodeEditorLand/LandJavaDependency",
    // "GitHub:CodeEditorLand/Landtestcover",
    // "GitHub:CodeEditorLand/LandJavaInstaller",
    // "GitHub:CodeEditorLand/LandJavaPack",
    // "GitHub:CodeEditorLand/LandJavaTest",
    // "GitHub:CodeEditorLand/LandJsAtomGrammar",
    // "GitHub:CodeEditorLand/LandJsDebug",
    // "GitHub:CodeEditorLand/LandJsDebugBrowsers",
    // "GitHub:CodeEditorLand/LandJsDebugCompanion",
    // "GitHub:CodeEditorLand/LandJsProfileVisualizer",
    // "GitHub:CodeEditorLand/LandJscs",
    // "GitHub:CodeEditorLand/LandJshint",
    // "GitHub:CodeEditorLand/LandJsonLanguageservice",
    // "GitHub:CodeEditorLand/LandJSON.tmLanguage",
    // "GitHub:CodeEditorLand/LandJupyter",
    // "GitHub:CodeEditorLand/LandJupyterCellTags",
    // "GitHub:CodeEditorLand/LandJupyterHub",
    // "GitHub:CodeEditorLand/LandJupyterIpywidgets",
    // "GitHub:CodeEditorLand/LandJupyterKeymap",
    // "GitHub:CodeEditorLand/LandJupyterLspMiddleware",
    // "GitHub:CodeEditorLand/LandJupyterPowertoys",
    // "GitHub:CodeEditorLand/LandJupyterSlideshow",
    // "GitHub:CodeEditorLand/LandJvmTools",
    // "GitHub:CodeEditorLand/LandL10n",
    // "GitHub:CodeEditorLand/LandLanguagedetection",
    // "GitHub:CodeEditorLand/LandLanguageserverNode",
    // "GitHub:CodeEditorLand/LandLanguageserverProtocolFoldingprovider",
    // "GitHub:CodeEditorLand/LandLaTeX",
    // "GitHub:CodeEditorLand/LandLinuxBuildAgent",
    // "GitHub:CodeEditorLand/LandLivepreview",
    // "GitHub:CodeEditorLand/LandLoader",
    // "GitHub:CodeEditorLand/LandLoc",
    // "GitHub:CodeEditorLand/LandLocDeprecated",
    // "GitHub:CodeEditorLand/LandLombok",
    // "GitHub:CodeEditorLand/LandLsifExtension",
    // "GitHub:CodeEditorLand/LandMakecode",
    // "GitHub:CodeEditorLand/LandMakefileTools",
    // "GitHub:CodeEditorLand/LandMarkdownItKatex",
    // "GitHub:CodeEditorLand/LandMarkdownLanguageservice",
    // "GitHub:CodeEditorLand/LandMarkdownNotebook",
    // "GitHub:CodeEditorLand/LandMarkdownTmGrammar",
    // "GitHub:CodeEditorLand/LandMaven",
    // "GitHub:CodeEditorLand/LandMDTools",
    // "GitHub:CodeEditorLand/LandMezzurite",
    // "GitHub:CodeEditorLand/LandMinimist",
    // "GitHub:CodeEditorLand/LandMockDebug",
    // "GitHub:CodeEditorLand/LandMongodb",
    // "GitHub:CodeEditorLand/LandMonoDebug",
    // "GitHub:CodeEditorLand/LandMssql",
    // "GitHub:CodeEditorLand/LandMypy",
    // "GitHub:CodeEditorLand/LandNls",
    // "GitHub:CodeEditorLand/LandNlsDev",
    // "GitHub:CodeEditorLand/LandNodeAzurePack",
    // "GitHub:CodeEditorLand/LandNodeDebug",
    // "GitHub:CodeEditorLand/LandNodeDebug2",
    // "GitHub:CodeEditorLand/LandNodeSqlite3",
    // "GitHub:CodeEditorLand/LandNodebook",
    // "GitHub:CodeEditorLand/LandNotebookErrorOverlay",
    // "GitHub:CodeEditorLand/LandNotebookRendererStarter",
    // "GitHub:CodeEditorLand/LandNotebookRenderers",
    // "GitHub:CodeEditorLand/LandNotebookTestdata",
    // "GitHub:CodeEditorLand/LandNotepadplusplusKeybindings",
    // "GitHub:CodeEditorLand/LandNpmScripts",
    // "GitHub:CodeEditorLand/LandOcticonsFont",
    // "GitHub:CodeEditorLand/LandOnedriveBrowser",
    // "GitHub:CodeEditorLand/LandOniguruma",
    // "GitHub:CodeEditorLand/LandOpensslPrebuilt",
    // "GitHub:CodeEditorLand/LandPerf",
    // "GitHub:CodeEditorLand/LandPerfBot",
    // "GitHub:CodeEditorLand/LandPlatformSpecificSample",
    // "GitHub:CodeEditorLand/LandPolicyWatcher",
    // "GitHub:CodeEditorLand/LandPostgresql",
    // "GitHub:CodeEditorLand/LandPowerquery",
    // "GitHub:CodeEditorLand/LandPowerquerySdk",
    // "GitHub:CodeEditorLand/LandProxyAgent",
    // "GitHub:CodeEditorLand/LandPullRequestGithub",
    // "GitHub:CodeEditorLand/LandPwaAnalyzer",
    // "GitHub:CodeEditorLand/LandPylint",
    // "GitHub:CodeEditorLand/LandPython",
    // "GitHub:CodeEditorLand/LandPythonDebugger",
    // "GitHub:CodeEditorLand/LandPythonDeviceSimulator",
    // "GitHub:CodeEditorLand/LandPythonDsExtensionPack",
    // "GitHub:CodeEditorLand/LandPythonInstaller",
    // "GitHub:CodeEditorLand/LandPythonToolsExtensionTemplate",
    // "GitHub:CodeEditorLand/LandPythonWebWasm",
    // "GitHub:CodeEditorLand/LandReactNative",
    // "GitHub:CodeEditorLand/LandReactSample",
    // "GitHub:CodeEditorLand/LandRecipes",
    // "GitHub:CodeEditorLand/LandReferencesView",
    // "GitHub:CodeEditorLand/LandRemoteRelease",
    // "GitHub:CodeEditorLand/LandRemoteRepositoriesGithub",
    // "GitHub:CodeEditorLand/LandRemoteTryCpp",
    // "GitHub:CodeEditorLand/LandRemoteTryDotnet",
    // "GitHub:CodeEditorLand/LandRemoteTryGo",
    // "GitHub:CodeEditorLand/LandRemoteTryJava",
    // "GitHub:CodeEditorLand/LandRemoteTryNode",
    // "GitHub:CodeEditorLand/LandRemoteTryPhp",
    // "GitHub:CodeEditorLand/LandRemoteTryPython",
    // "GitHub:CodeEditorLand/LandRemoteTryRust",
    // "GitHub:CodeEditorLand/LandRemoteTrySqlserver",
    // "GitHub:CodeEditorLand/LandRemoteWslRecommender",
    // "GitHub:CodeEditorLand/LandResharperKeybindings",
    // "GitHub:CodeEditorLand/LandRipgrep",
    // "GitHub:CodeEditorLand/LandRussh",
    // "GitHub:CodeEditorLand/LandSamples",
    // "GitHub:CodeEditorLand/LandSCMBuilders",
    // "GitHub:CodeEditorLand/LandSecretServiceRs",
    // "GitHub:CodeEditorLand/LandSelfhostTestProvider",
    // "GitHub:CodeEditorLand/LandSerialMonitor",
    // "GitHub:CodeEditorLand/LandServiceFabricReliableServices",
    // "GitHub:CodeEditorLand/LandServiceStatus",
    // "GitHub:CodeEditorLand/LandSimpleJupyterNotebook",
    // "GitHub:CodeEditorLand/LandSmoketestCheck",
    // "GitHub:CodeEditorLand/LandSmoketestExpress",
    // "GitHub:CodeEditorLand/LandSpellCheck",
    // "GitHub:CodeEditorLand/LandSpringBootDashboard",
    // "GitHub:CodeEditorLand/LandSpringInitializr",
    // "GitHub:CodeEditorLand/LandStac",
    // "GitHub:CodeEditorLand/LandSublimeKeybindings",
    // "GitHub:CodeEditorLand/LandTasAngular",
    // "GitHub:CodeEditorLand/LandTasExpress",
    // "GitHub:CodeEditorLand/LandTasVue",
    // "GitHub:CodeEditorLand/LandTeam",
    // "GitHub:CodeEditorLand/LandTelemetryExtractor",
    // "GitHub:CodeEditorLand/LandTensorboard",
    // "GitHub:CodeEditorLand/LandTest",
    // "GitHub:CodeEditorLand/LandTestAdapterConverter",
    // "GitHub:CodeEditorLand/LandTestCli",
    // "GitHub:CodeEditorLand/LandTestWeb",
    // "GitHub:CodeEditorLand/LandTextbuffer",
    // "GitHub:CodeEditorLand/LandTextmate",
    // "GitHub:CodeEditorLand/LandThemeColorConsumer",
    // "GitHub:CodeEditorLand/LandThemeTester",
    // "GitHub:CodeEditorLand/LandThemes",
    // "GitHub:CodeEditorLand/LandTipsAndTricks",
    // "GitHub:CodeEditorLand/LandTmdl",
    // "GitHub:CodeEditorLand/LandToolsForAi",
    // "GitHub:CodeEditorLand/LandTsPackageManager",
    // "GitHub:CodeEditorLand/LandTsTslint",
    // "GitHub:CodeEditorLand/LandTslint",
    // "GitHub:CodeEditorLand/LandTye",
    // "GitHub:CodeEditorLand/LandTypescriptNext",
    // "GitHub:CodeEditorLand/LandTypescriptTslintPlugin",
    // "GitHub:CodeEditorLand/LandUri",
    // "GitHub:CodeEditorLand/LandV8HeapTools",
    // "GitHub:CodeEditorLand/LandVsKeybindings",
    // "GitHub:CodeEditorLand/LandVsce",
    // "GitHub:CodeEditorLand/LandWasm",
    // "GitHub:CodeEditorLand/LandWebPlayground",
    // "GitHub:CodeEditorLand/LandWebviewUiToolkit",
    // "GitHub:CodeEditorLand/LandWebviewUiToolkitSamples",
    // "GitHub:CodeEditorLand/LandWiki",
    // "GitHub:CodeEditorLand/LandWin32AppContainerTokens",
    // "GitHub:CodeEditorLand/LandWindowsCaCerts",
    // "GitHub:CodeEditorLand/LandWindowsProcessTree",
    // "GitHub:CodeEditorLand/LandWindowsRegistry",
    // "GitHub:CodeEditorLand/LandWinsta11er",
    // "GitHub:CodeEditorLand/LandWordcount",
    // "GitHub:CodeEditorLand/LandZeromq",
    // "GitHub:CodeEditorLand/LandspacesQuickstart",
    // "GitHub:CodeEditorLand/DevSkim",
    // "GitHub:CodeEditorLand/TestBed",
    // "GitHub:CodeEditorLand/Oniguruma",
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/index.astro", void 0);

const $$file$9 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/index.astro";
const $$url$9 = "/Raw/Readme/CodeEditorLand";

const index$7 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$7,
	file: $$file$9,
	url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro("https://nikolahristov.tech/");
const $$Index$6 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$Index$6;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F3DC}\uFE0F", "Text": "Related" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set(["GitHub:CodeEditorLand/CargoLand"]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/Cargo/index.astro", void 0);

const $$file$8 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/Cargo/index.astro";
const $$url$8 = "/Raw/Readme/CodeEditorLand/Cargo";

const index$6 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$6,
	file: $$file$8,
	url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://nikolahristov.tech/");
const $$Index$5 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$Index$5;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h1><a href="https://holopin.io/@nikola" target="_blank"><img alt="@nikola's Holopin board" src="https://holopin.io/api/user/board?user=nikola"></a></h1><table>${renderComponent($$result2, "Heading", $$Heading, { "Text": "Project", "DarkEmoji": "\u{1F525}" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set([
    "NPM:files-pipe",
    "NPM:deployment-delete",
    "GitHub:AstroStarter/PAC-STAC",
    "cargo:innkeeper",
    "GitHub:RoundedCorners/Application"
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "Text": "Astro", "DarkIcon": "https://raw.githubusercontent.com/astro-community/AstroCompress/main/.github/Image/DarkAstro.svg", "LightIcon": "https://raw.githubusercontent.com/astro-community/AstroCompress/main/.github/Image/LightAstro.svg", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set([
    "NPM:astro-compress",
    // "NPM:astro-convert",
    "NPM:astro-critters",
    // "NPM:astro-dashboard",
    // "NPM:astro-dead-links",
    // "NPM:astro-networks",
    "NPM:astro-rome",
    // "NPM:astro-short-urls",
    "GitHub:Playform/AstroStarterTemplate"
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "Text": "NPM", "DarkIcon": "https://raw.githubusercontent.com/npm/logos/master/npm%20square/n.svg", "AltIcon": "NPM" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set(["NPM:typescript-esbuild"]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "Text": "GitHub", "DarkIcon": "https://raw.githubusercontent.com/NikolaRHristov/NikolaRHristov/main/.github/Image/GitHub-Mark-Light-32px.png", "LightIcon": "https://raw.githubusercontent.com/NikolaRHristov/NikolaRHristov/main/.github/Image/GitHub-Mark-32px.png", "AltIcon": "GitHub" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set([
    "NPM:@yesmaintain/script"
    // "NPM:github-history-slider",
  ]) })}</table><table>${renderComponent($$result2, "Heading", $$Heading, { "Text": "Dotfile", "DarkIcon": "https://raw.githubusercontent.com/jglovier/dotfiles-logo/master/dotfiles-logo-icon.png", "AltIcon": "Dotfile" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set([
    "GitHub:NikolaRHristov/Dotfile",
    "GitHub:NikolaRHristov/NVIM",
    "GitHub:NikolaRHristov/Bash",
    "GitHub:NikolaRHristov/Powershell",
    "GitHub:NikolaRHristov/ZSH"
  ]) })}</table>
Generated from: <a href="https://github.com/NikolaRHristov/Website/blob/main/Source/pages/Raw/Readme/NikolaRHristov/index.astro" target="_blank">
NikolaRHristov/Website/Source/pages/Raw/Readme/NikolaRHristov/index.astro
</a>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/NikolaRHristov/index.astro", void 0);

const $$file$7 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/NikolaRHristov/index.astro";
const $$url$7 = "/Raw/Readme/NikolaRHristov";

const index$5 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$5,
	file: $$file$7,
	url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const __variableDynamicImportRuntimeHelper = (glob, path) => {
    const v = glob[path];
    if (v) {
        return typeof v === 'function' ? v() : Promise.resolve(v);
    }
    return new Promise((_, reject) => {
        (typeof queueMicrotask === 'function' ? queueMicrotask : setTimeout)(reject.bind(null, new Error('Unknown variable dynamic import: ' + path)));
    });
};

const GitHub = new Proxy({"src":"/_astro/GitHub.aYI5MC43.svg","width":98,"height":96,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Footer/GitHub.svg";
							}
							globalThis.astroAsset.referencedImages.add("D:/Developer/Application/NikolaRHristov/Website/Source/Asset/Image/Footer/GitHub.svg");
							return target[name];
						}
					});

const $$Astro$9 = createAstro("https://nikolahristov.tech/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="Footer flex"> <ul class="flex shrink flex-col justify-start sm:flex-row"> <li> <a href="https://github.com/NikolaRHristov" target="_blank" rel="noopener noreferrer" class="icon flex"> <picture> <source media="(prefers-color-scheme: light)"${addAttribute(GitHub.src, "srcset")}> <img alt="GitHub"${addAttribute(GitHub.src, "src")}> </picture> </a> </li> </ul> ${renderSlot($$result, $$slots["default"])} </footer> `;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Component/Footer.astro", void 0);

function has(value) {
  return typeof value === "string";
}
function is(a, b) {
  return a === b;
}
function any(a, b) {
  return has(a) && b.includes(a.toLowerCase());
}
const ElementWeights = {
  META: 10,
  TITLE: 9,
  PRECONNECT: 8,
  ASYNC_SCRIPT: 7,
  IMPORT_STYLES: 6,
  SYNC_SCRIPT: 5,
  SYNC_STYLES: 4,
  PRELOAD: 3,
  DEFER_SCRIPT: 2,
  PREFETCH_PRERENDER: 1,
  OTHER: 0
};
const ElementDetectors = {
  META: isMeta,
  TITLE: isTitle,
  PRECONNECT: isPreconnect,
  DEFER_SCRIPT: isDeferScript,
  ASYNC_SCRIPT: isAsyncScript,
  IMPORT_STYLES: isImportStyles,
  SYNC_SCRIPT: isSyncScript,
  SYNC_STYLES: isSyncStyles,
  PRELOAD: isPreload,
  PREFETCH_PRERENDER: isPrefetchPrerender
};
const META_HTTP_EQUIV_KEYWORDS = [
  "accept-ch",
  "content-security-policy",
  "content-type",
  "default-style",
  "delegate-ch",
  "origin-trial",
  "x-dns-prefetch-control"
];
function isMeta(name, a) {
  if (name === "base")
    return true;
  if (name !== "meta")
    return false;
  return has(a.charset) || is(a.name, "viewport") || any(a["http-equiv"], META_HTTP_EQUIV_KEYWORDS);
}
function isTitle(name) {
  return name === "title";
}
function isPreconnect(name, { rel }) {
  return name === "link" && is(rel, "preconnect");
}
function isAsyncScript(name, { src, async }) {
  return name === "script" && has(src) && has(async);
}
function isImportStyles(name, a, children) {
  const importRe = /@import/;
  if (name === "style") {
    return importRe.test(children);
  }
  return false;
}
function isSyncScript(name, { src, defer, async, type = "" }) {
  if (name !== "script")
    return false;
  return !(has(src) && (has(defer) || has(async) || is(type, "module")) || type.includes("json"));
}
function isSyncStyles(name, { rel }) {
  if (name === "style")
    return true;
  return name === "link" && is(rel, "stylesheet");
}
function isPreload(name, { rel }) {
  return name === "link" && any(rel, ["preload", "modulepreload"]);
}
function isDeferScript(name, { src, defer, async, type }) {
  if (name !== "script")
    return false;
  return has(src) && has(defer) || has(src) && is(type, "module") && !has(async);
}
function isPrefetchPrerender(name, { rel }) {
  return name === "link" && any(rel, ["prefetch", "dns-prefetch", "prerender"]);
}
function getWeight(element) {
  for (const [id, detector] of Object.entries(ElementDetectors)) {
    const children = element.name === "style" && element.children.length > 0 ? renderSync(element) : "";
    if (detector(element.name, element.attributes, children)) {
      return ElementWeights[id];
    }
  }
  return ElementWeights.OTHER;
}

function capo(html) {
  const ast = parse(html);
  try {
    walkSync(ast, (node, parent, index) => {
      if (node.type === ELEMENT_NODE && node.name === "head") {
        if (parent) {
          parent.children.splice(index, 1, getSortedHead(node));
          throw "done";
        }
      }
    });
  } catch (e) {
    if (e !== "done")
      throw e;
  }
  return renderSync(ast);
}
function getSortedHead(head) {
  const weightedChildren = head.children.map((node) => {
    if (node.type === ELEMENT_NODE) {
      const weight = getWeight(node);
      return [weight, node];
    }
  }).filter(Boolean);
  const children = weightedChildren.sort((a, b) => b[0] - a[0]).map(([_, element]) => element);
  return { ...head, children };
}

const Head = createComponent({
  factory: async (result, props, slots) => {
    let head = "";
    head += `<head${spreadAttributes(props)} data-capo>`;
    head += await renderSlotToString(result, slots.default);
    head += renderAllHeadContent(result);
    head += "</head>";
    return unescapeHTML(capo(head));
  }
});

const $$Astro$8 = createAstro("https://nikolahristov.tech/");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "D:/Developer/Application/NikolaRHristov/Website/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$7 = createAstro("https://nikolahristov.tech/");
const $$Base = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Base;
  const {
    Font = [],
    Title = "Nikola Hristov",
    Description = "CEO @Playform"
  } = Astro2.props;
  const Link = (Link2 = []) => Link2.map(
    (Link3) => `<link rel="stylesheet" type="text/css" href="${Link3}" />`
  ).join("\n");
  return renderTemplate`<html lang="en" class="no-js" dir="ltr"> ${renderComponent($$result, "Head", Head, {}, { "default": ($$result2) => renderTemplate`<title>${Title}</title><meta charset="utf-8"><meta name="description"${addAttribute(Description, "content")}><meta name="viewport" content="width=device-width,initial-scale=1.0"><meta name="theme-color" content="#ffffff"><meta name="format-detection" content="telephone=no"><meta name="twitter:dnt" content="on"><link rel="preconnect" href="https://fonts.googleapis.com" crossorigin><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="manifest" href="/site.webmanifest" crossorigin="use-credentials">${renderSlot($$result2, $$slots["styles"])}${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(Link(Font.map((Font2) => Font2)))}` })}${renderSlot($$result2, $$slots["scripts"])}<link href="https://github.com/NikolaRHristov" rel="me"><link href="https://facebook.com/nikolarahristov" rel="me"><link href="https://instagram.com/NikolaRHristov" rel="me"><link href="https://twitter.com/NikolaRHristov" rel="me"><link href="https://mastodon.social/@nikolahristov" rel="me"><link href="mailto:nikola@nikolahristov.tech" rel="me"><link href="mailto:nikola@playform.cloud" rel="me"><link rel="pgpkey authn" href="/key.pub"><link rel="webmention" href="https://webmention.io/nikolahristov.tech/webmention"><link rel="pingback" href="https://webmention.io/nikolahristov.tech/xmlrpc">${renderComponent($$result2, "ViewTransitions", $$ViewTransitions, {})}` })}${maybeRenderHead()}<body class="flex grow flex-col"> <div id="main" class="grow bg-[#8e993c]"> ${renderSlot($$result, $$slots["default"])} </div> <div id="footer" class="shrink"> ${renderComponent($$result, "Footer", $$Footer, {})} </div>  <a class="absolute left-0 top-0 hidden" rel="me" href="https://mastodon.social/@nikolahristov"></a> </body></html>`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/Layout/Base.astro", void 0);

const $$Astro$6 = createAstro("https://nikolahristov.tech/");
const getStaticPaths = async () => [
  "AstroBiome",
  "AstroCompress",
  "AstroCritters",
  "AstroRome",
  "CodeEditorLand",
  "CodeEditorLand/NPM",
  "CodeEditorLand/Environment",
  "CodeEditorLand/Cargo",
  "NikolaRHristov",
  "RoundedCorners"
].map((Slug) => ({
  params: { Slug }
}));
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$;
  const Slug = typeof Astro2.params["Slug"] === "string" ? Astro2.params["Slug"] : "";
  const Readme = (await __variableDynamicImportRuntimeHelper((/* #__PURE__ */ Object.assign({"../Raw/Readme/AstroBiome/index.astro": () => Promise.resolve().then(() => index$a),"../Raw/Readme/AstroCompress/index.astro": () => Promise.resolve().then(() => index$9),"../Raw/Readme/AstroCritters/index.astro": () => Promise.resolve().then(() => index$8),"../Raw/Readme/AstroRome/index.astro": () => Promise.resolve().then(() => index$3),"../Raw/Readme/CodeEditorLand/index.astro": () => Promise.resolve().then(() => index$7),"../Raw/Readme/NikolaRHristov/index.astro": () => Promise.resolve().then(() => index$5),"../Raw/Readme/RoundedCorners/index.astro": () => Promise.resolve().then(() => index)})), `../Raw/Readme/${Slug}/index.astro`)).default;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="markdown-body"> ${renderComponent($$result2, "Readme", Readme, {})} </div> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Readme/[...Slug].astro", void 0);

const $$file$6 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Readme/[...Slug].astro";
const $$url$6 = "/Readme/[...Slug]";

const ____Slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file$6,
	getStaticPaths,
	url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://nikolahristov.tech/");
const $$Index$4 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Index$4;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex h-full flex-col"> <main class="flex grow justify-center"> <div class="flex h-full grow self-center"> <div class="container mt-16 bg-[#40367b] pt-96 sm:pb-36"> <div class="flex justify-center bg-[#527c8d]"> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/index/Rakuten.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/index/Rakuten.svg" alt="Rakuten" loading="lazy"> </picture> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/index/Meta.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/index/Meta.svg" alt="Meta" loading="lazy"> </picture> <picture class="mx-8 inline-grid"> <source srcset="/Image/Page/index/Discord.svg" media="(prefers-color-scheme: dark)"> <img width="260" src="/Image/Page/index/Discord.svg" alt="Discord" loading="lazy"> </picture> </div> <div class="grid grid-flow-col grid-cols-4"> <div class="item"> <div class="avatar"> <picture> <source src=""> </picture> </div> </div> </div> </div> </div> </main> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/index.astro", void 0);

const $$file$5 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/index.astro";
const $$url$5 = "";

const index$4 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$4,
	file: $$file$5,
	url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://nikolahristov.tech/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col"> <main class="flex grow justify-center"> <div class="flex grow self-center"> <div class="container sm:pb-36"> <article class="article"> <p class="text-center">404 | Not Found.</p> </article> </div> </div> </main> </div> ` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/404.astro", void 0);

const $$file$4 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/404.astro";
const $$url$4 = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file$4,
	url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://nikolahristov.tech/");
const $$Index$3 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Index$3;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://raw.githubusercontent.com/astro-community/AstroCompress/main/.github/Image/DarkAstro.svg", "LightIcon": "https://raw.githubusercontent.com/astro-community/AstroCompress/main/.github/Image/LightAstro.svg", "Text": "Related", "AltIcon": "Astro" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set(["NPM:astro-compress", "NPM:astro-critters"]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/AstroRome/index.astro", void 0);

const $$file$3 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/AstroRome/index.astro";
const $$url$3 = "/Raw/Readme/AstroRome";

const index$3 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$3,
	file: $$file$3,
	url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://nikolahristov.tech/");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F3DC}\uFE0F", "Text": "Related" })}${renderComponent($$result2, "Row", $$RowVertical, { "Packages": /* @__PURE__ */ new Set([
    "GitHub:CodeEditorLand/Cargo",
    "GitHub:CodeEditorLand/EnvironmentLand",
    "GitHub:CodeEditorLand/NPM"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/Environment/index.astro", void 0);

const $$file$2 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/Environment/index.astro";
const $$url$2 = "/Raw/Readme/CodeEditorLand/Environment";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$2,
	file: $$file$2,
	url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://nikolahristov.tech/");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "Emoji": "\u{1F3DC}\uFE0F", "Text": "Related" })}${renderComponent($$result2, "Row", $$RowVertical, { "Packages": /* @__PURE__ */ new Set([
    "GitHub:CodeEditorLand/NPMCommon",
    "GitHub:CodeEditorLand/NPMIngress"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/NPM/index.astro", void 0);

const $$file$1 = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/CodeEditorLand/NPM/index.astro";
const $$url$1 = "/Raw/Readme/CodeEditorLand/NPM";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://nikolahristov.tech/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<table>${renderComponent($$result2, "Heading", $$Heading, { "DarkIcon": "https://raw.githubusercontent.com/RoundedCorners/Application/main/src-tauri/src/Image/32x32.png", "LightIcon": "https://raw.githubusercontent.com/RoundedCorners/Application/main/src-tauri/src/Image/32x32.png", "Text": "Rounded Corners" })}${renderComponent($$result2, "Row", $$Row, { "Packages": /* @__PURE__ */ new Set([
    "GitHub:RoundedCorners/Application",
    "GitHub:RoundedCorners/Website"
  ]) })}</table>` })}`;
}, "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/RoundedCorners/index.astro", void 0);

const $$file = "D:/Developer/Application/NikolaRHristov/Website/Source/pages/Raw/Readme/RoundedCorners/index.astro";
const $$url = "/Raw/Readme/RoundedCorners";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { ____Slug_ as _, index$9 as a, index$8 as b, index$7 as c, index$6 as d, index$5 as e, index$4 as f, _404 as g, index$3 as h, index$a as i, index$2 as j, index$1 as k, index as l };
//# sourceMappingURL=prerender_0NgUHbF-.mjs.map
