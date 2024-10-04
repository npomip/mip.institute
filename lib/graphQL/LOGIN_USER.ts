import { gql } from "@apollo/client";

const LOGIN_USER = gql`
  mutation LoginUser($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
      }
    }
  }
`;

export default LOGIN_USER