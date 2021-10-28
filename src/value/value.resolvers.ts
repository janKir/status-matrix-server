/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {Value, CreateValueInput, UpdateValueInput, DeleteValueInput, ValuesByMatrixInput} from './value.interface';

export const valueResolvers = {
	Value: {
		id: ({id}: Value) => id,
		name: ({name}: Value) => name,
		color: ({color}: Value) => color,
		matrix: ({id, matrixId}: Value) => prisma.value.findUnique({where: {id_matrixId: {id, matrixId}}}).matrix(),
		cellEntries: ({id, matrixId}: Value) => prisma.value.findUnique({where: {id_matrixId: {id, matrixId}}}).cellEntries(),
	},
	Query: {
		values: () => prisma.value.findMany(),
		value: (parent, {id}: Value) => prisma.value.findFirst({where: {id}}),
		valuesByMatrix: (parent, {matrixId}: ValuesByMatrixInput) => prisma.value.findMany({where: {matrixId}}),
	},
	Mutation: {
		createValue: (parent, {name, color, matrixId}: CreateValueInput) => prisma.value.create({
			data: {
				name,
				color,
				matrix: {
					connect: {id: matrixId},
				},
			},
		}),
		updateValue: (parent, {id, name, color}: UpdateValueInput) => prisma.value.update({
			where: {id},
			data: {name, color},
		}),
		deleteValue: (parent, {id}: DeleteValueInput) => prisma.value.delete({where: {id}}),
	},
};
