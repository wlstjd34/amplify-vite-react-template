/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type History = {
  __typename: "History",
  completion?: number | null,
  createdAt: string,
  date?: number | null,
  dongCode?: number | null,
  housingType?: number | null,
  id: string,
  month?: number | null,
  price?: number | null,
  updatedAt: string,
  year?: number | null,
};

export type ModelHistoryFilterInput = {
  and?: Array< ModelHistoryFilterInput | null > | null,
  completion?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelIntInput | null,
  dongCode?: ModelIntInput | null,
  housingType?: ModelIntInput | null,
  id?: ModelIDInput | null,
  month?: ModelIntInput | null,
  not?: ModelHistoryFilterInput | null,
  or?: Array< ModelHistoryFilterInput | null > | null,
  price?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  year?: ModelIntInput | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelHistoryConnection = {
  __typename: "ModelHistoryConnection",
  items:  Array<History | null >,
  nextToken?: string | null,
};

export type ModelHistoryConditionInput = {
  and?: Array< ModelHistoryConditionInput | null > | null,
  completion?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  date?: ModelIntInput | null,
  dongCode?: ModelIntInput | null,
  housingType?: ModelIntInput | null,
  month?: ModelIntInput | null,
  not?: ModelHistoryConditionInput | null,
  or?: Array< ModelHistoryConditionInput | null > | null,
  price?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
  year?: ModelIntInput | null,
};

export type CreateHistoryInput = {
  completion?: number | null,
  date?: number | null,
  dongCode?: number | null,
  housingType?: number | null,
  id?: string | null,
  month?: number | null,
  price?: number | null,
  year?: number | null,
};

export type DeleteHistoryInput = {
  id: string,
};

export type UpdateHistoryInput = {
  completion?: number | null,
  date?: number | null,
  dongCode?: number | null,
  housingType?: number | null,
  id: string,
  month?: number | null,
  price?: number | null,
  year?: number | null,
};

export type ModelSubscriptionHistoryFilterInput = {
  and?: Array< ModelSubscriptionHistoryFilterInput | null > | null,
  completion?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  date?: ModelSubscriptionIntInput | null,
  dongCode?: ModelSubscriptionIntInput | null,
  housingType?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  month?: ModelSubscriptionIntInput | null,
  or?: Array< ModelSubscriptionHistoryFilterInput | null > | null,
  price?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  year?: ModelSubscriptionIntInput | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type GetHistoryQueryVariables = {
  id: string,
};

export type GetHistoryQuery = {
  getHistory?:  {
    __typename: "History",
    completion?: number | null,
    createdAt: string,
    date?: number | null,
    dongCode?: number | null,
    housingType?: number | null,
    id: string,
    month?: number | null,
    price?: number | null,
    updatedAt: string,
    year?: number | null,
  } | null,
};

export type ListHistoriesQueryVariables = {
  filter?: ModelHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListHistoriesQuery = {
  listHistories?:  {
    __typename: "ModelHistoryConnection",
    items:  Array< {
      __typename: "History",
      completion?: number | null,
      createdAt: string,
      date?: number | null,
      dongCode?: number | null,
      housingType?: number | null,
      id: string,
      month?: number | null,
      price?: number | null,
      updatedAt: string,
      year?: number | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateHistoryMutationVariables = {
  condition?: ModelHistoryConditionInput | null,
  input: CreateHistoryInput,
};

export type CreateHistoryMutation = {
  createHistory?:  {
    __typename: "History",
    completion?: number | null,
    createdAt: string,
    date?: number | null,
    dongCode?: number | null,
    housingType?: number | null,
    id: string,
    month?: number | null,
    price?: number | null,
    updatedAt: string,
    year?: number | null,
  } | null,
};

export type DeleteHistoryMutationVariables = {
  condition?: ModelHistoryConditionInput | null,
  input: DeleteHistoryInput,
};

export type DeleteHistoryMutation = {
  deleteHistory?:  {
    __typename: "History",
    completion?: number | null,
    createdAt: string,
    date?: number | null,
    dongCode?: number | null,
    housingType?: number | null,
    id: string,
    month?: number | null,
    price?: number | null,
    updatedAt: string,
    year?: number | null,
  } | null,
};

export type UpdateHistoryMutationVariables = {
  condition?: ModelHistoryConditionInput | null,
  input: UpdateHistoryInput,
};

export type UpdateHistoryMutation = {
  updateHistory?:  {
    __typename: "History",
    completion?: number | null,
    createdAt: string,
    date?: number | null,
    dongCode?: number | null,
    housingType?: number | null,
    id: string,
    month?: number | null,
    price?: number | null,
    updatedAt: string,
    year?: number | null,
  } | null,
};

export type OnCreateHistorySubscriptionVariables = {
  filter?: ModelSubscriptionHistoryFilterInput | null,
};

export type OnCreateHistorySubscription = {
  onCreateHistory?:  {
    __typename: "History",
    completion?: number | null,
    createdAt: string,
    date?: number | null,
    dongCode?: number | null,
    housingType?: number | null,
    id: string,
    month?: number | null,
    price?: number | null,
    updatedAt: string,
    year?: number | null,
  } | null,
};

export type OnDeleteHistorySubscriptionVariables = {
  filter?: ModelSubscriptionHistoryFilterInput | null,
};

export type OnDeleteHistorySubscription = {
  onDeleteHistory?:  {
    __typename: "History",
    completion?: number | null,
    createdAt: string,
    date?: number | null,
    dongCode?: number | null,
    housingType?: number | null,
    id: string,
    month?: number | null,
    price?: number | null,
    updatedAt: string,
    year?: number | null,
  } | null,
};

export type OnUpdateHistorySubscriptionVariables = {
  filter?: ModelSubscriptionHistoryFilterInput | null,
};

export type OnUpdateHistorySubscription = {
  onUpdateHistory?:  {
    __typename: "History",
    completion?: number | null,
    createdAt: string,
    date?: number | null,
    dongCode?: number | null,
    housingType?: number | null,
    id: string,
    month?: number | null,
    price?: number | null,
    updatedAt: string,
    year?: number | null,
  } | null,
};
