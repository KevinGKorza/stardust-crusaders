<<<<<<< HEAD
import { gql } from '@apollo/client';

export const ADD_PROFILE = gql`
  mutation addProfile($name: String!, $email: String!, $password: String!) {
    addProfile(name: $name, email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
=======
import gql from "graphql-tag";
>>>>>>> 4cf663332e762274a727628e8a95d17925e2687b

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
<<<<<<< HEAD
      profile {
        _id
        name
=======
      user {
        _id
        username
>>>>>>> 4cf663332e762274a727628e8a95d17925e2687b
      }
    }
  }
`;
<<<<<<< HEAD
=======

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_GAME = gql`
  mutation saveGame($game: SavedGameInput!) {
    saveGame(game: $game) {
      username
      email
      gameCount
      savedGames {
        authors
        description
        gameId
        image
        link
        title
      }
    }
  }
`;

export const REMOVE_GAME = gql`
  mutation removeGame($gameId: String!) {
    removeGame(gameId: $gameId) {
      username
      email
      gameCount
      savedGames {
        authors
        description
        gameId
        image
        link
        title
      }
    }
  }
`;
>>>>>>> 4cf663332e762274a727628e8a95d17925e2687b
