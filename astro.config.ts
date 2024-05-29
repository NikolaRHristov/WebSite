export default (await import("astro/config")).defineConfig({
	srcDir: "./Source",
	publicDir: "./Public",
	outDir: "./Target",
	site: "https://nikolahristov.tech/",
	compressHTML: true,
	integrations: [
		// @ts-ignore
		import.meta.env.MODE === "production"
			? (await import("astrojs-service-worker")).default()
			: null,
		(await import("@astrojs/sitemap")).default(),
		(await import("@playform/inline")).default({ Logger: 1 }),
		(await import("@astrojs/prefetch")).default(),
		(await import("@playform/format")).default({ Logger: 1 }),
		(await import("@playform/compress")).default({
			Logger: 1,
			Exclude: [(File: string) => File.indexOf("Raw") !== -1],
			CSS: {
				// @ts-expect-error
				lightningcss: false,
			},
		}),
	],
	experimental: {
		directRenderScript: true,
	},
	vite: {
		build: {
			sourcemap: true,
		},
		resolve: {
			preserveSymlinks: true,
		},
	},
}) as typeof defineConfig;

import type { defineConfig } from "astro/config";
