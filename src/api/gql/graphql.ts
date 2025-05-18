/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  /**
   * A date-time string at UTC, such as 2007-12-03T10:15:30Z,
   *     compliant with the 'date-time' format outlined in section 5.6 of
   *     the RFC 3339 profile of the ISO 8601 standard for representation
   *     of dates and times using the Gregorian calendar.
   */
  DateTime: { input: any; output: any }
  /** The 'Dimension' type represents dimensions as whole numeric values between `1` and `4000`. */
  Dimension: { input: any; output: any }
  /** The 'HexColor' type represents color in `rgb:ffffff` string format. */
  HexColor: { input: any; output: any }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any }
  /** The 'Quality' type represents quality as whole numeric values between `1` and `100`. */
  Quality: { input: any; output: any }
}

/** Represents a binary file in a space. An asset can be any file type. */
export type Asset = {
  __typename?: 'Asset'
  contentType?: Maybe<Scalars['String']['output']>
  contentfulMetadata: ContentfulMetadata
  description?: Maybe<Scalars['String']['output']>
  fileName?: Maybe<Scalars['String']['output']>
  height?: Maybe<Scalars['Int']['output']>
  linkedFrom?: Maybe<AssetLinkingCollections>
  size?: Maybe<Scalars['Int']['output']>
  sys: Sys
  title?: Maybe<Scalars['String']['output']>
  url?: Maybe<Scalars['String']['output']>
  width?: Maybe<Scalars['Int']['output']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetContentTypeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetDescriptionArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetFileNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetHeightArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetSizeArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
  transform?: InputMaybe<ImageTransformOptions>
}

/** Represents a binary file in a space. An asset can be any file type. */
export type AssetWidthArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type AssetCollection = {
  __typename?: 'AssetCollection'
  items: Array<Maybe<Asset>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type AssetFilter = {
  AND?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  OR?: InputMaybe<Array<InputMaybe<AssetFilter>>>
  contentType?: InputMaybe<Scalars['String']['input']>
  contentType_contains?: InputMaybe<Scalars['String']['input']>
  contentType_exists?: InputMaybe<Scalars['Boolean']['input']>
  contentType_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentType_not?: InputMaybe<Scalars['String']['input']>
  contentType_not_contains?: InputMaybe<Scalars['String']['input']>
  contentType_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  description?: InputMaybe<Scalars['String']['input']>
  description_contains?: InputMaybe<Scalars['String']['input']>
  description_exists?: InputMaybe<Scalars['Boolean']['input']>
  description_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  description_not?: InputMaybe<Scalars['String']['input']>
  description_not_contains?: InputMaybe<Scalars['String']['input']>
  description_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName?: InputMaybe<Scalars['String']['input']>
  fileName_contains?: InputMaybe<Scalars['String']['input']>
  fileName_exists?: InputMaybe<Scalars['Boolean']['input']>
  fileName_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  fileName_not?: InputMaybe<Scalars['String']['input']>
  fileName_not_contains?: InputMaybe<Scalars['String']['input']>
  fileName_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  height?: InputMaybe<Scalars['Int']['input']>
  height_exists?: InputMaybe<Scalars['Boolean']['input']>
  height_gt?: InputMaybe<Scalars['Int']['input']>
  height_gte?: InputMaybe<Scalars['Int']['input']>
  height_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  height_lt?: InputMaybe<Scalars['Int']['input']>
  height_lte?: InputMaybe<Scalars['Int']['input']>
  height_not?: InputMaybe<Scalars['Int']['input']>
  height_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size?: InputMaybe<Scalars['Int']['input']>
  size_exists?: InputMaybe<Scalars['Boolean']['input']>
  size_gt?: InputMaybe<Scalars['Int']['input']>
  size_gte?: InputMaybe<Scalars['Int']['input']>
  size_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  size_lt?: InputMaybe<Scalars['Int']['input']>
  size_lte?: InputMaybe<Scalars['Int']['input']>
  size_not?: InputMaybe<Scalars['Int']['input']>
  size_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
  url_contains?: InputMaybe<Scalars['String']['input']>
  url_exists?: InputMaybe<Scalars['Boolean']['input']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url_not?: InputMaybe<Scalars['String']['input']>
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  width?: InputMaybe<Scalars['Int']['input']>
  width_exists?: InputMaybe<Scalars['Boolean']['input']>
  width_gt?: InputMaybe<Scalars['Int']['input']>
  width_gte?: InputMaybe<Scalars['Int']['input']>
  width_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
  width_lt?: InputMaybe<Scalars['Int']['input']>
  width_lte?: InputMaybe<Scalars['Int']['input']>
  width_not?: InputMaybe<Scalars['Int']['input']>
  width_not_in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>
}

export type AssetLinkingCollections = {
  __typename?: 'AssetLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type AssetLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum AssetOrder {
  ContentTypeAsc = 'contentType_ASC',
  ContentTypeDesc = 'contentType_DESC',
  FileNameAsc = 'fileName_ASC',
  FileNameDesc = 'fileName_DESC',
  HeightAsc = 'height_ASC',
  HeightDesc = 'height_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
  WidthAsc = 'width_ASC',
  WidthDesc = 'width_DESC',
}

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntry = Entry &
  _Node & {
    __typename?: 'ContactFormEntry'
    _id: Scalars['ID']['output']
    channel?: Maybe<Scalars['String']['output']>
    contentfulMetadata: ContentfulMetadata
    data?: Maybe<Scalars['JSON']['output']>
    email?: Maybe<Scalars['String']['output']>
    linkedFrom?: Maybe<ContactFormEntryLinkingCollections>
    message?: Maybe<Scalars['String']['output']>
    name?: Maybe<Scalars['String']['output']>
    phone?: Maybe<Scalars['String']['output']>
    sys: Sys
    title?: Maybe<Scalars['String']['output']>
  }

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntryChannelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntryDataArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntryEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntryLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntryMessageArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntryNameArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntryPhoneArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Submissions using contact form feature. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/contactFormEntry) */
export type ContactFormEntryTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type ContactFormEntryCollection = {
  __typename?: 'ContactFormEntryCollection'
  items: Array<Maybe<ContactFormEntry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type ContactFormEntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<ContactFormEntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<ContactFormEntryFilter>>>
  channel?: InputMaybe<Scalars['String']['input']>
  channel_contains?: InputMaybe<Scalars['String']['input']>
  channel_exists?: InputMaybe<Scalars['Boolean']['input']>
  channel_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  channel_not?: InputMaybe<Scalars['String']['input']>
  channel_not_contains?: InputMaybe<Scalars['String']['input']>
  channel_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  data_exists?: InputMaybe<Scalars['Boolean']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  email_contains?: InputMaybe<Scalars['String']['input']>
  email_exists?: InputMaybe<Scalars['Boolean']['input']>
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  email_not?: InputMaybe<Scalars['String']['input']>
  email_not_contains?: InputMaybe<Scalars['String']['input']>
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  message?: InputMaybe<Scalars['String']['input']>
  message_contains?: InputMaybe<Scalars['String']['input']>
  message_exists?: InputMaybe<Scalars['Boolean']['input']>
  message_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  message_not?: InputMaybe<Scalars['String']['input']>
  message_not_contains?: InputMaybe<Scalars['String']['input']>
  message_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name?: InputMaybe<Scalars['String']['input']>
  name_contains?: InputMaybe<Scalars['String']['input']>
  name_exists?: InputMaybe<Scalars['Boolean']['input']>
  name_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  name_not?: InputMaybe<Scalars['String']['input']>
  name_not_contains?: InputMaybe<Scalars['String']['input']>
  name_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  phone?: InputMaybe<Scalars['String']['input']>
  phone_contains?: InputMaybe<Scalars['String']['input']>
  phone_exists?: InputMaybe<Scalars['Boolean']['input']>
  phone_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  phone_not?: InputMaybe<Scalars['String']['input']>
  phone_not_contains?: InputMaybe<Scalars['String']['input']>
  phone_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ContactFormEntryLinkingCollections = {
  __typename?: 'ContactFormEntryLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type ContactFormEntryLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum ContactFormEntryOrder {
  ChannelAsc = 'channel_ASC',
  ChannelDesc = 'channel_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  PhoneAsc = 'phone_ASC',
  PhoneDesc = 'phone_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type ContentfulMetadata = {
  __typename?: 'ContentfulMetadata'
  concepts: Array<Maybe<TaxonomyConcept>>
  tags: Array<Maybe<ContentfulTag>>
}

export type ContentfulMetadataConceptsDescendantsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ContentfulMetadataConceptsFilter = {
  descendants?: InputMaybe<ContentfulMetadataConceptsDescendantsFilter>
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type ContentfulMetadataFilter = {
  concepts?: InputMaybe<ContentfulMetadataConceptsFilter>
  concepts_exists?: InputMaybe<Scalars['Boolean']['input']>
  tags?: InputMaybe<ContentfulMetadataTagsFilter>
  tags_exists?: InputMaybe<Scalars['Boolean']['input']>
}

export type ContentfulMetadataTagsFilter = {
  id_contains_all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_none?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_contains_some?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/**
 * Represents a tag entity for finding and organizing content easily.
 *       Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-tags
 */
export type ContentfulTag = {
  __typename?: 'ContentfulTag'
  id?: Maybe<Scalars['String']['output']>
  name?: Maybe<Scalars['String']['output']>
}

export type Entry = {
  contentfulMetadata: ContentfulMetadata
  sys: Sys
}

export type EntryCollection = {
  __typename?: 'EntryCollection'
  items: Array<Maybe<Entry>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type EntryFilter = {
  AND?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  OR?: InputMaybe<Array<InputMaybe<EntryFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export enum EntryOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

/** Questions and answers [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/faq) */
export type Faq = Entry &
  _Node & {
    __typename?: 'Faq'
    _id: Scalars['ID']['output']
    content?: Maybe<FaqContent>
    contentfulMetadata: ContentfulMetadata
    linkedFrom?: Maybe<FaqLinkingCollections>
    sys: Sys
    title?: Maybe<Scalars['String']['output']>
  }

/** Questions and answers [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/faq) */
export type FaqContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Questions and answers [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/faq) */
export type FaqLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Questions and answers [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/faq) */
export type FaqTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type FaqCollection = {
  __typename?: 'FaqCollection'
  items: Array<Maybe<Faq>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type FaqContent = {
  __typename?: 'FaqContent'
  json: Scalars['JSON']['output']
  links: FaqContentLinks
}

export type FaqContentAssets = {
  __typename?: 'FaqContentAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type FaqContentEntries = {
  __typename?: 'FaqContentEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type FaqContentLinks = {
  __typename?: 'FaqContentLinks'
  assets: FaqContentAssets
  entries: FaqContentEntries
  resources: FaqContentResources
}

export type FaqContentResources = {
  __typename?: 'FaqContentResources'
  block: Array<FaqContentResourcesBlock>
  hyperlink: Array<FaqContentResourcesHyperlink>
  inline: Array<FaqContentResourcesInline>
}

export type FaqContentResourcesBlock = ResourceLink & {
  __typename?: 'FaqContentResourcesBlock'
  sys: ResourceSys
}

export type FaqContentResourcesHyperlink = ResourceLink & {
  __typename?: 'FaqContentResourcesHyperlink'
  sys: ResourceSys
}

export type FaqContentResourcesInline = ResourceLink & {
  __typename?: 'FaqContentResourcesInline'
  sys: ResourceSys
}

export type FaqFilter = {
  AND?: InputMaybe<Array<InputMaybe<FaqFilter>>>
  OR?: InputMaybe<Array<InputMaybe<FaqFilter>>>
  content_contains?: InputMaybe<Scalars['String']['input']>
  content_exists?: InputMaybe<Scalars['Boolean']['input']>
  content_not_contains?: InputMaybe<Scalars['String']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FaqLinkingCollections = {
  __typename?: 'FaqLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  pageCollection?: Maybe<PageCollection>
}

export type FaqLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type FaqLinkingCollectionsPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<
    Array<InputMaybe<FaqLinkingCollectionsPageCollectionOrder>>
  >
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum FaqLinkingCollectionsPageCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum FaqOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum ImageFormat {
  /** AVIF image format. */
  Avif = 'AVIF',
  /** JPG image format. */
  Jpg = 'JPG',
  /**
   * Progressive JPG format stores multiple passes of an image in progressively higher detail.
   *         When a progressive image is loading, the viewer will first see a lower quality pixelated version which
   *         will gradually improve in detail, until the image is fully downloaded. This is to display an image as
   *         early as possible to make the layout look as designed.
   */
  JpgProgressive = 'JPG_PROGRESSIVE',
  /** PNG image format */
  Png = 'PNG',
  /**
   * 8-bit PNG images support up to 256 colors and weigh less than the standard 24-bit PNG equivalent.
   *         The 8-bit PNG format is mostly used for simple images, such as icons or logos.
   */
  Png8 = 'PNG8',
  /** WebP image format. */
  Webp = 'WEBP',
}

export enum ImageResizeFocus {
  /** Focus the resizing on the bottom. */
  Bottom = 'BOTTOM',
  /** Focus the resizing on the bottom left. */
  BottomLeft = 'BOTTOM_LEFT',
  /** Focus the resizing on the bottom right. */
  BottomRight = 'BOTTOM_RIGHT',
  /** Focus the resizing on the center. */
  Center = 'CENTER',
  /** Focus the resizing on the largest face. */
  Face = 'FACE',
  /** Focus the resizing on the area containing all the faces. */
  Faces = 'FACES',
  /** Focus the resizing on the left. */
  Left = 'LEFT',
  /** Focus the resizing on the right. */
  Right = 'RIGHT',
  /** Focus the resizing on the top. */
  Top = 'TOP',
  /** Focus the resizing on the top left. */
  TopLeft = 'TOP_LEFT',
  /** Focus the resizing on the top right. */
  TopRight = 'TOP_RIGHT',
}

export enum ImageResizeStrategy {
  /** Crops a part of the original image to fit into the specified dimensions. */
  Crop = 'CROP',
  /** Resizes the image to the specified dimensions, cropping the image if needed. */
  Fill = 'FILL',
  /** Resizes the image to fit into the specified dimensions. */
  Fit = 'FIT',
  /**
   * Resizes the image to the specified dimensions, padding the image if needed.
   *         Uses desired background color as padding color.
   */
  Pad = 'PAD',
  /** Resizes the image to the specified dimensions, changing the original aspect ratio if needed. */
  Scale = 'SCALE',
  /** Creates a thumbnail from the image. */
  Thumb = 'THUMB',
}

export type ImageTransformOptions = {
  /**
   * Desired background color, used with corner radius or `PAD` resize strategy.
   *         Defaults to transparent (for `PNG`, `PNG8` and `WEBP`) or white (for `JPG` and `JPG_PROGRESSIVE`).
   */
  backgroundColor?: InputMaybe<Scalars['HexColor']['input']>
  /**
   * Desired corner radius in pixels.
   *         Results in an image with rounded corners (pass `-1` for a full circle/ellipse).
   *         Defaults to `0`. Uses desired background color as padding color,
   *         unless the format is `JPG` or `JPG_PROGRESSIVE` and resize strategy is `PAD`, then defaults to white.
   */
  cornerRadius?: InputMaybe<Scalars['Int']['input']>
  /** Desired image format. Defaults to the original image format. */
  format?: InputMaybe<ImageFormat>
  /** Desired height in pixels. Defaults to the original image height. */
  height?: InputMaybe<Scalars['Dimension']['input']>
  /**
   * Desired quality of the image in percents.
   *         Used for `PNG8`, `JPG`, `JPG_PROGRESSIVE` and `WEBP` formats.
   */
  quality?: InputMaybe<Scalars['Quality']['input']>
  /** Desired resize focus area. Defaults to `CENTER`. */
  resizeFocus?: InputMaybe<ImageResizeFocus>
  /** Desired resize strategy. Defaults to `FIT`. */
  resizeStrategy?: InputMaybe<ImageResizeStrategy>
  /** Desired width in pixels. Defaults to the original image width. */
  width?: InputMaybe<Scalars['Dimension']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/link) */
export type Link = Entry &
  _Node & {
    __typename?: 'Link'
    _id: Scalars['ID']['output']
    contentfulMetadata: ContentfulMetadata
    label?: Maybe<Scalars['String']['output']>
    linkedFrom?: Maybe<LinkLinkingCollections>
    requiresAuthentication?: Maybe<Scalars['Boolean']['output']>
    requiresRole?: Maybe<Array<Maybe<Scalars['String']['output']>>>
    sys: Sys
    target?: Maybe<Scalars['String']['output']>
    url?: Maybe<Scalars['String']['output']>
  }

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/link) */
export type LinkLabelArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/link) */
export type LinkLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/link) */
export type LinkRequiresAuthenticationArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/link) */
export type LinkRequiresRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/link) */
export type LinkTargetArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/link) */
export type LinkUrlArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type LinkCollection = {
  __typename?: 'LinkCollection'
  items: Array<Maybe<Link>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type LinkFilter = {
  AND?: InputMaybe<Array<InputMaybe<LinkFilter>>>
  OR?: InputMaybe<Array<InputMaybe<LinkFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  label?: InputMaybe<Scalars['String']['input']>
  label_contains?: InputMaybe<Scalars['String']['input']>
  label_exists?: InputMaybe<Scalars['Boolean']['input']>
  label_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  label_not?: InputMaybe<Scalars['String']['input']>
  label_not_contains?: InputMaybe<Scalars['String']['input']>
  label_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  requiresAuthentication?: InputMaybe<Scalars['Boolean']['input']>
  requiresAuthentication_exists?: InputMaybe<Scalars['Boolean']['input']>
  requiresAuthentication_not?: InputMaybe<Scalars['Boolean']['input']>
  requiresRole_contains_all?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  requiresRole_contains_none?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  requiresRole_contains_some?: InputMaybe<
    Array<InputMaybe<Scalars['String']['input']>>
  >
  requiresRole_exists?: InputMaybe<Scalars['Boolean']['input']>
  sys?: InputMaybe<SysFilter>
  target?: InputMaybe<Scalars['String']['input']>
  target_contains?: InputMaybe<Scalars['String']['input']>
  target_exists?: InputMaybe<Scalars['Boolean']['input']>
  target_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  target_not?: InputMaybe<Scalars['String']['input']>
  target_not_contains?: InputMaybe<Scalars['String']['input']>
  target_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url?: InputMaybe<Scalars['String']['input']>
  url_contains?: InputMaybe<Scalars['String']['input']>
  url_exists?: InputMaybe<Scalars['Boolean']['input']>
  url_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  url_not?: InputMaybe<Scalars['String']['input']>
  url_not_contains?: InputMaybe<Scalars['String']['input']>
  url_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type LinkLinkingCollections = {
  __typename?: 'LinkLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  navMenusCollection?: Maybe<NavMenusCollection>
}

export type LinkLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type LinkLinkingCollectionsNavMenusCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<
    Array<InputMaybe<LinkLinkingCollectionsNavMenusCollectionOrder>>
  >
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum LinkLinkingCollectionsNavMenusCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum LinkOrder {
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  RequiresAuthenticationAsc = 'requiresAuthentication_ASC',
  RequiresAuthenticationDesc = 'requiresAuthentication_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TargetAsc = 'target_ASC',
  TargetDesc = 'target_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC',
}

/** Navigation menus comprised of links or CTAs [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/navMenus) */
export type NavMenus = Entry &
  _Node & {
    __typename?: 'NavMenus'
    _id: Scalars['ID']['output']
    contentfulMetadata: ContentfulMetadata
    linkedFrom?: Maybe<NavMenusLinkingCollections>
    linksCollection?: Maybe<NavMenusLinksCollection>
    slug?: Maybe<Scalars['String']['output']>
    sys: Sys
    title?: Maybe<Scalars['String']['output']>
  }

/** Navigation menus comprised of links or CTAs [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/navMenus) */
export type NavMenusLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Navigation menus comprised of links or CTAs [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/navMenus) */
export type NavMenusLinksCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<NavMenusLinksFilter>
}

/** Navigation menus comprised of links or CTAs [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/navMenus) */
export type NavMenusSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Navigation menus comprised of links or CTAs [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/navMenus) */
export type NavMenusTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type NavMenusCollection = {
  __typename?: 'NavMenusCollection'
  items: Array<Maybe<NavMenus>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type NavMenusFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavMenusFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NavMenusFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  links?: InputMaybe<CflinksMultiTypeNestedFilter>
  linksCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  slug_contains?: InputMaybe<Scalars['String']['input']>
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug_not?: InputMaybe<Scalars['String']['input']>
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type NavMenusLinkingCollections = {
  __typename?: 'NavMenusLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type NavMenusLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type NavMenusLinksCollection = {
  __typename?: 'NavMenusLinksCollection'
  items: Array<Maybe<NavMenusLinksItem>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type NavMenusLinksFilter = {
  AND?: InputMaybe<Array<InputMaybe<NavMenusLinksFilter>>>
  OR?: InputMaybe<Array<InputMaybe<NavMenusLinksFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export type NavMenusLinksItem = Link | Page | Race

export enum NavMenusOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/page) */
export type Page = Entry &
  _Node & {
    __typename?: 'Page'
    _id: Scalars['ID']['output']
    content?: Maybe<PageContent>
    contentfulMetadata: ContentfulMetadata
    faqsCollection?: Maybe<PageFaqsCollection>
    linkedFrom?: Maybe<PageLinkingCollections>
    slug?: Maybe<Scalars['String']['output']>
    subtitle?: Maybe<PageSubtitle>
    sys: Sys
    title?: Maybe<Scalars['String']['output']>
  }

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/page) */
export type PageContentArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/page) */
export type PageFaqsCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<PageFaqsCollectionOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FaqFilter>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/page) */
export type PageLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/page) */
export type PageSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/page) */
export type PageSubtitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/page) */
export type PageTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type PageCollection = {
  __typename?: 'PageCollection'
  items: Array<Maybe<Page>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type PageContent = {
  __typename?: 'PageContent'
  json: Scalars['JSON']['output']
  links: PageContentLinks
}

export type PageContentAssets = {
  __typename?: 'PageContentAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type PageContentEntries = {
  __typename?: 'PageContentEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type PageContentLinks = {
  __typename?: 'PageContentLinks'
  assets: PageContentAssets
  entries: PageContentEntries
  resources: PageContentResources
}

export type PageContentResources = {
  __typename?: 'PageContentResources'
  block: Array<PageContentResourcesBlock>
  hyperlink: Array<PageContentResourcesHyperlink>
  inline: Array<PageContentResourcesInline>
}

export type PageContentResourcesBlock = ResourceLink & {
  __typename?: 'PageContentResourcesBlock'
  sys: ResourceSys
}

export type PageContentResourcesHyperlink = ResourceLink & {
  __typename?: 'PageContentResourcesHyperlink'
  sys: ResourceSys
}

export type PageContentResourcesInline = ResourceLink & {
  __typename?: 'PageContentResourcesInline'
  sys: ResourceSys
}

export type PageFaqsCollection = {
  __typename?: 'PageFaqsCollection'
  items: Array<Maybe<Faq>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export enum PageFaqsCollectionOrder {
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type PageFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageFilter>>>
  OR?: InputMaybe<Array<InputMaybe<PageFilter>>>
  content_contains?: InputMaybe<Scalars['String']['input']>
  content_exists?: InputMaybe<Scalars['Boolean']['input']>
  content_not_contains?: InputMaybe<Scalars['String']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  faqs?: InputMaybe<CfFaqNestedFilter>
  faqsCollection_exists?: InputMaybe<Scalars['Boolean']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  slug_contains?: InputMaybe<Scalars['String']['input']>
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug_not?: InputMaybe<Scalars['String']['input']>
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  subtitle_contains?: InputMaybe<Scalars['String']['input']>
  subtitle_exists?: InputMaybe<Scalars['Boolean']['input']>
  subtitle_not_contains?: InputMaybe<Scalars['String']['input']>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PageLinkingCollections = {
  __typename?: 'PageLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  navMenusCollection?: Maybe<NavMenusCollection>
}

export type PageLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type PageLinkingCollectionsNavMenusCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<
    Array<InputMaybe<PageLinkingCollectionsNavMenusCollectionOrder>>
  >
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum PageLinkingCollectionsNavMenusCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum PageOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type PageSubtitle = {
  __typename?: 'PageSubtitle'
  json: Scalars['JSON']['output']
  links: PageSubtitleLinks
}

export type PageSubtitleAssets = {
  __typename?: 'PageSubtitleAssets'
  block: Array<Maybe<Asset>>
  hyperlink: Array<Maybe<Asset>>
}

export type PageSubtitleEntries = {
  __typename?: 'PageSubtitleEntries'
  block: Array<Maybe<Entry>>
  hyperlink: Array<Maybe<Entry>>
  inline: Array<Maybe<Entry>>
}

export type PageSubtitleLinks = {
  __typename?: 'PageSubtitleLinks'
  assets: PageSubtitleAssets
  entries: PageSubtitleEntries
  resources: PageSubtitleResources
}

export type PageSubtitleResources = {
  __typename?: 'PageSubtitleResources'
  block: Array<PageSubtitleResourcesBlock>
  hyperlink: Array<PageSubtitleResourcesHyperlink>
  inline: Array<PageSubtitleResourcesInline>
}

export type PageSubtitleResourcesBlock = ResourceLink & {
  __typename?: 'PageSubtitleResourcesBlock'
  sys: ResourceSys
}

export type PageSubtitleResourcesHyperlink = ResourceLink & {
  __typename?: 'PageSubtitleResourcesHyperlink'
  sys: ResourceSys
}

export type PageSubtitleResourcesInline = ResourceLink & {
  __typename?: 'PageSubtitleResourcesInline'
  sys: ResourceSys
}

export type Query = {
  __typename?: 'Query'
  _node?: Maybe<_Node>
  _nodes: Array<Maybe<_Node>>
  asset?: Maybe<Asset>
  assetCollection?: Maybe<AssetCollection>
  contactFormEntry?: Maybe<ContactFormEntry>
  contactFormEntryCollection?: Maybe<ContactFormEntryCollection>
  entryCollection?: Maybe<EntryCollection>
  faq?: Maybe<Faq>
  faqCollection?: Maybe<FaqCollection>
  link?: Maybe<Link>
  linkCollection?: Maybe<LinkCollection>
  navMenus?: Maybe<NavMenus>
  navMenusCollection?: Maybe<NavMenusCollection>
  page?: Maybe<Page>
  pageCollection?: Maybe<PageCollection>
  race?: Maybe<Race>
  raceCollection?: Maybe<RaceCollection>
  user?: Maybe<User>
  userCollection?: Maybe<UserCollection>
}

export type Query_NodeArgs = {
  id: Scalars['ID']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type Query_NodesArgs = {
  ids: Array<Scalars['ID']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAssetCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<AssetOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<AssetFilter>
}

export type QueryContactFormEntryArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryContactFormEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<ContactFormEntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<ContactFormEntryFilter>
}

export type QueryEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<EntryOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<EntryFilter>
}

export type QueryFaqArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFaqCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<FaqOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<FaqFilter>
}

export type QueryLinkArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryLinkCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<LinkOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<LinkFilter>
}

export type QueryNavMenusArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryNavMenusCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<NavMenusOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<NavMenusFilter>
}

export type QueryPageArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPageCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<PageOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<PageFilter>
}

export type QueryRaceArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryRaceCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<RaceOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<RaceFilter>
}

export type QueryUserArgs = {
  id: Scalars['String']['input']
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryUserCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<Array<InputMaybe<UserOrder>>>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
  where?: InputMaybe<UserFilter>
}

/** Individual races (years) [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/race) */
export type Race = Entry &
  _Node & {
    __typename?: 'Race'
    _id: Scalars['ID']['output']
    contentfulMetadata: ContentfulMetadata
    linkedFrom?: Maybe<RaceLinkingCollections>
    raceDate?: Maybe<Scalars['DateTime']['output']>
    slug?: Maybe<Scalars['String']['output']>
    sys: Sys
    title?: Maybe<Scalars['String']['output']>
  }

/** Individual races (years) [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/race) */
export type RaceLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** Individual races (years) [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/race) */
export type RaceRaceDateArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Individual races (years) [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/race) */
export type RaceSlugArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** Individual races (years) [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/race) */
export type RaceTitleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type RaceCollection = {
  __typename?: 'RaceCollection'
  items: Array<Maybe<Race>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type RaceFilter = {
  AND?: InputMaybe<Array<InputMaybe<RaceFilter>>>
  OR?: InputMaybe<Array<InputMaybe<RaceFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  raceDate?: InputMaybe<Scalars['DateTime']['input']>
  raceDate_exists?: InputMaybe<Scalars['Boolean']['input']>
  raceDate_gt?: InputMaybe<Scalars['DateTime']['input']>
  raceDate_gte?: InputMaybe<Scalars['DateTime']['input']>
  raceDate_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  raceDate_lt?: InputMaybe<Scalars['DateTime']['input']>
  raceDate_lte?: InputMaybe<Scalars['DateTime']['input']>
  raceDate_not?: InputMaybe<Scalars['DateTime']['input']>
  raceDate_not_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  slug?: InputMaybe<Scalars['String']['input']>
  slug_contains?: InputMaybe<Scalars['String']['input']>
  slug_exists?: InputMaybe<Scalars['Boolean']['input']>
  slug_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  slug_not?: InputMaybe<Scalars['String']['input']>
  slug_not_contains?: InputMaybe<Scalars['String']['input']>
  slug_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type RaceLinkingCollections = {
  __typename?: 'RaceLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
  navMenusCollection?: Maybe<NavMenusCollection>
}

export type RaceLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export type RaceLinkingCollectionsNavMenusCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  order?: InputMaybe<
    Array<InputMaybe<RaceLinkingCollectionsNavMenusCollectionOrder>>
  >
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum RaceLinkingCollectionsNavMenusCollectionOrder {
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export enum RaceOrder {
  RaceDateAsc = 'raceDate_ASC',
  RaceDateDesc = 'raceDate_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
}

export type ResourceLink = {
  sys: ResourceSys
}

export type ResourceSys = {
  __typename?: 'ResourceSys'
  linkType: Scalars['String']['output']
  urn: Scalars['String']['output']
}

export type Sys = {
  __typename?: 'Sys'
  environmentId: Scalars['String']['output']
  firstPublishedAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  /** The locale that was requested. */
  locale?: Maybe<Scalars['String']['output']>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  publishedVersion?: Maybe<Scalars['Int']['output']>
  spaceId: Scalars['String']['output']
}

export type SysFilter = {
  firstPublishedAt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  firstPublishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  firstPublishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  firstPublishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  id?: InputMaybe<Scalars['String']['input']>
  id_contains?: InputMaybe<Scalars['String']['input']>
  id_exists?: InputMaybe<Scalars['Boolean']['input']>
  id_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  id_not?: InputMaybe<Scalars['String']['input']>
  id_not_contains?: InputMaybe<Scalars['String']['input']>
  id_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedAt_gt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_gte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>
  publishedAt_lt?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_lte?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not?: InputMaybe<Scalars['DateTime']['input']>
  publishedAt_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['DateTime']['input']>>
  >
  publishedVersion?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_exists?: InputMaybe<Scalars['Boolean']['input']>
  publishedVersion_gt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_gte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>
  publishedVersion_lt?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_lte?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not?: InputMaybe<Scalars['Float']['input']>
  publishedVersion_not_in?: InputMaybe<
    Array<InputMaybe<Scalars['Float']['input']>>
  >
}

/**
 * Represents a taxonomy concept entity for finding and organizing content easily.
 *         Find out more here: https://www.contentful.com/developers/docs/references/content-delivery-api/#/reference/content-concepts
 */
export type TaxonomyConcept = {
  __typename?: 'TaxonomyConcept'
  id?: Maybe<Scalars['String']['output']>
}

/** User data record paired with a Clerk user. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/user) */
export type User = Entry &
  _Node & {
    __typename?: 'User'
    _id: Scalars['ID']['output']
    clerkId?: Maybe<Scalars['String']['output']>
    contentfulMetadata: ContentfulMetadata
    email?: Maybe<Scalars['String']['output']>
    linkedFrom?: Maybe<UserLinkingCollections>
    role?: Maybe<Scalars['String']['output']>
    sys: Sys
  }

/** User data record paired with a Clerk user. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/user) */
export type UserClerkIdArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** User data record paired with a Clerk user. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/user) */
export type UserEmailArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

/** User data record paired with a Clerk user. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/user) */
export type UserLinkedFromArgs = {
  allowedLocales?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

/** User data record paired with a Clerk user. [See type definition](https://app.contentful.com/spaces/rpg7h631tvxf/content_types/user) */
export type UserRoleArgs = {
  locale?: InputMaybe<Scalars['String']['input']>
}

export type UserCollection = {
  __typename?: 'UserCollection'
  items: Array<Maybe<User>>
  limit: Scalars['Int']['output']
  skip: Scalars['Int']['output']
  total: Scalars['Int']['output']
}

export type UserFilter = {
  AND?: InputMaybe<Array<InputMaybe<UserFilter>>>
  OR?: InputMaybe<Array<InputMaybe<UserFilter>>>
  clerkId?: InputMaybe<Scalars['String']['input']>
  clerkId_contains?: InputMaybe<Scalars['String']['input']>
  clerkId_exists?: InputMaybe<Scalars['Boolean']['input']>
  clerkId_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  clerkId_not?: InputMaybe<Scalars['String']['input']>
  clerkId_not_contains?: InputMaybe<Scalars['String']['input']>
  clerkId_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  email?: InputMaybe<Scalars['String']['input']>
  email_contains?: InputMaybe<Scalars['String']['input']>
  email_exists?: InputMaybe<Scalars['Boolean']['input']>
  email_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  email_not?: InputMaybe<Scalars['String']['input']>
  email_not_contains?: InputMaybe<Scalars['String']['input']>
  email_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  role?: InputMaybe<Scalars['String']['input']>
  role_contains?: InputMaybe<Scalars['String']['input']>
  role_exists?: InputMaybe<Scalars['Boolean']['input']>
  role_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  role_not?: InputMaybe<Scalars['String']['input']>
  role_not_contains?: InputMaybe<Scalars['String']['input']>
  role_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  sys?: InputMaybe<SysFilter>
}

export type UserLinkingCollections = {
  __typename?: 'UserLinkingCollections'
  entryCollection?: Maybe<EntryCollection>
}

export type UserLinkingCollectionsEntryCollectionArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<Scalars['String']['input']>
  preview?: InputMaybe<Scalars['Boolean']['input']>
  skip?: InputMaybe<Scalars['Int']['input']>
}

export enum UserOrder {
  ClerkIdAsc = 'clerkId_ASC',
  ClerkIdDesc = 'clerkId_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC',
  RoleAsc = 'role_ASC',
  RoleDesc = 'role_DESC',
  SysFirstPublishedAtAsc = 'sys_firstPublishedAt_ASC',
  SysFirstPublishedAtDesc = 'sys_firstPublishedAt_DESC',
  SysIdAsc = 'sys_id_ASC',
  SysIdDesc = 'sys_id_DESC',
  SysPublishedAtAsc = 'sys_publishedAt_ASC',
  SysPublishedAtDesc = 'sys_publishedAt_DESC',
  SysPublishedVersionAsc = 'sys_publishedVersion_ASC',
  SysPublishedVersionDesc = 'sys_publishedVersion_DESC',
}

export type _Node = {
  _id: Scalars['ID']['output']
}

export type CfFaqNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CfFaqNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CfFaqNestedFilter>>>
  content_contains?: InputMaybe<Scalars['String']['input']>
  content_exists?: InputMaybe<Scalars['Boolean']['input']>
  content_not_contains?: InputMaybe<Scalars['String']['input']>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
  title?: InputMaybe<Scalars['String']['input']>
  title_contains?: InputMaybe<Scalars['String']['input']>
  title_exists?: InputMaybe<Scalars['Boolean']['input']>
  title_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  title_not?: InputMaybe<Scalars['String']['input']>
  title_not_contains?: InputMaybe<Scalars['String']['input']>
  title_not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type CflinksMultiTypeNestedFilter = {
  AND?: InputMaybe<Array<InputMaybe<CflinksMultiTypeNestedFilter>>>
  OR?: InputMaybe<Array<InputMaybe<CflinksMultiTypeNestedFilter>>>
  contentfulMetadata?: InputMaybe<ContentfulMetadataFilter>
  sys?: InputMaybe<SysFilter>
}

export type FaqsQueryVariables = Exact<{ [key: string]: never }>

export type FaqsQuery = {
  __typename?: 'Query'
  faqCollection?: {
    __typename?: 'FaqCollection'
    items: Array<{
      __typename?: 'Faq'
      _id: string
      title?: string | null
      content?: { __typename: 'FaqContent'; json: any } | null
    } | null>
  } | null
}

export type PageFragmentFragment = {
  __typename: 'Page'
  _id: string
  title?: string | null
  slug?: string | null
  content?: { __typename: 'PageContent'; json: any } | null
  subtitle?: { __typename: 'PageSubtitle'; json: any } | null
  faqsCollection?: {
    __typename?: 'PageFaqsCollection'
    items: Array<{
      __typename: 'Faq'
      _id: string
      title?: string | null
      content?: { __typename: 'FaqContent'; json: any } | null
    } | null>
  } | null
} & { ' $fragmentName'?: 'PageFragmentFragment' }

export type GetPageBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input']
}>

export type GetPageBySlugQuery = {
  __typename?: 'Query'
  pageCollection?: {
    __typename?: 'PageCollection'
    items: Array<
      | ({ __typename?: 'Page' } & {
          ' $fragmentRefs'?: { PageFragmentFragment: PageFragmentFragment }
        })
      | null
    >
  } | null
}

export type GetUserByClerkIdQueryVariables = Exact<{
  clerkId?: InputMaybe<Scalars['String']['input']>
}>

export type GetUserByClerkIdQuery = {
  __typename?: 'Query'
  userCollection?: {
    __typename?: 'UserCollection'
    items: Array<{
      __typename?: 'User'
      _id: string
      email?: string | null
      role?: string | null
      clerkId?: string | null
    } | null>
  } | null
}

export type PageCollectionQueryQueryVariables = Exact<{ [key: string]: never }>

export type PageCollectionQueryQuery = {
  __typename?: 'Query'
  pageCollection?: {
    __typename?: 'PageCollection'
    items: Array<
      | ({ __typename?: 'Page' } & {
          ' $fragmentRefs'?: { PageFragmentFragment: PageFragmentFragment }
        })
      | null
    >
  } | null
}

export const PageFragmentFragmentDoc = {
  kind: 'Document',
  definitions: [
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Page' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'json' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitle' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'json' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'faqsCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'json' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PageFragmentFragment, unknown>
export const FaqsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Faqs' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'faqCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '50' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'json' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<FaqsQuery, FaqsQueryVariables>
export const GetPageBySlugDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPageBySlug' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'slug' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'slug' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'slug' },
                      },
                    },
                  ],
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PageFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Page' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'json' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitle' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'json' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'faqsCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'json' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetPageBySlugQuery, GetPageBySlugQueryVariables>
export const GetUserByClerkIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetUserByClerkId' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'clerkId' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'userCollection' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '1' },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'ObjectValue',
                  fields: [
                    {
                      kind: 'ObjectField',
                      name: { kind: 'Name', value: 'clerkId' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'clerkId' },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'email' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'role' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'clerkId' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserByClerkIdQuery,
  GetUserByClerkIdQueryVariables
>
export const PageCollectionQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'pageCollectionQuery' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pageCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'FragmentSpread',
                        name: { kind: 'Name', value: 'PageFragment' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: 'FragmentDefinition',
      name: { kind: 'Name', value: 'PageFragment' },
      typeCondition: {
        kind: 'NamedType',
        name: { kind: 'Name', value: 'Page' },
      },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
          { kind: 'Field', name: { kind: 'Name', value: '_id' } },
          { kind: 'Field', name: { kind: 'Name', value: 'title' } },
          { kind: 'Field', name: { kind: 'Name', value: 'slug' } },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'content' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'json' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'subtitle' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'json' } },
                { kind: 'Field', name: { kind: 'Name', value: '__typename' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'faqsCollection' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'items' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: '__typename' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: '_id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'title' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'content' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'json' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: '__typename' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  PageCollectionQueryQuery,
  PageCollectionQueryQueryVariables
>
