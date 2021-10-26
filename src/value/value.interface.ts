export interface Value {
	id: string; // Uuid
	matrixId: string;
	name: string;
	color: string;
}

export interface CreateValueInput {
	matrixId: string;
	name: string;
	color: string;
}
