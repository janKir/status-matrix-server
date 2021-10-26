export interface Row {
	id: string; // Uuid
	matrixId: string;
	name: string;
}

export interface CreateRowInput {
	name: string;
	matrixId: string;
}
