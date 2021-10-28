export interface Value {
	id: string; // Uuid
	matrixId: string;
	name: string;
	color: string;
}

export interface ValuesByMatrixInput {
	matrixId: string;
}

export interface CreateValueInput {
	matrixId: string;
	name: string;
	color: string;
}

export interface CreateValueInMatrixInput {
	name: string;
	color: string;
}

export interface UpdateValueInput {
	id: string;
	name?: string;
	color?: string;
}

export interface DeleteValueInput {
	id: string;
}
