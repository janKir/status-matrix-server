export interface CellEntry {
	id: string;
}

export interface CreateCellEntryInput {
	matrixId: string;
	columnId: string;
	rowId: string;
	valueId: string;
}
