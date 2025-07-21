import { GET_COMPANIES } from "../../graphql/company/queries/companies.query";
import { CREATE_COMPANY } from "../../graphql/company/mutations/createCompany.query";

export const companiesMocksSuccess = [
  {
    request: { query: GET_COMPANIES },
    result: {
      data: {
        companies: [
          { id: 1, name: "Uol" },
          { id: 2, name: "Uol Tech" },
        ],
      },
    },
  },
];

export const companiesMocksEmpty = [
  {
    request: { query: GET_COMPANIES },
    result: {
      data: {
        companies: []
      },
    },
  },
];

export const companiesMocksError = [
  {
    request: { query: GET_COMPANIES },
    error: new Error("Mock error")
  },
];

export const createCompanyMockSuccess = [
  {
    request: {
      query: CREATE_COMPANY,
      variables: {
        input: { name: 'Uol Tech' },
      },
    },
    result: {
      data: {
        createCompany: {
          company: {
            id: 1,
            name: 'Uol Tech',
          },
        },
      },
    },
  },
];
