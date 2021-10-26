/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {CreateRowInput, Row} from './row.interface';

export const rowResolvers = {
	Row: {
		id: ({id}: Row) => id,
		name: ({name}: Row) => name,
		matrix: ({id, matrixId}: Row) => prisma.row.findUnique({where: {id_matrixId: {id, matrixId}}}).matrix(),
		cellEntries: ({id, matrixId}: Row) => prisma.row.findUnique({where: {id_matrixId: {id, matrixId}}}).cellEntries(),
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
	},
};

