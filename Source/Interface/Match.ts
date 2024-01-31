/**
 * @module Match
 *
 */
export default interface Type {
	(
		Package: Cell,
		Match: string | RegExp,
	): false | RegExpMatchArray | null | undefined;
}

import type Cell from "@Type/Cell";
