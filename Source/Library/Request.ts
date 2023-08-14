import Environment from "@Library/Environment.js";
import { Octokit } from "@octokit/core";
import type { OctokitResponse } from "@octokit/types";

const octokit = new Octokit({
	auth: Environment.GitHub,
});

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
				return await octokit.request(Where, With);
		}
	} catch (_Error) {
		console.log(`Could not ${Where}`);
	}
};
