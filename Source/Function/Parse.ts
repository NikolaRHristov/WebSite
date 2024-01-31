/**
 * @module Parse
 *
 */
export default (async (...Option: Parameters<Type>) => {
	let GitHub = "";

	try {
		switch (true) {
			case Match(Option[0], /GitHub:/): {
				GitHub =
					typeof Option[0] === "string"
						? Option[0].split(":")[1]
						: Object.keys(Option[0])
								.entries()
								.next()
								.value.split(":")[1];

				const Owner = GitHub?.split("/")[0];
				const Repository = GitHub?.split("/")[1];

				const JSONGitHub = await Request(`GET /repos/${GitHub}`, {
					owner: Owner,
					repo: Repository,
				});

				if (JSONGitHub?.data) {
					Option[1].add({
						Link: JSONGitHub.data?.html_url ?? "",
						Name: JSONGitHub.data?.name ?? "",
						GitHub: JSONGitHub.data?.full_name ?? "",
						Description: JSONGitHub.data?.description ?? "",
						Badge: new Set([
							{
								Link: `https://github.com/${Owner}/${Repository}`,
								Image: `https://img.shields.io/github/last-commit/${Owner}/${Repository}?label=Last%20Updated`,
								Alt: "Last Update",
							},
							{
								Link: `https://github.com/${Owner}/${Repository}`,
								Image: `https://img.shields.io/github/issues/${Owner}/${Repository}?label=Issues`,
								Alt: "Issues",
							},
							{
								Link: `https://github.com/${Owner}/${Repository}`,
								Image: `https://img.shields.io/github/downloads/${Owner}/${Repository}/total?label=Downloads`,
								Alt: "Downloads",
							},
						]),
					});
				}
				break;
			}

			case Match(Option[0], /NPM:/): {
				const NPM =
					typeof Option[0] === "string"
						? Option[0].split(":")[1]
						: Object.keys(Option[0])
								.entries()
								.next()
								.value.split(":")[1];

				const JSONNPM = await (
					await fetch(`https://registry.npmjs.org/${NPM}`)
				).json();

				GitHub = (JSONNPM?.repository?.url ?? "")
					?.replace(/(git\+)?http?s:\/\/github.com\//, "")
					?.replace("#readme", "")
					?.replace(".git", "");

				Option[1].add({
					Link: `https://github.com/${GitHub}`,
					Name: GitHub.split("/")[1] ?? "",
					GitHub,
					Description: JSONNPM?.description ?? "",
					Badge: new Set([
						{
							Image: `https://img.shields.io/github/actions/workflow/status/${GitHub}/Node.yml?branch=main&label=Build&logo=node.js`,
							Link: `https://github.com/${GitHub}/actions/workflows/Node.yml`,
							Alt: "Build",
						},
						{
							Link: `https://npmjs.org/${JSONNPM.name}?activeTab=dependencies`,
							Image: `https://img.shields.io/librariesio/release/npm/${JSONNPM.name}?logo=dependabot&label=`,
							Alt: "Dependencies",
						},
						{
							Link: `https://npmjs.org/${JSONNPM.name}`,
							Image: `https://img.shields.io/npm/v/${JSONNPM.name}?label=Version&logo=npm`,
							Alt: "Version",
						},
						{
							Link: `https://npmjs.org/${JSONNPM.name}`,
							Image: `https://img.shields.io/npm/dt/${JSONNPM.name}?label=Downloads&logo=npm`,
							Alt: "Downloads",
						},
					]),
				});

				break;
			}

			case Match(Option[0], /cargo:/): {
				const Crate =
					typeof Option[0] === "string"
						? Option[0].split(":")[1]
						: Object.keys(Option[0])
								.entries()
								.next()
								.value.split(":")[1];

				const JSONCargo = await (
					await fetch(`https://crates.io/api/v1/crates/${Crate}`)
				).json();

				GitHub = (JSONCargo?.crate?.repository ?? "")
					?.replace(/(git\+)?http?s:\/\/github.com\//, "")
					?.replace("#readme", "")
					?.replace(".git", "");

				Option[1].add({
					Link: JSONCargo?.crate?.repository ?? "",
					Badge: new Set([
						{
							Image: `https://img.shields.io/github/actions/workflow/status/${GitHub}/Rust.yml?branch=main&label=Build`,
							Link: `https://github.com/${GitHub}/actions/workflows/Rust.yml`,
							Alt: "Build",
						},
						{
							Link: `https://crates.io/${JSONCargo?.crate?.name}`,
							Image: `https://img.shields.io/crates/v/${JSONCargo?.crate?.name}?label=Version`,
							Alt: "Version",
						},
						{
							Link: `https://crates.io/${JSONCargo?.crate?.name}`,
							Image: `https://img.shields.io/crates/d/${JSONCargo?.crate?.name}?label=Downloads`,
							Alt: "Downloads",
						},
					]),
					Description: JSONCargo?.crate?.description ?? "",
					GitHub,
					Name: JSONCargo?.crate?.name ?? "",
				});

				break;
			}

			default:
				break;
		}
	} catch (_Error) {
		console.log(`Package: ${Option[0]}`);
		console.log(_Error);
	}
}) satisfies Type as Type;

import type Type from "@Interface/Parse.js";

export const { default: Match } = await import("@Function/Match.js");

export const { default: Request } = await import("@Library/Request");
