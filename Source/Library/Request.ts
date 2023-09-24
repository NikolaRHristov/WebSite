import type { OctokitResponse } from "@octokit/types";

export default async (
	Where: string,
	// rome-ignore lint/suspicious/noExplicitAny:
	With: any = {},
	Type = "octokit"
	// rome-ignore lint/suspicious/noExplicitAny:
): Promise<OctokitResponse<any, number> | any> => {
	try {
		console.log(`Successfully ${Where}`);

		switch (Type) {
			case "octokit":
				return await new (await import("@octokit/core")).Octokit({
					auth: (await import("@Library/Environment")).default.Token,
				}).request(Where, With);
		}
	} catch (_Error) {
		console.log(`Could not ${Where}`);
	}
};
