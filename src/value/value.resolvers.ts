/* eslint-disable @typescript-eslint/naming-convention */
import {prisma} from '../database';
import {Value, CreateValueInput} from './value.interface';

export const valueResolvers = {
	Value: {
		id: ({id}: Value) => id,
		name: ({name}: Value) => name,
		color: ({color}: Value) => color,
	},
	Query: {
		values: () => prisma.value.findMany(),
		value: (parent, {id}: Value) => prisma.value.findFirst({where: {id}}),
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
	},
};

