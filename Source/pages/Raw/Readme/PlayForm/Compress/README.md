# 🗜️ [Compress] —

This **[Astro integration][astro-integration]** brings compression utilities to
your Astro project.

🎁 [CSS (csso)][csso] —

🎁 [CSS (lightningcss)][lightningcss] —

🎁 [HTML (html-minifier-terser)][html-minifier-terser] —

🎁 [Image (sharp)][sharp] —

🎁 [JavaScript (terser)][terser] —

🎁 [SVG (svgo)][svgo] —

> **Note**
>
> `Compress` will not compress your requests, only your statically generated
> build and pre-rendered routes.

> [!IMPORTANT]
>
> Use `Compress` last in your integration list for the best optimizations.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `Compress`, run the following from your project directory and follow
the prompts:

Using NPM:

```sh
npx astro add astro-compress
```

Using Yarn:

```sh
yarn astro add astro-compress
```

Using PNPM:

```sh
pnpx astro add astro-compress
```

### Install dependencies manually

First, install the `Compress` integration like so:

```sh
npm install -D -E astro-compress
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**`astro.config.ts`**

```ts
export default {
	integrations: [(await import("astro-compress")).default()],
};
```

## Getting started

The utility will now automatically compress all your CSS, HTML, SVG, JavaScript
and image files in the Astro `outDir` folder.

The following image file types will be compressed via [sharp]:

-   avci
-   avcs
-   avif
-   avifs
-   gif
-   heic
-   heics
-   heif
-   heifs
-   jfif
-   jif
-   jpe
-   jpeg
-   jpg
-   apng
-   png
-   raw
-   tiff
-   webp

SVG compression is supported, as well via [svgo].

### Default Compression

You can override any of the default options from the configurations of:

-   [csso](https://github.com/css/csso#minifysource-options)
-   [lightningcss](https://github.com/parcel-bundler/lightningcss/blob/master/node/index.d.ts#L8)
-   [html-minifier-terser](https://github.com/terser/html-minifier-terser#options-quick-reference)
-   [sharp](https://sharp.pixelplumbing.com/api-output#jpeg)
-   [svgo](https://github.com/svg/svgo#configuration)
-   [terser](https://github.com/terser/terser#minify-options-structure)

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("astro-compress")).default({
			CSS: false,
			HTML: {
				"html-minifier-terser": {
					removeAttributeQuotes: false,
				},
			},
			Image: false,
			JavaScript: false,
			SVG: false,
		}),
	],
};
```

or disable them entirely:

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("astro-compress")).default({
			CSS: false,
			HTML: false,
			Image: false,
			JavaScript: false,
			SVG: false,
		}),
	],
};
```

You can see the full option map here:
[Source/Interface/Option.ts](https://github.com/PlayForm/Compress/blob/main/Source/Interface/Option.ts)

### Output

By default `Compress` compresses the `outDir` `Astro` directory, if you'd like
it to compress a different directory you would have to add it to the `Compress`
`Path` option, as well:

```ts
export default {
	integrations: [
		(await import("astro-compress")).default({
			Path: ["./dist", "./Compress"],
		}),
	],
};
```

### Add Multiple Paths

You can add multiple paths to compress by specifying an array as the `Path`
variable.

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("astro-compress")).default({
			Path: ["./Target", "./Build"],
		}),
	],
};
```

### Input-Output Mapping

You can also provide a map of paths for different input output directories.

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("astro-compress")).default({
			Path: new Map([["./Source", "./Target"]]),
		}),
	],
};
```

Or an array of the two:

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("astro-compress")).default({
			Path: [
				// Compress Target
				"./Target",
				// Compress Target one more time into a different directory
				new Map([["./Target", "./TargetCompress"]]),
			],
		}),
	],
};
```

### File Filtering

You can filter files to exclude specific ones from compression. A filter can be
an array of regular expressions or a single match. You can also use functions to
match on file names:

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("astro-compress")).default({
			Exclude: [
				"File.png",
				(File: string) =>
					File === "./Target/Favicon/Image/safari-pinned-tab.svg",
			],
		}),
	],
};
```

### Controlling Logging

You can control the logging level by setting the `Logger` parameter. The default
value is `2`, but you can set it to `0` if you don't want to see debug messages:

**`astro.config.ts`**

```ts
export default {
	integrations: [
		(await import("astro-compress")).default({
			Logger: 0,
		}),
	],
};
```

[Compress]: HTTPS://NPMJS.Org/astro-compress
[csso]: HTTPS://NPMJS.Org/csso
[lightningcss]: HTTPS://NPMJS.Org/lightningcss
[html-minifier-terser]: HTTPS://NPMJS.Org/html-minifier-terser
[terser]: HTTPS://NPMJS.Org/terser
[sharp]: HTTPS://NPMJS.Org/sharp
[svgo]: HTTPS://NPMJS.Org/svgo
[astro-integration]: HTTPS://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.
