import {gql} from 'apollo-server';

export const valueTypeDef = gql`
  type Value {
    id: ID!
    matrix: Matrix!
    name: String!
    color: String!
    cellEntries: [CellEntry!]!
  }

  input ValueInMatrixInput {
    name: String!
    color: String!
  }

  extend type Query {
    values: [Value!]!
    value(id: ID!): Value
    valuesByMatrix(matrixId: ID!): [Value!]!
  }

  extend type Mutation {
    createValue(matrixId: ID!, name: String!, color: String!): Value!
    updateValue(id: ID!, name: String, color: String): Value!
    deleteValue(id: ID!): Value!
  }
`;

