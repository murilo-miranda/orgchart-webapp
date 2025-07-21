import { GET_COMPANIES } from "../../graphql/companies.query";

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
