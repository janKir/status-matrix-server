export interface Column {
	id: string;
	position: number;
	name: string;
	startDate?: string;
	endDate?: string;
}

export interface CreateColumnInput {
	name: string;
	matrixId: string;
}
