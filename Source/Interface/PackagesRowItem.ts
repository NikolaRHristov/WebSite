/**
 * @module Parse
 *
 */
export default interface Interface {
	Name: string;

	Link: string;

	GitHub: string | undefined;

	Description?: string;

	Badge: Set<Badge>;

	Language?: Set<Language>;
}

import type Badge from "../Interface/Badge.js";
import type Language from "../Interface/Language.js";
