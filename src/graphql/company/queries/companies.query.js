import { gql } from "@apollo/client";

export const GET_COMPANIES = gql`
  query {
    companies {
      id
      name
    }
  }
`;
