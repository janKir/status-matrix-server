import {gql} from 'apollo-server';

export const columnTypeDef = gql`
  type Column {
    id: ID!
    matrix: Matrix!
    position: Int!
    name: String!
    startDate: String
    endTime: String
    cellEntries: [CellEntry!]!
  }

  input ColumnInMatrixInput {
    name: String!
  }

  extend type Query {
    columns: [Column!]!
    column(id: ID!): Column 
  }

  extend type Mutation {
    createColumn(matrixId: ID!, name: String!): Column!
    updateColumn(id: ID!, name: String): Column!
    deleteColumn(id: ID!): Column!
  }
`;
