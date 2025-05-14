import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, a as renderTemplate } from './astro/server_DB1DuRFp.mjs';
import 'kleur/colors';
import 'clsx';

const html = () => "<p align=\"center\">\n  <img width=\"64\" height=\"64\" src=\"https://PlayForm.Cloud/Image/GitHub/Round/icon.ico\" alt=\"Round\">\n</p>\n<h1 id=\"round\">Round</h1>\n<p>Rounds the corners of your Windows screen.</p>\n<p><img src=\"https://PlayForm.Cloud/Image/GitHub/Round/Cover.png\" alt=\"Round\"></p>\n<h2 id=\"getting-started\">Getting started</h2>\n<p><code>Round</code> sets up a system tray application using the Tauri framework. It creates\r\na window for each monitor available on the system, sets up a menu for the system\r\ntray, and handles events from the menu.</p>\n<h2 id=\"dependencies\">Dependencies</h2>\n<p>The code imports several crates:</p>\n<ul>\n<li><code>regex</code> - provides support for regular expressions</li>\n<li><code>serde_json</code>- is a JSON serialization/deserialization library</li>\n<li><code>tauri</code> - is the main framework for building cross-platform desktop apps in\r\nRust</li>\n<li><code>tauri_plugin_store</code> - provides a key-value store for persisting application\r\ndata</li>\n</ul>\n<h2 id=\"options\">Options</h2>\n<p>The app has several menu items:</p>\n<ul>\n<li>➕ <strong>Increase Size</strong></li>\n<li>➖ <strong>Decrease Size</strong></li>\n<li>↩️ <strong>Reset</strong></li>\n<li>🌑 <strong>Dark</strong></li>\n<li>☀️ <strong>Light</strong></li>\n<li>👨🏻 <strong>Show</strong></li>\n<li>🥷🏽 <strong>Hide</strong></li>\n<li>❌ <strong>Exit</strong></li>\n</ul>\n<p>Clicking on <strong>Increase Size</strong> or <strong>Decrease Size</strong> increases or decreases the\r\nroundness of the windows, respectively.</p>\n<p><strong>Reset</strong> sets the corner radius back to the default value of <em>23px</em>.</p>\n<p><strong>Dark</strong> and <strong>Light</strong> switch the app between dark and light mode.</p>\n<p><strong>Show</strong> and <strong>Hide</strong> show or hide all windows, respectively.</p>\n<p><strong>Exit</strong> closes the app.</p>\n<h2 id=\"changelog\">Changelog</h2>\n<p>See <a href=\"CHANGELOG.md\"><code>CHANGELOG.md</code></a> for a history of changes to this app.</p>";

				const frontmatter = {};
				const file = "D:/Developer/Application/NikolaRHristov/WebSite/Source/pages/Raw/Readme/PlayForm/Round/README.md";
				const url = "/Raw/Readme/PlayForm/Round/README";
				function rawContent() {
					return "<p align=\"center\">\r\n  <img width=\"64\" height=\"64\" src=\"https://PlayForm.Cloud/Image/GitHub/Round/icon.ico\" alt=\"Round\" />\r\n</p>\r\n\r\n# Round\r\n\r\nRounds the corners of your Windows screen.\r\n\r\n![`Round`](https://PlayForm.Cloud/Image/GitHub/Round/Cover.png)\r\n\r\n## Getting started\r\n\r\n`Round` sets up a system tray application using the Tauri framework. It creates\r\na window for each monitor available on the system, sets up a menu for the system\r\ntray, and handles events from the menu.\r\n\r\n## Dependencies\r\n\r\nThe code imports several crates:\r\n\r\n- `regex` - provides support for regular expressions\r\n- `serde_json`- is a JSON serialization/deserialization library\r\n- `tauri` - is the main framework for building cross-platform desktop apps in\r\n  Rust\r\n- `tauri_plugin_store` - provides a key-value store for persisting application\r\n  data\r\n\r\n## Options\r\n\r\nThe app has several menu items:\r\n\r\n- ➕ **Increase Size**\r\n- ➖ **Decrease Size**\r\n- ↩️ **Reset**\r\n- 🌑 **Dark**\r\n- ☀️ **Light**\r\n- 👨🏻 **Show**\r\n- 🥷🏽 **Hide**\r\n- ❌ **Exit**\r\n\r\nClicking on **Increase Size** or **Decrease Size** increases or decreases the\r\nroundness of the windows, respectively.\r\n\r\n**Reset** sets the corner radius back to the default value of _23px_.\r\n\r\n**Dark** and **Light** switch the app between dark and light mode.\r\n\r\n**Show** and **Hide** show or hide all windows, respectively.\r\n\r\n**Exit** closes the app.\r\n\r\n## Changelog\r\n\r\nSee [`CHANGELOG.md`](CHANGELOG.md) for a history of changes to this app.\r\n";
				}
				async function compiledContent() {
					return await html();
				}
				function getHeadings() {
					return [{"depth":1,"slug":"round","text":"Round"},{"depth":2,"slug":"getting-started","text":"Getting started"},{"depth":2,"slug":"dependencies","text":"Dependencies"},{"depth":2,"slug":"options","text":"Options"},{"depth":2,"slug":"changelog","text":"Changelog"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`<meta charset="utf-8">${maybeRenderHead()}${unescapeHTML(html())}`;
				});

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	Content,
	compiledContent,
	default: Content,
	file,
	frontmatter,
	getHeadings,
	rawContent,
	url
}, Symbol.toStringTag, { value: 'Module' }));

export { _page as _ };
