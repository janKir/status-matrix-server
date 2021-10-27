/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {DeleteMatrixInput, Matrix, UpdateMatrixInput} from './matrix.interface';

export const matrixResolvers = {
	Matrix: {
		id: ({id}: Matrix) => id,
		name: ({name}: Matrix) => name,
		description: ({description}: Matrix) => description,
		rows: ({id}: Matrix) => prisma.matrix.findUnique({where: {id}}).rows(),
		columns: ({id}: Matrix) => prisma.matrix.findUnique({where: {id}}).columns(),
		values: ({id}: Matrix) => prisma.matrix.findUnique({where: {id}}).values(),
		cellEntries: ({id}: Matrix) => prisma.matrix.findUnique({where: {id}}).cellEntries(),
	},
	Query: {
		matrices: () => prisma.matrix.findMany(),
		matrix: (parent, {id}: Matrix) => prisma.matrix.findFirst({
			where: {id},
		}),
	},
	Mutation: {
		createMatrix: (parent, {name, description, rows, columns, values}: Matrix) => prisma.matrix.create({
			data: {
				name,
				description,
				rows: {create: rows},
				columns: {create: columns},
				values: {create: values},
			},
		}),
		updateMatrix: (parent, {id, name, description}: UpdateMatrixInput) => prisma.matrix.update({
			where: {id},
			data: {name, description},
		}),
		deleteMatrix: (parent, {id}: DeleteMatrixInput) => prisma.matrix.delete({where: {id}}),
	},
};

