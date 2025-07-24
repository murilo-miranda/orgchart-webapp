import { gql } from '@apollo/client';

export const CREATE_EMPLOYEE = gql`
  mutation CreateEmployee($input: CreateEmployeeInput!) {
    createEmployee(input: $input) {
      employee {
        id
        name
        email
        pictureUrl
      }
      errors{
        message
        path
      }
    }
  }
`;
