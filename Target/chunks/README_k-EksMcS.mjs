import { c as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro/server_C16YkyrG.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p align=\"center\">\n  <img width=\"64\" height=\"64\" src=\"https://nikolahristov.tech/Image/GitHub/Round/icon.ico\" alt=\"Round\">\n</p>\n<h1 id=\"round\">Round</h1>\n<p>Rounds the corners of your Windows screen.</p>\n<p><img src=\"https://nikolahristov.tech/Image/GitHub/Round/Cover.png?v=05aa2\" alt=\"Round\"></p>\n<h2 id=\"getting-started\">Getting started</h2>\n<p><code>Round</code> sets up a system tray application using the Tauri framework. It creates\na window for each monitor available on the system, sets up a menu for the system\ntray, and handles events from the menu.</p>\n<h2 id=\"dependencies\">Dependencies</h2>\n<p>The code imports several crates:</p>\n<ul>\n<li><code>regex</code> - provides support for regular expressions</li>\n<li><code>serde_json</code>- is a JSON serialization/deserialization library</li>\n<li><code>tauri</code> - is the main framework for building cross-platform desktop apps in\nRust</li>\n<li><code>tauri_plugin_store</code> - provides a key-value store for persisting application\ndata</li>\n</ul>\n<h2 id=\"options\">Options</h2>\n<p>The app has several menu items:</p>\n<ul>\n<li>➕ <strong>Increase Size</strong></li>\n<li>➖ <strong>Decrease Size</strong></li>\n<li>↩️ <strong>Reset</strong></li>\n<li>🌑 <strong>Dark</strong></li>\n<li>☀️ <strong>Light</strong></li>\n<li>👨🏻 <strong>Show</strong></li>\n<li>🥷🏽 <strong>Hide</strong></li>\n<li>❌ <strong>Exit</strong></li>\n</ul>\n<p>Clicking on <strong>Increase Size</strong> or <strong>Decrease Size</strong> increases or decreases the\nroundness of the windows, respectively.</p>\n<p><strong>Reset</strong> sets the corner radius back to the default value of <em>23px</em>.</p>\n<p><strong>Dark</strong> and <strong>Light</strong> switch the app between dark and light mode.</p>\n<p><strong>Show</strong> and <strong>Hide</strong> show or hide all windows, respectively.</p>\n<p><strong>Exit</strong> closes the app.</p>\n<h2 id=\"changelog\">Changelog</h2>\n<p>See <a href=\"CHANGELOG.md\">CHANGELOG.md</a> for a history of changes to this app.</p>";

				const frontmatter = {};
				const file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Round/README.md";
				const url = "/Raw/Readme/PlayForm/Round/README";
				function rawContent() {
					return "<p align=\"center\">\n  <img width=\"64\" height=\"64\" src=\"https://nikolahristov.tech/Image/GitHub/Round/icon.ico\" alt=\"Round\" />\n</p>\n\n# Round\n\nRounds the corners of your Windows screen.\n\n![Round](https://nikolahristov.tech/Image/GitHub/Round/Cover.png?v=05aa2)\n\n## Getting started\n\n`Round` sets up a system tray application using the Tauri framework. It creates\na window for each monitor available on the system, sets up a menu for the system\ntray, and handles events from the menu.\n\n## Dependencies\n\nThe code imports several crates:\n\n-   `regex` - provides support for regular expressions\n-   `serde_json`- is a JSON serialization/deserialization library\n-   `tauri` - is the main framework for building cross-platform desktop apps in\n    Rust\n-   `tauri_plugin_store` - provides a key-value store for persisting application\n    data\n\n## Options\n\nThe app has several menu items:\n\n-   ➕ **Increase Size**\n-   ➖ **Decrease Size**\n-   ↩️ **Reset**\n-   🌑 **Dark**\n-   ☀️ **Light**\n-   👨🏻 **Show**\n-   🥷🏽 **Hide**\n-   ❌ **Exit**\n\nClicking on **Increase Size** or **Decrease Size** increases or decreases the\nroundness of the windows, respectively.\n\n**Reset** sets the corner radius back to the default value of _23px_.\n\n**Dark** and **Light** switch the app between dark and light mode.\n\n**Show** and **Hide** show or hide all windows, respectively.\n\n**Exit** closes the app.\n\n## Changelog\n\nSee [CHANGELOG.md](CHANGELOG.md) for a history of changes to this app.\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"round","text":"Round"},{"depth":2,"slug":"getting-started","text":"Getting started"},{"depth":2,"slug":"dependencies","text":"Dependencies"},{"depth":2,"slug":"options","text":"Options"},{"depth":2,"slug":"changelog","text":"Changelog"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
//# sourceMappingURL=README_k-EksMcS.mjs.map
