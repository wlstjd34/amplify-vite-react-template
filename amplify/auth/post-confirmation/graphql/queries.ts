/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getHistory = /* GraphQL */ `query GetHistory($id: ID!) {
  getHistory(id: $id) {
    completion
    createdAt
    date
    dongCode
    housingType
    id
    month
    price
    updatedAt
    year
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHistoryQueryVariables,
  APITypes.GetHistoryQuery
>;
export const listHistories = /* GraphQL */ `query ListHistories(
  $filter: ModelHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listHistories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      completion
      createdAt
      date
      dongCode
      housingType
      id
      month
      price
      updatedAt
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHistoriesQueryVariables,
  APITypes.ListHistoriesQuery
>;
