/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createHistory = /* GraphQL */ `mutation CreateHistory(
  $condition: ModelHistoryConditionInput
  $input: CreateHistoryInput!
) {
  createHistory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateHistoryMutationVariables,
  APITypes.CreateHistoryMutation
>;
export const deleteHistory = /* GraphQL */ `mutation DeleteHistory(
  $condition: ModelHistoryConditionInput
  $input: DeleteHistoryInput!
) {
  deleteHistory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteHistoryMutationVariables,
  APITypes.DeleteHistoryMutation
>;
export const updateHistory = /* GraphQL */ `mutation UpdateHistory(
  $condition: ModelHistoryConditionInput
  $input: UpdateHistoryInput!
) {
  updateHistory(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateHistoryMutationVariables,
  APITypes.UpdateHistoryMutation
>;
