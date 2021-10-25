import {gql} from 'apollo-server';
import {cellEntryTypeDef} from './cell-entry/cell-entry.type-def';
import {columnTypeDef} from './column/column.type-def';
import {matrixTypeDef} from './matrix/matrix.type-def';
import {rowTypeDef} from './row/row.type-def';
import {valueTypeDef} from './value/value.type-def';

const baseTypeDef = gql`
type Query
type Mutation
`;

export const typeDefs = [baseTypeDef, matrixTypeDef, rowTypeDef, columnTypeDef, valueTypeDef, cellEntryTypeDef];
