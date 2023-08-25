import SwupBodyClassPlugin from "@swup/body-class-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupOverlayTheme from "@swup/overlay-theme";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";
import Swup from "swup";

new Swup({
	containers: ["#footer", "#main", "#header"],
	plugins: [
		new SwupOverlayTheme(),
		new SwupHeadPlugin(),
		new SwupPreloadPlugin(),
		new SwupScrollPlugin(),
		new SwupBodyClassPlugin(),
	],
});
