/**
 * @module Match
 *
 */
export default ((...Option: Parameters<Type>) => {
	switch (true) {
		case typeof Option[0] === "string":
			return Option[0].match(Option[1]);

		case typeof Option[0] === "object":
			return Object.keys(Option[0])
				.entries()
				.next()
				.value.match(Option[1]);

		default:
			return false;
	}
}) satisfies Type as Type;

import type Type from "@Interface/Match.js";
