import {gql} from 'apollo-server';

export const rowTypeDef = gql`
  type Row {
    id: ID!
    name: String!
    matrix: Matrix!
  }

  extend type Query {
    rows: [Row!]!
    row(id: ID!): Row
  }

  extend type Mutation {
    createRow(matrixId: ID!, name: String!): Row!
  }
`;

