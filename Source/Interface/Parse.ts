/**
 * @module Parse
 *
 */
export default interface Type {
	(Package: Cell): Promise<PackagesRowItem>;
}

import type Cell from "@Type/Cell";
import type PackagesRowItem from "@Interface/PackagesRowItem";
