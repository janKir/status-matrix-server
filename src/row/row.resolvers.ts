/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {CreateRowInput, DeleteRowInput, Row, UpdateRowInput} from './row.interface';

export const rowResolvers = {
	Row: {
		id: ({id}: Row) => id,
		name: ({name}: Row) => name,
		matrix: ({id}: Row) => prisma.row.findUnique({where: {id}}).matrix(),
		cellEntries: ({id}: Row) => prisma.row.findUnique({where: {id}}).cellEntries(),
	},
	Query: {
		rows: () => prisma.row.findMany(),
		row: (parent, {id}: Row) => prisma.row.findFirst({where: {id}}),
	},
	Mutation: {
		createRow: (parent, {name, matrixId}: CreateRowInput) => prisma.row.create({
			data: {
				name,
				matrix: {
					connect: {id: matrixId},
				},
			},
		}),
		updateRow: (parent, {id, name}: UpdateRowInput) => prisma.row.update({
			where: {id},
			data: {name},
		}),
		deleteRow: (parent, {id}: DeleteRowInput) => prisma.row.delete({where: {id}}),
	},
};

