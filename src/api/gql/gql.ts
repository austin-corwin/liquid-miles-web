// @ts-nocheck
/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

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
    "\n\tquery Faqs {\n\t\tfaqCollection(limit: 50) {\n\t\t\titems {\n\t\t\t\t_id\n\t\t\t\ttitle\n\t\t\t\tcontent {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.FaqsDocument,
    "\n\tquery GetPageBySlug($slug: String!) {\n\t\tpageCollection(where: { slug: $slug }, limit: 1) {\n\t\t\titems {\n\t\t\t\t__typename\n\t\t\t\t_id\n\t\t\t\ttitle\n\t\t\t\tcontent {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t\tsubtitle {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t\tfaqsCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\t__typename\n\t\t\t\t\t\t_id\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tcontent {\n\t\t\t\t\t\t\tjson\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": typeof types.GetPageBySlugDocument,
    "\n\tquery pageCollectionQuery {\n\t\tpageCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\t# add the fields you want to query\n\t\t\t}\n\t\t}\n\t}\n": typeof types.PageCollectionQueryDocument,
};
const documents: Documents = {
    "\n\tquery Faqs {\n\t\tfaqCollection(limit: 50) {\n\t\t\titems {\n\t\t\t\t_id\n\t\t\t\ttitle\n\t\t\t\tcontent {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.FaqsDocument,
    "\n\tquery GetPageBySlug($slug: String!) {\n\t\tpageCollection(where: { slug: $slug }, limit: 1) {\n\t\t\titems {\n\t\t\t\t__typename\n\t\t\t\t_id\n\t\t\t\ttitle\n\t\t\t\tcontent {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t\tsubtitle {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t\tfaqsCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\t__typename\n\t\t\t\t\t\t_id\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tcontent {\n\t\t\t\t\t\t\tjson\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n": types.GetPageBySlugDocument,
    "\n\tquery pageCollectionQuery {\n\t\tpageCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\t# add the fields you want to query\n\t\t\t}\n\t\t}\n\t}\n": types.PageCollectionQueryDocument,
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
export function graphql(source: "\n\tquery Faqs {\n\t\tfaqCollection(limit: 50) {\n\t\t\titems {\n\t\t\t\t_id\n\t\t\t\ttitle\n\t\t\t\tcontent {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery Faqs {\n\t\tfaqCollection(limit: 50) {\n\t\t\titems {\n\t\t\t\t_id\n\t\t\t\ttitle\n\t\t\t\tcontent {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery GetPageBySlug($slug: String!) {\n\t\tpageCollection(where: { slug: $slug }, limit: 1) {\n\t\t\titems {\n\t\t\t\t__typename\n\t\t\t\t_id\n\t\t\t\ttitle\n\t\t\t\tcontent {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t\tsubtitle {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t\tfaqsCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\t__typename\n\t\t\t\t\t\t_id\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tcontent {\n\t\t\t\t\t\t\tjson\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery GetPageBySlug($slug: String!) {\n\t\tpageCollection(where: { slug: $slug }, limit: 1) {\n\t\t\titems {\n\t\t\t\t__typename\n\t\t\t\t_id\n\t\t\t\ttitle\n\t\t\t\tcontent {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t\tsubtitle {\n\t\t\t\t\tjson\n\t\t\t\t\t__typename\n\t\t\t\t}\n\t\t\t\tfaqsCollection {\n\t\t\t\t\titems {\n\t\t\t\t\t\t__typename\n\t\t\t\t\t\t_id\n\t\t\t\t\t\ttitle\n\t\t\t\t\t\tcontent {\n\t\t\t\t\t\t\tjson\n\t\t\t\t\t\t\t__typename\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n\tquery pageCollectionQuery {\n\t\tpageCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\t# add the fields you want to query\n\t\t\t}\n\t\t}\n\t}\n"): (typeof documents)["\n\tquery pageCollectionQuery {\n\t\tpageCollection {\n\t\t\titems {\n\t\t\t\tsys {\n\t\t\t\t\tid\n\t\t\t\t}\n\t\t\t\t# add the fields you want to query\n\t\t\t}\n\t\t}\n\t}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;