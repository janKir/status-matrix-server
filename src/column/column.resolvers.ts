/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {Column, CreateColumnInput} from './column.interface';

export const columnResolvers = {
	Column: {
		id: ({id}: Column) => id,
		name: ({name}: Column) => name,
		position: ({position}: Column) => position,
		matrix: ({id, matrixId}: Column) => prisma.column.findUnique({where: {id_matrixId: {id, matrixId}}}).matrix(),
		cellEntries: ({id, matrixId}: Column) => prisma.column.findUnique({where: {id_matrixId: {id, matrixId}}}).cellEntries(),
	},
	Query: {
		columns: () => prisma.column.findMany(),
		column: (parent, {id}: Column) => prisma.column.findFirst({where: {id}}),
	},
	Mutation: {
		createColumn: (parent, {name, matrixId}: CreateColumnInput) => prisma.column.create({
			data: {
				name,
				matrix: {
					connect: {id: matrixId},
				},
			},
		}),
	},
};
