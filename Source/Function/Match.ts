import type Interface from "../Interface/Match.js";

/**
 * @module Match
 *
 */
export default ((...Option) => {
	switch (true) {
		case typeof Option[0] === "string":
			return Option[0].match(Option[1]);

		case typeof Option[0] === "object":
			return Object.keys(Option[0]).at(0)?.match(Option[1]);

		default:
			return false;
	}
}) satisfies Interface as Interface;
