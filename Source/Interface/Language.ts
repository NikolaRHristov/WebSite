/**
 * @module Parse
 *
 */

export default interface Type {
	Light: ImageMetadata | null;
	Dark: ImageMetadata | null;
	Name: string;
	BoC: string;
}

import type { ImageMetadata } from "astro";
