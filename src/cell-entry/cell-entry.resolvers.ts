/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {CellEntry, CreateCellEntryInput} from './cell-entry.interface';

export const cellEntryResolvers = {
	CellEntry: {
		id: ({id}: CellEntry) => id,
		matrix: ({id}: CellEntry) => prisma.cellEntry.findUnique({where: {id}}).matrix(),
		column: ({id}: CellEntry) => prisma.cellEntry.findUnique({where: {id}}).column(),
		row: ({id}: CellEntry) => prisma.cellEntry.findUnique({where: {id}}).row(),
		value: ({id}: CellEntry) => prisma.cellEntry.findUnique({where: {id}}).value(),
	},
	Query: {
		cellEntries: () => prisma.cellEntry.findMany(),
		cellEntry: (parent, {id}: CellEntry) => prisma.row.findFirst({where: {id}}),
	},
	Mutation: {
		createCellEntry: (parent, {matrixId, columnId, rowId, valueId}: CreateCellEntryInput) => prisma.cellEntry.create({
			data: {
				matrix: {connect: {id: matrixId}},
				column: {connect: {id: columnId}},
				row: {connect: {id: rowId}},
				value: {connect: {id: valueId}},
			},
		}),
	},
};

