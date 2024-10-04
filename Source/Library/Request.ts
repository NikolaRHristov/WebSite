import type { OctokitResponse } from "@octokit/types";

/**
 * @module Request
 *
 */
export default async (
	Where: string,
	With = {},
	Type = "octokit",
	// biome-ignore lint/suspicious/noExplicitAny:
): Promise<OctokitResponse<any, number> | any> => {
	try {
		switch (Type) {
			case "octokit": {
				return await new (await import("@octokit/core")).Octokit({
					auth: (
						await import("@Library/Environment.js")
					).default.parse(process.env).Token,
				}).request(Where, With);
			}

			default:
				throw new Error(`Cannot ${Where}.`);
		}
	} catch (_Error) {
		console.log(`Cannot ${Where}.`);
		console.log(_Error);
	}
};
