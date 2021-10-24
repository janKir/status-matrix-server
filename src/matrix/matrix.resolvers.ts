/* eslint-disable @typescript-eslint/naming-convention */
import {matrices} from '../database';
import {Matrix} from './matrix.interface';

export const matrixResolvers = {
	Matrix: {
		id: (parent: Matrix) => parent.id,
		name: (parent: Matrix) => parent.name,
		description: (parent: Matrix) => parent.description,
	},
	Query: {
		matrices: () => matrices,
		matrix: (parent, args) => matrices.find((matrix) => matrix.id === Number(args.id)),
	},
	Mutation: {
		createMatrix: (parent, args: Matrix) => {
			matrices.push({
				id: matrices.length + 1,
				name: args.name,
				description: args.description,
			});

			return matrices[matrices.length - 1];
		},
	},
};

