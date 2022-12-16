const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    gameCount: Int
    savedGames: [Game]
  }
  type Game {
    title: String
    gameId: String!
    creators: [String]
    description: String
    image: String
    link: String 
  }
  input GameInput {
    title: String
    creators: [String]
    description: String
    gameId: String
    image: String
    link: String
}
  type Auth {
      token: ID!
      user: User
  }
  
  type Query {
    me: User
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveGame(gameData: GameInput): User
    removeGame(gameId: ID!): User
  }
`;

module.exports = typeDefs;