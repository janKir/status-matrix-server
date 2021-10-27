import {gql} from 'apollo-server';

export const rowTypeDef = gql`
  type Row {
    id: ID!
    matrix: Matrix!
    name: String!
    cellEntries: [CellEntry!]!
  }

  input RowInMatrixInput {
    name: String!
  }

  extend type Query {
    rows: [Row!]!
    row(id: ID!): Row
  }

  extend type Mutation {
    createRow(matrixId: ID!, name: String!): Row!
  }
`;

