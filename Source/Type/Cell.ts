/**
 * @module Cell
 *
 */
export type Type =
	| `${TypeCell}:${string}`
	| Record<`${TypeCell}:${string}`, Info>;

export type { Type as default };

import type TypeCell from "@Type/Type.js";
import type Info from "@Interface/Info.js";
