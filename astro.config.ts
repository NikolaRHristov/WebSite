import prefetch from "@astrojs/prefetch";
import sitemap from "@astrojs/sitemap";
import Compress from "astro-compress";
import critters from "astro-critters";
import ROME from "astro-rome";
import { defineConfig } from "astro/config";
import worker from "astrojs-service-worker";

export default defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
<<<<<<< HEAD
	site: "https://nikolahristov.tech/",
=======
	// TODO Place your site URL here
	// site: "",
>>>>>>> upstream/main
	experimental: {
		assets: true,
		viewTransitions: true,
	},
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production" ? worker() : null,
		sitemap(),
		critters({ logger: 1 }),
		prefetch(),
		ROME({ logger: 1 }),
		Compress({ logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
	},
});
