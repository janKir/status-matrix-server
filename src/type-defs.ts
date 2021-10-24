import {gql} from 'apollo-server';
import {matrixTypeDef} from './matrix/matrix.type-def';

const baseTypeDef = gql`
type Query
type Mutation
`;

export const typeDefs = [baseTypeDef, matrixTypeDef];
