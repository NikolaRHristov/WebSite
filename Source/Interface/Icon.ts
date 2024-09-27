import type { ImageMetadata } from "astro";

/**
 * @module Icon
 *
 */
export default interface Interface {
	[key: string]: [ImageMetadata, ImageMetadata];
}
