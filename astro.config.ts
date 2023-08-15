import Fetch from "@astrojs/prefetch";
import Sitemap from "@astrojs/sitemap";
import Rome from "astro-rome";
import Critters from "astro-critters";
import Compress from "astro-compress";
import { defineConfig } from "astro/config";
import Worker from "astrojs-service-worker";

export default defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://nikolahristov.tech/",
	experimental: {
		assets: true,
		viewTransitions: true,
	},
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production" ? Worker() : null,
		Sitemap(),
		Fetch(),
		Rome({ Logger: 1 }),
		Critters({ Logger: 1 }),
		Compress({ Logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
