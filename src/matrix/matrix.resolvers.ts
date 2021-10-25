/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {Matrix} from './matrix.interface';

export const matrixResolvers = {
	Matrix: {
		id: ({id}: Matrix) => id,
		name: ({name}: Matrix) => name,
		description: ({description}: Matrix) => description,
		rows: ({id}: Matrix) => prisma.matrix.findUnique({where: {id}}).rows(),
	},
	Query: {
		matrices: () => prisma.matrix.findMany(),
		matrix: (parent, {id}: Matrix) => prisma.matrix.findFirst({
			where: {id},
		}),
	},
	Mutation: {
		createMatrix: (parent, {name, description}: Matrix) => prisma.matrix.create({
			data: {
				name,
				description,
			},
		}),
	},
};

