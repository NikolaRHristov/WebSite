import type Cell from "../Type/Cell.ts";

/**
 * @module Match
 *
 */
export default interface Interface {
	(
		Package: Cell,
		Match: string | RegExp,
	): false | RegExpMatchArray | null | undefined;
}
