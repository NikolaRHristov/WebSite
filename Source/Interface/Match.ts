/**
 * @module Match
 *
 */
export default interface Type {
	(Package: Cell, Match: string | RegExp): boolean;
}

import type Cell from "@Type/Cell";
