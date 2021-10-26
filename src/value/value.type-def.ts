import {gql} from 'apollo-server';

export const valueTypeDef = gql`
  type Value {
    id: ID!
    matrix: Matrix!
    name: String!
    color: String!
    cellEntries: [CellEntry!]!
  }

  extend type Query {
    values: [Value!]!
    value(id: ID!): Value
  }

  extend type Mutation {
    createValue(matrixId: ID!, name: String!, color: String!): Value!
  }
`;

