import type { ImageMetadata } from "astro/client";

export default interface Type {
	[key: string]: [ImageMetadata, ImageMetadata];
}
