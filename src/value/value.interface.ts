export interface Value {
	id: string; // Uuid
	name: string;
	color: string;
}

export interface CreateValueInput {
	matrixId: string;
	name: string;
	color: string;
}
