
import gql from "graphql-tag";

export const GET_ME = gql`
import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email

      gameCount
      savedGames {
        gameId
        authors
        description
        title
        image
        link

      }
    }
  }
`;