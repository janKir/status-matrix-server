export interface Row {
	id: string; // Uuid
	matrixId: string;
	name: string;
}

export interface CreateRowInput {
	name: string;
	matrixId: string;
}

export interface CreateRowInMatrixInput {
	name: string;
}

export interface UpdateRowInput {
	id: string;
	name?: string;
}

export interface DeleteRowInput {
	id: string;
}
