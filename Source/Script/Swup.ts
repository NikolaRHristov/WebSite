import SwupBodyClassPlugin from "@swup/body-class-plugin";
import SwupHeadPlugin from "@swup/head-plugin";
import SwupPreloadPlugin from "@swup/preload-plugin";
import SwupScrollPlugin from "@swup/scroll-plugin";
import Swup from "swup";

new Swup({
	containers: ["#footer", "#main"],
	plugins: [
		new SwupHeadPlugin(),
		new SwupPreloadPlugin(),
		new SwupScrollPlugin(),
		new SwupBodyClassPlugin(),
	],
});
