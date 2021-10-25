import {cellEntryResolvers} from './cell-entry/cell-entry.resolvers';
import {columnResolvers} from './column/column.resolvers';
import {matrixResolvers} from './matrix/matrix.resolvers';
import {rowResolvers} from './row/row.resolvers';
import {valueResolvers} from './value/value.resolvers';

export const resolvers = [
	matrixResolvers,
	rowResolvers,
	columnResolvers,
	valueResolvers,
	cellEntryResolvers,
];
