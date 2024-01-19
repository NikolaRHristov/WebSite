export default ((await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://nikolahristov.tech/",
	compressHTML: true,
	integrations: [
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("astro-critters")).default({ Logger: 1 }),
		(await import("@astrojs/prefetch")).default(),
		(await import("astro-rome")).default({ Logger: 1 }),
		(await import("astro-compress")).default({ Logger: 1 }),
	],
	vite: {
		build: {
			sourcemap: true,
		},
		resolve: {
			preserveSymlinks: true,
		},
	},
}) as typeof defineConfig);

import type { defineConfig } from "astro/config";
