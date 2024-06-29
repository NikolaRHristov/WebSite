import type { OctokitResponse } from "@octokit/types";

export default async (
	Where: string,
	// biome-ignore lint/suspicious/noExplicitAny:
	With: any = {},
	Type = "octokit",
	// biome-ignore lint/suspicious/noExplicitAny:
): Promise<OctokitResponse<any, number> | any> => {
	try {
		console.log(`Successfully ${Where}`);

		switch (Type) {
			case "octokit":
				return await new (await import("@octokit/core")).Octokit({
					auth: (
						await import("@Library/Environment.js")
					).default.parse(process.env).Token,
				}).request(Where, With);

			default:
				throw new Error(`Could not ${Where}`);
		}
	} catch (_Error) {
		console.log(`Could not ${Where}`);
	}
};
