export interface Row {
	id: string; // Uuid
	name: string;
}

export interface CreateRowInput {
	name: string;
	matrixId: string;
}
