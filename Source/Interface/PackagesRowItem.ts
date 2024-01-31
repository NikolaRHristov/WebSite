/**
 * @module Parse
 *
 */
export default interface Type {
	Name: string;
	Link: string;
	GitHub: string;
	Description: string;
	Badge: Set<Badge>;
	Language?: Set<Language>;
}

import type Badge from "@Interface/Badge";
import type Language from "@Interface/Language";
