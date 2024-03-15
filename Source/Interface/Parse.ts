/**
 * @module Parse
 *
 */
export default interface Type {
	(Packages: Set<Cell>): Promise<Set<PackagesRowItem>>;
}

import type PackagesRowItem from "@Interface/PackagesRowItem";
import type Cell from "@Type/Cell";
