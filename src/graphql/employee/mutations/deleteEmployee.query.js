import { gql } from '@apollo/client';

export const DELETE_EMPLOYEE = gql`
  mutation DeleteEmployee($input: DeleteEmployeeInput!) {
    deleteEmployee(input: $input) {
      employee {
        id
        name
        email
        company {
          name
        }
      }
    }
  }
`;
