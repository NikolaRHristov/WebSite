/**
 * @module Match
 *
 */
export default ((...Option: Parameters<Type>) => {
	console.log(Option);
	
	return true;
}) satisfies Type as Type;

import type Type from "@Interface/Match.js";
