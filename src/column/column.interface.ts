export interface Column {
	id: string;
	matrixId: string;
	position: number;
	name: string;
	startDate?: string;
	endDate?: string;
}

export interface CreateColumnInput {
	name: string;
	matrixId: string;
}

export interface CreateColumnInMatrixInput {
	name: string;
}

export interface UpdateColumnInput {
	id: string;
	name?: string;
}

export interface DeleteColumnInput {
	id: string;
}
