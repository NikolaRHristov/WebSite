export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
<<<<<<< HEAD
	site: "HTTPS://NikolaHristov.Tech",
=======
	// TODO Place your site URL here
	// site: "",
>>>>>>> Fork/Current
	compressHTML: true,
	prefetch: true,
	integrations: [
		// @ts-ignore
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("@playform/inline")).default({ Logger: 1 }),
		(await import("@playform/format")).default({ Logger: 1 }),
<<<<<<< HEAD
		(await import("@playform/compress")).default({
			Logger: 1,
			Exclude: [(File: string) => File.indexOf("Raw") !== -1],
		}),
=======
		(await import("@playform/compress")).default({ Logger: 1 }),
>>>>>>> Fork/Current
	],
	experimental: {
		directRenderScript: true,
		clientPrerender: true,
		globalRoutePriority: true,
		serverIslands: true,
	},
	vite: {
		build: {
			sourcemap: true,
		},
<<<<<<< HEAD
		resolve: {
			preserveSymlinks: true,
=======
		css: {
			devSourcemap: true,
			transformer: "postcss",
>>>>>>> Fork/Current
		},
	},
}) as typeof defineConfig;

import type { defineConfig } from "astro/config";
