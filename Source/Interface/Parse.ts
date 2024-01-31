/**
 * @module Parse
 *
 */
export default interface Type {
	(Package: Cell, Items: Set<PackagesRowItem>): Promise<void>;
}

import type Cell from "@Type/Cell";
import type PackagesRowItem from "@Interface/PackagesRowItem";
