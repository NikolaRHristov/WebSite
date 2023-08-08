import PreFetch from "@astrojs/prefetch";
import SiteMap from "@astrojs/sitemap";
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
		SiteMap(),
		PreFetch(),
		Compress({ Logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
