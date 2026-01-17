/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  ObjectID: { input: any; output: any; }
  _Any: { input: any; output: any; }
  federation__FieldSet: { input: any; output: any; }
  link__Import: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

export type CapsulesFind = {
  id?: InputMaybe<Scalars['ID']['input']>;
  landings?: InputMaybe<Scalars['Int']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  original_launch?: InputMaybe<Scalars['Date']['input']>;
  reuse_count?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type CoresFind = {
  asds_attempts?: InputMaybe<Scalars['Int']['input']>;
  asds_landings?: InputMaybe<Scalars['Int']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  missions?: InputMaybe<Scalars['String']['input']>;
  original_launch?: InputMaybe<Scalars['Date']['input']>;
  reuse_count?: InputMaybe<Scalars['Int']['input']>;
  rtls_attempts?: InputMaybe<Scalars['Int']['input']>;
  rtls_landings?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  water_landing?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HistoryFind = {
  end?: InputMaybe<Scalars['Date']['input']>;
  flight_number?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
};

export type LaunchFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']['input']>;
  block?: InputMaybe<Scalars['Int']['input']>;
  cap_serial?: InputMaybe<Scalars['String']['input']>;
  capsule_reuse?: InputMaybe<Scalars['String']['input']>;
  core_flight?: InputMaybe<Scalars['Int']['input']>;
  core_reuse?: InputMaybe<Scalars['String']['input']>;
  core_serial?: InputMaybe<Scalars['String']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  eccentricity?: InputMaybe<Scalars['Float']['input']>;
  end?: InputMaybe<Scalars['Date']['input']>;
  epoch?: InputMaybe<Scalars['Date']['input']>;
  fairings_recovered?: InputMaybe<Scalars['String']['input']>;
  fairings_recovery_attempt?: InputMaybe<Scalars['String']['input']>;
  fairings_reuse?: InputMaybe<Scalars['String']['input']>;
  fairings_reused?: InputMaybe<Scalars['String']['input']>;
  fairings_ship?: InputMaybe<Scalars['String']['input']>;
  gridfins?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  inclination_deg?: InputMaybe<Scalars['Float']['input']>;
  land_success?: InputMaybe<Scalars['String']['input']>;
  landing_intent?: InputMaybe<Scalars['String']['input']>;
  landing_type?: InputMaybe<Scalars['String']['input']>;
  landing_vehicle?: InputMaybe<Scalars['String']['input']>;
  launch_date_local?: InputMaybe<Scalars['Date']['input']>;
  launch_date_utc?: InputMaybe<Scalars['Date']['input']>;
  launch_success?: InputMaybe<Scalars['String']['input']>;
  launch_year?: InputMaybe<Scalars['String']['input']>;
  legs?: InputMaybe<Scalars['String']['input']>;
  lifespan_years?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  mean_motion?: InputMaybe<Scalars['Float']['input']>;
  mission_id?: InputMaybe<Scalars['String']['input']>;
  mission_name?: InputMaybe<Scalars['String']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  norad_id?: InputMaybe<Scalars['Int']['input']>;
  orbit?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['String']['input']>;
  payload_type?: InputMaybe<Scalars['String']['input']>;
  periapsis_km?: InputMaybe<Scalars['Float']['input']>;
  period_min?: InputMaybe<Scalars['Float']['input']>;
  raan?: InputMaybe<Scalars['Float']['input']>;
  reference_system?: InputMaybe<Scalars['String']['input']>;
  regime?: InputMaybe<Scalars['String']['input']>;
  reused?: InputMaybe<Scalars['String']['input']>;
  rocket_id?: InputMaybe<Scalars['String']['input']>;
  rocket_name?: InputMaybe<Scalars['String']['input']>;
  rocket_type?: InputMaybe<Scalars['String']['input']>;
  second_stage_block?: InputMaybe<Scalars['String']['input']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']['input']>;
  ship?: InputMaybe<Scalars['String']['input']>;
  side_core1_reuse?: InputMaybe<Scalars['String']['input']>;
  side_core2_reuse?: InputMaybe<Scalars['String']['input']>;
  site_id?: InputMaybe<Scalars['String']['input']>;
  site_name?: InputMaybe<Scalars['String']['input']>;
  site_name_long?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Date']['input']>;
  tbd?: InputMaybe<Scalars['String']['input']>;
  tentative?: InputMaybe<Scalars['String']['input']>;
  tentative_max_precision?: InputMaybe<Scalars['String']['input']>;
};

export type MissionsFind = {
  id?: InputMaybe<Scalars['ID']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadsFind = {
  apoapsis_km?: InputMaybe<Scalars['Float']['input']>;
  customer?: InputMaybe<Scalars['String']['input']>;
  eccentricity?: InputMaybe<Scalars['Float']['input']>;
  epoch?: InputMaybe<Scalars['Date']['input']>;
  inclination_deg?: InputMaybe<Scalars['Float']['input']>;
  lifespan_years?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  manufacturer?: InputMaybe<Scalars['String']['input']>;
  mean_motion?: InputMaybe<Scalars['Float']['input']>;
  nationality?: InputMaybe<Scalars['String']['input']>;
  norad_id?: InputMaybe<Scalars['Int']['input']>;
  orbit?: InputMaybe<Scalars['String']['input']>;
  payload_id?: InputMaybe<Scalars['ID']['input']>;
  payload_type?: InputMaybe<Scalars['String']['input']>;
  periapsis_km?: InputMaybe<Scalars['Float']['input']>;
  period_min?: InputMaybe<Scalars['Float']['input']>;
  raan?: InputMaybe<Scalars['Float']['input']>;
  reference_system?: InputMaybe<Scalars['String']['input']>;
  regime?: InputMaybe<Scalars['String']['input']>;
  reused?: InputMaybe<Scalars['Boolean']['input']>;
  semi_major_axis_km?: InputMaybe<Scalars['Float']['input']>;
};

export type ShipsFind = {
  abs?: InputMaybe<Scalars['Int']['input']>;
  active?: InputMaybe<Scalars['Boolean']['input']>;
  attempted_landings?: InputMaybe<Scalars['Int']['input']>;
  class?: InputMaybe<Scalars['Int']['input']>;
  course_deg?: InputMaybe<Scalars['Int']['input']>;
  home_port?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  imo?: InputMaybe<Scalars['Int']['input']>;
  latitude?: InputMaybe<Scalars['Float']['input']>;
  longitude?: InputMaybe<Scalars['Float']['input']>;
  mission?: InputMaybe<Scalars['String']['input']>;
  mmsi?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  speed_kn?: InputMaybe<Scalars['Int']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  successful_landings?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
  weight_kg?: InputMaybe<Scalars['Int']['input']>;
  weight_lbs?: InputMaybe<Scalars['Int']['input']>;
  year_built?: InputMaybe<Scalars['Int']['input']>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  _nlike?: InputMaybe<Scalars['String']['input']>;
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** conflict action */
export enum Conflict_Action {
  /** ignore the insert on this row */
  Ignore = 'ignore',
  /** update the row with the given values */
  Update = 'update'
}

export enum Link__Purpose {
  /** `EXECUTION` features provide metadata necessary for operation execution. */
  Execution = 'EXECUTION',
  /** `SECURITY` features provide metadata necessary to securely resolve fields. */
  Security = 'SECURITY'
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Users_Max_Order_By>;
  min?: InputMaybe<Users_Min_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<InputMaybe<Users_Bool_Exp>>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  rocket?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  twitter?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  Constraint = 'constraint',
  Key = 'key',
  Or = 'or',
  Primary = 'primary',
  Unique = 'unique',
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rocket?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  name?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  name?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  rocket?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  twitter?: InputMaybe<Order_By>;
};

/** select columns of table "users" */
export enum Users_Select_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  id?: InputMaybe<Scalars['uuid']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  rocket?: InputMaybe<Scalars['String']['input']>;
  timestamp?: InputMaybe<Scalars['timestamptz']['input']>;
  twitter?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  Column = 'column',
  Id = 'id',
  Name = 'name',
  Rocket = 'rocket',
  Timestamp = 'timestamp',
  Twitter = 'twitter'
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type LaunchFieldsFragment = { __typename?: 'Launch', id?: string | null, mission_name?: string | null, launch_date_utc?: any | null, details?: string | null } & { ' $fragmentName'?: 'LaunchFieldsFragment' };

export type LaunchSiteFieldsFragment = { __typename?: 'LaunchSite', site_id?: string | null, site_name?: string | null, site_name_long?: string | null } & { ' $fragmentName'?: 'LaunchSiteFieldsFragment' };

export type RocketsFieldsFragment = { __typename?: 'LaunchRocket', rocket?: { __typename?: 'Rocket', id?: string | null, name?: string | null } | null } & { ' $fragmentName'?: 'RocketsFieldsFragment' };

export type RocketFieldsFragment = { __typename?: 'Rocket', name?: string | null, description?: string | null, first_flight?: any | null, stages?: number | null, diameter?: { __typename?: 'Distance', feet?: number | null } | null, mass?: { __typename?: 'Mass', lb?: number | null } | null } & { ' $fragmentName'?: 'RocketFieldsFragment' };

export type GetLaunchesQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  find?: InputMaybe<LaunchFind>;
}>;


export type GetLaunchesQuery = { __typename?: 'Query', launches?: Array<(
    { __typename?: 'Launch', launch_site?: (
      { __typename?: 'LaunchSite' }
      & { ' $fragmentRefs'?: { 'LaunchSiteFieldsFragment': LaunchSiteFieldsFragment } }
    ) | null, rocket?: (
      { __typename?: 'LaunchRocket' }
      & { ' $fragmentRefs'?: { 'RocketsFieldsFragment': RocketsFieldsFragment } }
    ) | null }
    & { ' $fragmentRefs'?: { 'LaunchFieldsFragment': LaunchFieldsFragment } }
  ) | null> | null };

export type GetRocketQueryVariables = Exact<{
  rocketId: Scalars['ID']['input'];
}>;


export type GetRocketQuery = { __typename?: 'Query', rocket?: (
    { __typename?: 'Rocket' }
    & { ' $fragmentRefs'?: { 'RocketFieldsFragment': RocketFieldsFragment } }
  ) | null };

export const LaunchFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Launch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mission_name"}},{"kind":"Field","name":{"kind":"Name","value":"launch_date_utc"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}}]} as unknown as DocumentNode<LaunchFieldsFragment, unknown>;
export const LaunchSiteFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchSiteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LaunchSite"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"site_id"}},{"kind":"Field","name":{"kind":"Name","value":"site_name"}},{"kind":"Field","name":{"kind":"Name","value":"site_name_long"}}]}}]} as unknown as DocumentNode<LaunchSiteFieldsFragment, unknown>;
export const RocketsFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RocketsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LaunchRocket"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rocket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<RocketsFieldsFragment, unknown>;
export const RocketFieldsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RocketFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Rocket"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"first_flight"}},{"kind":"Field","name":{"kind":"Name","value":"diameter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feet"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mass"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lb"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stages"}}]}}]} as unknown as DocumentNode<RocketFieldsFragment, unknown>;
export const GetLaunchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLaunches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"find"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"LaunchFind"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"find"},"value":{"kind":"Variable","name":{"kind":"Name","value":"find"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaunchFields"}},{"kind":"Field","name":{"kind":"Name","value":"launch_site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaunchSiteFields"}}]}},{"kind":"Field","name":{"kind":"Name","value":"rocket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RocketsFields"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Launch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"mission_name"}},{"kind":"Field","name":{"kind":"Name","value":"launch_date_utc"}},{"kind":"Field","name":{"kind":"Name","value":"details"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchSiteFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LaunchSite"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"site_id"}},{"kind":"Field","name":{"kind":"Name","value":"site_name"}},{"kind":"Field","name":{"kind":"Name","value":"site_name_long"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RocketsFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LaunchRocket"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rocket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetLaunchesQuery, GetLaunchesQueryVariables>;
export const GetRocketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRocket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"rocketId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rocket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"rocketId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"RocketFields"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"RocketFields"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Rocket"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"first_flight"}},{"kind":"Field","name":{"kind":"Name","value":"diameter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feet"}}]}},{"kind":"Field","name":{"kind":"Name","value":"mass"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lb"}}]}},{"kind":"Field","name":{"kind":"Name","value":"stages"}}]}}]} as unknown as DocumentNode<GetRocketQuery, GetRocketQueryVariables>;