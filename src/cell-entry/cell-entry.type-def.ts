import {gql} from 'apollo-server';

export const cellEntryTypeDef = gql`
  type CellEntry {
    id: ID!
    matrix: Matrix!
    row: Row!
    column: Column!
    value: Value!
  }

  extend type Query {
    cellEntries: [CellEntry!]!
    cellEntry(id: ID!): CellEntry
  }

  extend type Mutation {
    createCellEntry(matrixId: ID!, rowId: ID!, columnId: ID!, valueId: ID!): CellEntry!
  }
`;

