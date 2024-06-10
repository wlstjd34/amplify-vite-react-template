/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateHistory = /* GraphQL */ `subscription OnCreateHistory($filter: ModelSubscriptionHistoryFilterInput) {
  onCreateHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateHistorySubscriptionVariables,
  APITypes.OnCreateHistorySubscription
>;
export const onDeleteHistory = /* GraphQL */ `subscription OnDeleteHistory($filter: ModelSubscriptionHistoryFilterInput) {
  onDeleteHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteHistorySubscriptionVariables,
  APITypes.OnDeleteHistorySubscription
>;
export const onUpdateHistory = /* GraphQL */ `subscription OnUpdateHistory($filter: ModelSubscriptionHistoryFilterInput) {
  onUpdateHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateHistorySubscriptionVariables,
  APITypes.OnUpdateHistorySubscription
>;
