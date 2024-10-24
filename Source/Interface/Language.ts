import type { ImageMetadata } from "astro";

/**
 * @module Parse
 *
 */

export default interface Interface {
	Light: ImageMetadata | null;
	Dark: ImageMetadata | null;
	Name: string;
	BoC: string;
}
