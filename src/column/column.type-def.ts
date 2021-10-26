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

  extend type Query {
    columns: [Column!]!
    column(id: ID!): Column 
  }

  extend type Mutation {
    createColumn(matrixId: ID!, name: String!): Column!
  }
`;
