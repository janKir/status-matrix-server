import {gql} from 'apollo-server';

export const matrixTypeDef = gql`
  type Matrix {
    id: ID!
    name: String!
    description: String
    rows: [Row!]!
    columns: [Column!]!
    values: [Value!]!
    cellEntries: [CellEntry!]!
  }

  extend type Query {
    matrices: [Matrix!]!
    matrix(id: ID!): Matrix
  }

  extend type Mutation {
    createMatrix(name: String!, description: String): Matrix!
  }
`;

