import Environment from "@Library/Environment.js";
import { Octokit } from "@octokit/core";
import type { OctokitResponse } from "@octokit/types";

const octokit = new Octokit({
	auth: Environment.GitHub,
});

export default async (
	where: string,
	// rome-ignore lint/suspicious/noExplicitAny:
	_with: any = {},
	type = "octokit"
	// rome-ignore lint/suspicious/noExplicitAny:
): Promise<OctokitResponse<any, number> | any> => {
	try {
		console.log(`Successfully ${where}`);

		switch (type) {
			case "octokit":
				return await octokit.request(where, _with);
		}
	} catch (_e) {
		console.log(`Could not ${where}`);
	}
};
