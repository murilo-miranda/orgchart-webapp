import { gql } from '@apollo/client';

export const SET_MANAGER = gql`
  mutation SetManager($input: SetManagerInput!) {
    setManager(input: $input) {
      employee {
        id
        manager {
          id
          name
        }
      }
      errors {
        message
      }
    }
  }
`;
