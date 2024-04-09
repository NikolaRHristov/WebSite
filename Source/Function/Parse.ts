/**
 * @module Parse
 *
 */
export default (async (...Option: Parameters<Interface>) => {
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
								Image: `https://img.shields.io/github/last-commit/${Owner}/${Repository}?label=Last%20Update`,
								Alt: "Last Update",
							},
							{
								Link: `https://github.com/${Owner}/${Repository}`,
								Image: `https://img.shields.io/github/issues/${Owner}/${Repository}?label=Issues`,
								Alt: "Issues",
							},
							{
								Link: `https://github.com/${Owner}/${Repository}`,
								Image: `https://img.shields.io/github/downloads/${Owner}/${Repository}/total?label=Leaks`,
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
					await fetch(`https://registry.npmjs.org/${NPM}`)
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
							Image: `https://img.shields.io/npm/dt/${JSONNPM.name}?label=Leaks&logo=npm`,
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
					await fetch(`https://crates.io/api/v1/crates/${Crate}`)
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
							Image: `https://img.shields.io/crates/d/${JSONCargo?.crate?.name}?label=Leaks`,
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
}) satisfies Interface as Interface;

import type PackagesRowItem from "@Interface/PackagesRowItem";
import type Interface from "@Interface/Parse.js";

export const { default: Match } = await import("@Function/Match.js");

export const { default: Request } = await import("@Library/Request");
