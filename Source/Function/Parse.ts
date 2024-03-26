/**
 * @module Parse
 *
 */
export default (async (...Option: Parameters<Type>) => {
	const Items = new Set<PackagesRowItem>();

	for (const Package of Option[0]) {
		let GitHub = null;

		try {
			if (Match(Package, /GitHub:/)) {
				GitHub =
					typeof Package === "string"
						? Package.split(":")[1]
						: Object.keys(Package).at(0)?.split(":")[1];

				const Owner = GitHub?.split("/")[0];
				const Repository = GitHub?.split("/")[1];

				const JSONGitHub = await Request(`GET /repos/${GitHub}`, {
					owner: Owner,
					repo: Repository,
				});

				if (JSONGitHub?.data) {
					Items.add({
						Link: JSONGitHub.data?.html_url ?? "",
						Name:
							typeof Package === "object"
								? Object.values(Package).at(0)?.Name ??
								  JSONGitHub.data?.name
								: JSONGitHub.data?.name ?? "",
						GitHub: JSONGitHub.data?.full_name ?? "",
						Description: JSONGitHub.data?.description ?? "",
						Badge: new Set([
							{
								Link: `https://github.com/${Owner}/${Repository}`,
								Image: `https://IMG.Shields.IO/github/last-commit/${Owner}/${Repository}?label=Last%20Update`,
								Alt: "Last Update",
							},
							{
								Link: `https://github.com/${Owner}/${Repository}`,
								Image: `https://IMG.Shields.IO/github/issues/${Owner}/${Repository}?label=Issues`,
								Alt: "Issues",
							},
							{
								Link: `https://github.com/${Owner}/${Repository}`,
								Image: `https://IMG.Shields.IO/github/downloads/${Owner}/${Repository}/total?label=Leaks`,
								Alt: "Leaks",
							},
						]),
					});
				}
			}
		} catch (_Error) {
			console.log(`Package GitHub: ${Package}`);
			console.log(_Error);
		}

		try {
			if (Match(Package, /NPM:/)) {
				const NPM =
					typeof Package === "string"
						? Package.split(":")[1]
						: Object.keys(Package).at(0)?.split(":")[1];

				const JSONNPM = await (
					await fetch(`https://Registry.NPMJS.Org/${NPM}`)
				).json();

				GitHub = (JSONNPM?.repository?.url ?? "")
					?.replace(/(git\+)?http?s:\/\/github.com\//, "")
					?.replace("#readme", "")
					?.replace(".git", "");

				Items.add({
					Link: `https://github.com/${GitHub}`,
					Name:
						typeof Package === "object"
							? Object.values(Package).at(0)?.Name ??
							  GitHub.split("/")[1]
							: GitHub.split("/")[1] ?? "",
					GitHub,
					Description: JSONNPM?.description ?? "",
					Badge: new Set([
						{
							Image: `https://IMG.Shields.IO/github/actions/workflow/status/${GitHub}/Node.yml?branch=main&label=Build&logo=node.js`,
							Link: `https://github.com/${GitHub}/actions/workflows/Node.yml`,
							Alt: "Build",
						},
						{
							Link: `https://NPMJS.Org/${JSONNPM.name}?activeTab=dependencies`,
							Image: `https://IMG.Shields.IO/librariesio/release/npm/${JSONNPM.name}?logo=dependabot&label=`,
							Alt: "Dependencies",
						},
						{
							Link: `https://NPMJS.Org/${JSONNPM.name}`,
							Image: `https://IMG.Shields.IO/npm/v/${JSONNPM.name}?label=Version&logo=npm`,
							Alt: "Version",
						},
						{
							Link: `https://NPMJS.Org/${JSONNPM.name}`,
							Image: `https://IMG.Shields.IO/npm/dt/${JSONNPM.name}?label=Leaks&logo=npm`,
							Alt: "Downloads",
						},
					]),
				});
			}
		} catch (_Error) {
			console.log(`Package NPM: ${Package}`);
			console.log(_Error);
		}

		try {
			if (Match(Package, /cargo:/)) {
				const Crate =
					typeof Package === "string"
						? Package.split(":")[1]
						: Object.keys(Package).at(0)?.split(":")[1];

				const JSONCargo = await (
					await fetch(`https://Crates.IO/api/v1/crates/${Crate}`)
				).json();

				GitHub = (JSONCargo?.crate?.repository ?? "")
					?.replace(/(git\+)?http?s:\/\/github.com\//, "")
					?.replace("#readme", "")
					?.replace(".git", "");

				Items.add({
					Link: JSONCargo?.crate?.repository ?? "",
					Name:
						typeof Package === "object"
							? Object.values(Package).at(0)?.Name ??
							  JSONCargo?.crate?.name
							: JSONCargo?.crate?.name ?? "",
					Badge: new Set([
						{
							Image: `https://IMG.Shields.IO/github/actions/workflow/status/${GitHub}/Rust.yml?branch=main&label=Build`,
							Link: `https://github.com/${GitHub}/actions/workflows/Rust.yml`,
							Alt: "Build",
						},
						{
							Link: `https://Crates.IO/${JSONCargo?.crate?.name}`,
							Image: `https://IMG.Shields.IO/crates/v/${JSONCargo?.crate?.name}?label=Version`,
							Alt: "Version",
						},
						{
							Link: `https://Crates.IO/${JSONCargo?.crate?.name}`,
							Image: `https://IMG.Shields.IO/crates/d/${JSONCargo?.crate?.name}?label=Leaks`,
							Alt: "Downloads",
						},
					]),
					Description: JSONCargo?.crate?.description ?? "",
					GitHub,
				});
			}
		} catch (_Error) {
			console.log(`Package cargo: ${Package}`);
			console.log(_Error);
		}
	}

	return Items;
}) satisfies Type as Type;

import type PackagesRowItem from "@Interface/PackagesRowItem";
import type Type from "@Interface/Parse.js";

export const { default: Match } = await import("@Function/Match.js");

export const { default: Request } = await import("@Library/Request");
