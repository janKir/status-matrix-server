import {CreateColumnInMatrixInput} from '../column/column.interface';
import {CreateRowInMatrixInput} from '../row/row.interface';
import {CreateValueInMatrixInput} from '../value/value.interface';

export interface Matrix {
	id: string; // Uuid
	name: string;
	description?: string;
	rows?: CreateRowInMatrixInput[];
	columns?: CreateColumnInMatrixInput[];
	values?: CreateValueInMatrixInput[];
}
