/**
 * @module Cell
 *
 */
export type Type =
	| `${TypeCell}:${string}`
	| Record<`${TypeCell}:${string}`, Info>;

export type { Type as default };

import type Info from "../Interface/Info.js";
import type TypeCell from "../Type/Type.js";
