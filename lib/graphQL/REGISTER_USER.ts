import { gql } from "@apollo/client";

const REGISTER_USER = gql`
  mutation RegisterUser($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
      }
    }
  }
`;

export default REGISTER_USER