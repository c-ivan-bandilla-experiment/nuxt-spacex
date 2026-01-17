/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment LaunchFields on Launch {\n  id\n  mission_name\n  launch_date_utc\n  details\n}\n\nfragment LaunchSiteFields on LaunchSite {\n  site_id\n  site_name\n  site_name_long\n}\n\nfragment RocketsFields on LaunchRocket {\n  rocket {\n    id\n    name\n  }\n}": typeof types.LaunchFieldsFragmentDoc,
    "fragment RocketFields on Rocket {\n  name\n  description\n  first_flight\n  diameter {\n    feet\n  }\n  mass {\n    lb\n  }\n  stages\n}": typeof types.RocketFieldsFragmentDoc,
    "query GetLaunches($limit: Int, $offset: Int, $find: LaunchFind) {\n  launches(limit: $limit, offset: $offset, find: $find) {\n    ...LaunchFields\n    launch_site {\n      ...LaunchSiteFields\n    }\n    rocket {\n      ...RocketsFields\n    }\n  }\n}": typeof types.GetLaunchesDocument,
    "query GetRocket($rocketId: ID!) {\n  rocket(id: $rocketId) {\n    ...RocketFields\n  }\n}": typeof types.GetRocketDocument,
};
const documents: Documents = {
    "fragment LaunchFields on Launch {\n  id\n  mission_name\n  launch_date_utc\n  details\n}\n\nfragment LaunchSiteFields on LaunchSite {\n  site_id\n  site_name\n  site_name_long\n}\n\nfragment RocketsFields on LaunchRocket {\n  rocket {\n    id\n    name\n  }\n}": types.LaunchFieldsFragmentDoc,
    "fragment RocketFields on Rocket {\n  name\n  description\n  first_flight\n  diameter {\n    feet\n  }\n  mass {\n    lb\n  }\n  stages\n}": types.RocketFieldsFragmentDoc,
    "query GetLaunches($limit: Int, $offset: Int, $find: LaunchFind) {\n  launches(limit: $limit, offset: $offset, find: $find) {\n    ...LaunchFields\n    launch_site {\n      ...LaunchSiteFields\n    }\n    rocket {\n      ...RocketsFields\n    }\n  }\n}": types.GetLaunchesDocument,
    "query GetRocket($rocketId: ID!) {\n  rocket(id: $rocketId) {\n    ...RocketFields\n  }\n}": types.GetRocketDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment LaunchFields on Launch {\n  id\n  mission_name\n  launch_date_utc\n  details\n}\n\nfragment LaunchSiteFields on LaunchSite {\n  site_id\n  site_name\n  site_name_long\n}\n\nfragment RocketsFields on LaunchRocket {\n  rocket {\n    id\n    name\n  }\n}"): (typeof documents)["fragment LaunchFields on Launch {\n  id\n  mission_name\n  launch_date_utc\n  details\n}\n\nfragment LaunchSiteFields on LaunchSite {\n  site_id\n  site_name\n  site_name_long\n}\n\nfragment RocketsFields on LaunchRocket {\n  rocket {\n    id\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment RocketFields on Rocket {\n  name\n  description\n  first_flight\n  diameter {\n    feet\n  }\n  mass {\n    lb\n  }\n  stages\n}"): (typeof documents)["fragment RocketFields on Rocket {\n  name\n  description\n  first_flight\n  diameter {\n    feet\n  }\n  mass {\n    lb\n  }\n  stages\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetLaunches($limit: Int, $offset: Int, $find: LaunchFind) {\n  launches(limit: $limit, offset: $offset, find: $find) {\n    ...LaunchFields\n    launch_site {\n      ...LaunchSiteFields\n    }\n    rocket {\n      ...RocketsFields\n    }\n  }\n}"): (typeof documents)["query GetLaunches($limit: Int, $offset: Int, $find: LaunchFind) {\n  launches(limit: $limit, offset: $offset, find: $find) {\n    ...LaunchFields\n    launch_site {\n      ...LaunchSiteFields\n    }\n    rocket {\n      ...RocketsFields\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetRocket($rocketId: ID!) {\n  rocket(id: $rocketId) {\n    ...RocketFields\n  }\n}"): (typeof documents)["query GetRocket($rocketId: ID!) {\n  rocket(id: $rocketId) {\n    ...RocketFields\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;