import type { OctokitResponse } from "@octokit/types";
import { Octokit } from "@octokit/core";
import env from "@lib/env.js";

const octokit = new Octokit({
	auth: env.GH_AUTH_TOKEN,
});

export default async (
	where: string,
	// rome-ignore lint/suspicious/noExplicitAny:
	_with: any = {},
	type: string = "octokit",
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
