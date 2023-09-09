import Fetch from "@astrojs/prefetch";
import Sitemap from "@astrojs/sitemap";
import Compress from "astro-compress";
import Critters from "astro-critters";
import Rome from "astro-rome";
import { defineConfig } from "astro/config";
import Worker from "astrojs-service-worker";

export default defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://nikolahristov.tech/",
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production" ? Worker() : null,
		Sitemap(),
		Fetch(),
		Rome({ Logger: 1 }),
		Critters({ Logger: 1 }),
		Compress({
			Logger: 1,
			CSS: {
				restructure: true,
			},
		}),
	],
	vite: {
		build: {
			sourcemap: true,
		},
		resolve: {
			preserveSymlinks: true,
		},
	},
});
