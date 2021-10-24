/* eslint-disable @typescript-eslint/naming-convention */
import {matrices} from '../database';
import {Row} from './row.interface';

export const rowResolvers = {
	Row: {
		id: (parent: Row) => parent.id,
		name: (parent: Row) => parent.name,
		matrix: (parent: Row) => parent.matrix,
	},
	Query: {
		matrices: () => matrices,
		matrix: (parent, args) => matrices.find((matrix) => matrix.id === Number(args.id)),
	},
	Mutation: {
		createRow: (parent, args: Row) =>
		// TODO: implement
			(args)
		,
	},
};

