export interface CellEntry {
	id: string;
}

export interface CreateCellEntryInput {
	matrixId: string;
	columnId: string;
	rowId: string;
	valueId: string;
}

export interface UpdateCellEntryInput {
	id: string;
	valueId?: string;
}

export interface DeleteCellEntryInput {
	id: string;
}
