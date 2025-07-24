import { gql } from '@apollo/client';

export const GET_COMPANY = gql`
  query GetCompany($id: ID!) {
    company(id: $id) {
      name
      employees {
        id
        name
        email
        pictureUrl
        manager {
          id
          name
        }
      }
    }
  }
`;
