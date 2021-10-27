/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {CellEntry, CreateCellEntryInput, DeleteCellEntryInput, UpdateCellEntryInput} from './cell-entry.interface';

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
				column: {connect: {id_matrixId: {id: columnId, matrixId}}},
				row: {connect: {id_matrixId: {id: rowId, matrixId}}},
				value: {connect: {id_matrixId: {id: valueId, matrixId}}},
			},
		}),
		updateCellEntry: (parent, {id, valueId}: UpdateCellEntryInput) => prisma.cellEntry.update({
			where: {id},
			data: {
				value: {connect: {id: valueId}},
			},
		}),
		deleteCellEntry: (parent, {id}: DeleteCellEntryInput) => prisma.cellEntry.delete({where: {id}}),
	},
};

