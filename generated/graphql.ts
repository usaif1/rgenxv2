/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** A high precision floating point value represented as a string */
  BigFloat: { input: any; output: any; }
  /** An arbitrary size integer represented as a string */
  BigInt: { input: any; output: any; }
  /** An opaque string using for tracking a position in results during pagination */
  Cursor: { input: any; output: any; }
  /** A date without time information */
  Date: { input: any; output: any; }
  /** A date and time */
  Datetime: { input: any; output: any; }
  /** A Javascript Object Notation value serialized as a string */
  JSON: { input: any; output: any; }
  /** Any type not handled by the type system */
  Opaque: { input: any; output: any; }
  /** A time without date information */
  Time: { input: any; output: any; }
  /** A universally unique identifier */
  UUID: { input: any; output: any; }
};

/** Boolean expression comparing fields on type "BigFloat" */
export type BigFloatFilter = {
  eq?: InputMaybe<Scalars['BigFloat']['input']>;
  gt?: InputMaybe<Scalars['BigFloat']['input']>;
  gte?: InputMaybe<Scalars['BigFloat']['input']>;
  in?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigFloat']['input']>;
  lte?: InputMaybe<Scalars['BigFloat']['input']>;
  neq?: InputMaybe<Scalars['BigFloat']['input']>;
};

/** Boolean expression comparing fields on type "BigFloatList" */
export type BigFloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigFloat']['input']>>;
};

/** Boolean expression comparing fields on type "BigInt" */
export type BigIntFilter = {
  eq?: InputMaybe<Scalars['BigInt']['input']>;
  gt?: InputMaybe<Scalars['BigInt']['input']>;
  gte?: InputMaybe<Scalars['BigInt']['input']>;
  in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['BigInt']['input']>;
  lte?: InputMaybe<Scalars['BigInt']['input']>;
  neq?: InputMaybe<Scalars['BigInt']['input']>;
};

/** Boolean expression comparing fields on type "BigIntList" */
export type BigIntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  contains?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  eq?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

/** Boolean expression comparing fields on type "Boolean" */
export type BooleanFilter = {
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Boolean expression comparing fields on type "BooleanList" */
export type BooleanListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  contains?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  eq?: InputMaybe<Array<Scalars['Boolean']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Boolean']['input']>>;
};

/** Boolean expression comparing fields on type "Date" */
export type DateFilter = {
  eq?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  neq?: InputMaybe<Scalars['Date']['input']>;
};

/** Boolean expression comparing fields on type "DateList" */
export type DateListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Date']['input']>>;
  contains?: InputMaybe<Array<Scalars['Date']['input']>>;
  eq?: InputMaybe<Array<Scalars['Date']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Date']['input']>>;
};

/** Boolean expression comparing fields on type "Datetime" */
export type DatetimeFilter = {
  eq?: InputMaybe<Scalars['Datetime']['input']>;
  gt?: InputMaybe<Scalars['Datetime']['input']>;
  gte?: InputMaybe<Scalars['Datetime']['input']>;
  in?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Datetime']['input']>;
  lte?: InputMaybe<Scalars['Datetime']['input']>;
  neq?: InputMaybe<Scalars['Datetime']['input']>;
};

/** Boolean expression comparing fields on type "DatetimeList" */
export type DatetimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  contains?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  eq?: InputMaybe<Array<Scalars['Datetime']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Datetime']['input']>>;
};

export enum FilterIs {
  NotNull = 'NOT_NULL',
  Null = 'NULL'
}

/** Boolean expression comparing fields on type "Float" */
export type FloatFilter = {
  eq?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  neq?: InputMaybe<Scalars['Float']['input']>;
};

/** Boolean expression comparing fields on type "FloatList" */
export type FloatListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Float']['input']>>;
  contains?: InputMaybe<Array<Scalars['Float']['input']>>;
  eq?: InputMaybe<Array<Scalars['Float']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Float']['input']>>;
};

/** Boolean expression comparing fields on type "ID" */
export type IdFilter = {
  eq?: InputMaybe<Scalars['ID']['input']>;
};

/** Boolean expression comparing fields on type "Int" */
export type IntFilter = {
  eq?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  neq?: InputMaybe<Scalars['Int']['input']>;
};

/** Boolean expression comparing fields on type "IntList" */
export type IntListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Int']['input']>>;
  contains?: InputMaybe<Array<Scalars['Int']['input']>>;
  eq?: InputMaybe<Array<Scalars['Int']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** The root type for creating and mutating data */
export type Mutation = {
  __typename?: 'Mutation';
  /** Deletes zero or more records from the `doctors` collection */
  deleteFromdoctorsCollection: DoctorsDeleteResponse;
  /** Deletes zero or more records from the `family_history` collection */
  deleteFromfamily_historyCollection: Family_HistoryDeleteResponse;
  /** Deletes zero or more records from the `patients` collection */
  deleteFrompatientsCollection: PatientsDeleteResponse;
  /** Adds one or more `doctors` records to the collection */
  insertIntodoctorsCollection?: Maybe<DoctorsInsertResponse>;
  /** Adds one or more `family_history` records to the collection */
  insertIntofamily_historyCollection?: Maybe<Family_HistoryInsertResponse>;
  /** Adds one or more `patients` records to the collection */
  insertIntopatientsCollection?: Maybe<PatientsInsertResponse>;
  /** Updates zero or more records in the `doctors` collection */
  updatedoctorsCollection: DoctorsUpdateResponse;
  /** Updates zero or more records in the `family_history` collection */
  updatefamily_historyCollection: Family_HistoryUpdateResponse;
  /** Updates zero or more records in the `patients` collection */
  updatepatientsCollection: PatientsUpdateResponse;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromdoctorsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DoctorsFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFromfamily_HistoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Family_HistoryFilter>;
};


/** The root type for creating and mutating data */
export type MutationDeleteFrompatientsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PatientsFilter>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntodoctorsCollectionArgs = {
  objects: Array<DoctorsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntofamily_HistoryCollectionArgs = {
  objects: Array<Family_HistoryInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationInsertIntopatientsCollectionArgs = {
  objects: Array<PatientsInsertInput>;
};


/** The root type for creating and mutating data */
export type MutationUpdatedoctorsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<DoctorsFilter>;
  set: DoctorsUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatefamily_HistoryCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<Family_HistoryFilter>;
  set: Family_HistoryUpdateInput;
};


/** The root type for creating and mutating data */
export type MutationUpdatepatientsCollectionArgs = {
  atMost?: Scalars['Int']['input'];
  filter?: InputMaybe<PatientsFilter>;
  set: PatientsUpdateInput;
};

export type Node = {
  /** Retrieves a record by `ID` */
  nodeId: Scalars['ID']['output'];
};

/** Boolean expression comparing fields on type "Opaque" */
export type OpaqueFilter = {
  eq?: InputMaybe<Scalars['Opaque']['input']>;
  is?: InputMaybe<FilterIs>;
};

/** Defines a per-field sorting order */
export enum OrderByDirection {
  /** Ascending order, nulls first */
  AscNullsFirst = 'AscNullsFirst',
  /** Ascending order, nulls last */
  AscNullsLast = 'AscNullsLast',
  /** Descending order, nulls first */
  DescNullsFirst = 'DescNullsFirst',
  /** Descending order, nulls last */
  DescNullsLast = 'DescNullsLast'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

/** The root type for querying data */
export type Query = {
  __typename?: 'Query';
  /** A pagable collection of type `doctors` */
  doctorsCollection?: Maybe<DoctorsConnection>;
  /** A pagable collection of type `family_history` */
  family_historyCollection?: Maybe<Family_HistoryConnection>;
  /** Retrieve a record by its `ID` */
  node?: Maybe<Node>;
  /** A pagable collection of type `patients` */
  patientsCollection?: Maybe<PatientsConnection>;
};


/** The root type for querying data */
export type QueryDoctorsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<DoctorsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<DoctorsOrderBy>>;
};


/** The root type for querying data */
export type QueryFamily_HistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Family_HistoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Family_HistoryOrderBy>>;
};


/** The root type for querying data */
export type QueryNodeArgs = {
  nodeId: Scalars['ID']['input'];
};


/** The root type for querying data */
export type QueryPatientsCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<PatientsFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PatientsOrderBy>>;
};

/** Boolean expression comparing fields on type "String" */
export type StringFilter = {
  eq?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  ilike?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  iregex?: InputMaybe<Scalars['String']['input']>;
  is?: InputMaybe<FilterIs>;
  like?: InputMaybe<Scalars['String']['input']>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  neq?: InputMaybe<Scalars['String']['input']>;
  regex?: InputMaybe<Scalars['String']['input']>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

/** Boolean expression comparing fields on type "StringList" */
export type StringListFilter = {
  containedBy?: InputMaybe<Array<Scalars['String']['input']>>;
  contains?: InputMaybe<Array<Scalars['String']['input']>>;
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Boolean expression comparing fields on type "Time" */
export type TimeFilter = {
  eq?: InputMaybe<Scalars['Time']['input']>;
  gt?: InputMaybe<Scalars['Time']['input']>;
  gte?: InputMaybe<Scalars['Time']['input']>;
  in?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  lt?: InputMaybe<Scalars['Time']['input']>;
  lte?: InputMaybe<Scalars['Time']['input']>;
  neq?: InputMaybe<Scalars['Time']['input']>;
};

/** Boolean expression comparing fields on type "TimeList" */
export type TimeListFilter = {
  containedBy?: InputMaybe<Array<Scalars['Time']['input']>>;
  contains?: InputMaybe<Array<Scalars['Time']['input']>>;
  eq?: InputMaybe<Array<Scalars['Time']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['Time']['input']>>;
};

/** Boolean expression comparing fields on type "UUID" */
export type UuidFilter = {
  eq?: InputMaybe<Scalars['UUID']['input']>;
  in?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  neq?: InputMaybe<Scalars['UUID']['input']>;
};

/** Boolean expression comparing fields on type "UUIDList" */
export type UuidListFilter = {
  containedBy?: InputMaybe<Array<Scalars['UUID']['input']>>;
  contains?: InputMaybe<Array<Scalars['UUID']['input']>>;
  eq?: InputMaybe<Array<Scalars['UUID']['input']>>;
  is?: InputMaybe<FilterIs>;
  overlaps?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type Doctors = Node & {
  __typename?: 'doctors';
  created_at: Scalars['Datetime']['output'];
  email_id?: Maybe<Scalars['String']['output']>;
  first_name?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  password_hash?: Maybe<Scalars['String']['output']>;
};

export type DoctorsConnection = {
  __typename?: 'doctorsConnection';
  edges: Array<DoctorsEdge>;
  pageInfo: PageInfo;
};

export type DoctorsDeleteResponse = {
  __typename?: 'doctorsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Doctors>;
};

export type DoctorsEdge = {
  __typename?: 'doctorsEdge';
  cursor: Scalars['String']['output'];
  node: Doctors;
};

export type DoctorsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<DoctorsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  email_id?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  id?: InputMaybe<UuidFilter>;
  last_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<DoctorsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<DoctorsFilter>>;
  password_hash?: InputMaybe<StringFilter>;
};

export type DoctorsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email_id?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorsInsertResponse = {
  __typename?: 'doctorsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Doctors>;
};

export type DoctorsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  email_id?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  password_hash?: InputMaybe<OrderByDirection>;
};

export type DoctorsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  email_id?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  password_hash?: InputMaybe<Scalars['String']['input']>;
};

export type DoctorsUpdateResponse = {
  __typename?: 'doctorsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Doctors>;
};

export type Family_History = Node & {
  __typename?: 'family_history';
  created_at: Scalars['Datetime']['output'];
  father_age?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  is_father_disease?: Maybe<Scalars['Boolean']['output']>;
  is_mother_disease?: Maybe<Scalars['Boolean']['output']>;
  misc_info?: Maybe<Scalars['String']['output']>;
  mother_age?: Maybe<Scalars['BigFloat']['output']>;
  mother_age_conception?: Maybe<Scalars['BigFloat']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  patient_birth_weight?: Maybe<Scalars['BigFloat']['output']>;
  patient_id?: Maybe<Scalars['UUID']['output']>;
  patients?: Maybe<Patients>;
  week_of_complete_gestation?: Maybe<Scalars['BigFloat']['output']>;
};

export type Family_HistoryConnection = {
  __typename?: 'family_historyConnection';
  edges: Array<Family_HistoryEdge>;
  pageInfo: PageInfo;
};

export type Family_HistoryDeleteResponse = {
  __typename?: 'family_historyDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Family_History>;
};

export type Family_HistoryEdge = {
  __typename?: 'family_historyEdge';
  cursor: Scalars['String']['output'];
  node: Family_History;
};

export type Family_HistoryFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<Family_HistoryFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  father_age?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  is_father_disease?: InputMaybe<BooleanFilter>;
  is_mother_disease?: InputMaybe<BooleanFilter>;
  misc_info?: InputMaybe<StringFilter>;
  mother_age?: InputMaybe<BigFloatFilter>;
  mother_age_conception?: InputMaybe<BigFloatFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<Family_HistoryFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<Family_HistoryFilter>>;
  patient_birth_weight?: InputMaybe<BigFloatFilter>;
  patient_id?: InputMaybe<UuidFilter>;
  week_of_complete_gestation?: InputMaybe<BigFloatFilter>;
};

export type Family_HistoryInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  father_age?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_father_disease?: InputMaybe<Scalars['Boolean']['input']>;
  is_mother_disease?: InputMaybe<Scalars['Boolean']['input']>;
  misc_info?: InputMaybe<Scalars['String']['input']>;
  mother_age?: InputMaybe<Scalars['BigFloat']['input']>;
  mother_age_conception?: InputMaybe<Scalars['BigFloat']['input']>;
  patient_birth_weight?: InputMaybe<Scalars['BigFloat']['input']>;
  patient_id?: InputMaybe<Scalars['UUID']['input']>;
  week_of_complete_gestation?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Family_HistoryInsertResponse = {
  __typename?: 'family_historyInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Family_History>;
};

export type Family_HistoryOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  father_age?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  is_father_disease?: InputMaybe<OrderByDirection>;
  is_mother_disease?: InputMaybe<OrderByDirection>;
  misc_info?: InputMaybe<OrderByDirection>;
  mother_age?: InputMaybe<OrderByDirection>;
  mother_age_conception?: InputMaybe<OrderByDirection>;
  patient_birth_weight?: InputMaybe<OrderByDirection>;
  patient_id?: InputMaybe<OrderByDirection>;
  week_of_complete_gestation?: InputMaybe<OrderByDirection>;
};

export type Family_HistoryUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  father_age?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  is_father_disease?: InputMaybe<Scalars['Boolean']['input']>;
  is_mother_disease?: InputMaybe<Scalars['Boolean']['input']>;
  misc_info?: InputMaybe<Scalars['String']['input']>;
  mother_age?: InputMaybe<Scalars['BigFloat']['input']>;
  mother_age_conception?: InputMaybe<Scalars['BigFloat']['input']>;
  patient_birth_weight?: InputMaybe<Scalars['BigFloat']['input']>;
  patient_id?: InputMaybe<Scalars['UUID']['input']>;
  week_of_complete_gestation?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type Family_HistoryUpdateResponse = {
  __typename?: 'family_historyUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Family_History>;
};

export type Patients = Node & {
  __typename?: 'patients';
  created_at: Scalars['Datetime']['output'];
  dob?: Maybe<Scalars['Date']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  family_historyCollection?: Maybe<Family_HistoryConnection>;
  first_name?: Maybe<Scalars['String']['output']>;
  gender?: Maybe<Scalars['String']['output']>;
  height?: Maybe<Scalars['BigFloat']['output']>;
  id: Scalars['UUID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  /** Globally Unique Record Identifier */
  nodeId: Scalars['ID']['output'];
  phone_number?: Maybe<Scalars['String']['output']>;
  sample_collection_date?: Maybe<Scalars['Date']['output']>;
  sample_receive_date?: Maybe<Scalars['Date']['output']>;
  weight?: Maybe<Scalars['BigFloat']['output']>;
};


export type PatientsFamily_HistoryCollectionArgs = {
  after?: InputMaybe<Scalars['Cursor']['input']>;
  before?: InputMaybe<Scalars['Cursor']['input']>;
  filter?: InputMaybe<Family_HistoryFilter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<Family_HistoryOrderBy>>;
};

export type PatientsConnection = {
  __typename?: 'patientsConnection';
  edges: Array<PatientsEdge>;
  pageInfo: PageInfo;
};

export type PatientsDeleteResponse = {
  __typename?: 'patientsDeleteResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Patients>;
};

export type PatientsEdge = {
  __typename?: 'patientsEdge';
  cursor: Scalars['String']['output'];
  node: Patients;
};

export type PatientsFilter = {
  /** Returns true only if all its inner filters are true, otherwise returns false */
  and?: InputMaybe<Array<PatientsFilter>>;
  created_at?: InputMaybe<DatetimeFilter>;
  dob?: InputMaybe<DateFilter>;
  email?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  height?: InputMaybe<BigFloatFilter>;
  id?: InputMaybe<UuidFilter>;
  last_name?: InputMaybe<StringFilter>;
  nodeId?: InputMaybe<IdFilter>;
  /** Negates a filter */
  not?: InputMaybe<PatientsFilter>;
  /** Returns true if at least one of its inner filters is true, otherwise returns false */
  or?: InputMaybe<Array<PatientsFilter>>;
  phone_number?: InputMaybe<StringFilter>;
  sample_collection_date?: InputMaybe<DateFilter>;
  sample_receive_date?: InputMaybe<DateFilter>;
  weight?: InputMaybe<BigFloatFilter>;
};

export type PatientsInsertInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  sample_collection_date?: InputMaybe<Scalars['Date']['input']>;
  sample_receive_date?: InputMaybe<Scalars['Date']['input']>;
  weight?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type PatientsInsertResponse = {
  __typename?: 'patientsInsertResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Patients>;
};

export type PatientsOrderBy = {
  created_at?: InputMaybe<OrderByDirection>;
  dob?: InputMaybe<OrderByDirection>;
  email?: InputMaybe<OrderByDirection>;
  first_name?: InputMaybe<OrderByDirection>;
  gender?: InputMaybe<OrderByDirection>;
  height?: InputMaybe<OrderByDirection>;
  id?: InputMaybe<OrderByDirection>;
  last_name?: InputMaybe<OrderByDirection>;
  phone_number?: InputMaybe<OrderByDirection>;
  sample_collection_date?: InputMaybe<OrderByDirection>;
  sample_receive_date?: InputMaybe<OrderByDirection>;
  weight?: InputMaybe<OrderByDirection>;
};

export type PatientsUpdateInput = {
  created_at?: InputMaybe<Scalars['Datetime']['input']>;
  dob?: InputMaybe<Scalars['Date']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['BigFloat']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  phone_number?: InputMaybe<Scalars['String']['input']>;
  sample_collection_date?: InputMaybe<Scalars['Date']['input']>;
  sample_receive_date?: InputMaybe<Scalars['Date']['input']>;
  weight?: InputMaybe<Scalars['BigFloat']['input']>;
};

export type PatientsUpdateResponse = {
  __typename?: 'patientsUpdateResponse';
  /** Count of the records impacted by the mutation */
  affectedCount: Scalars['Int']['output'];
  /** Array of records impacted by the mutation */
  records: Array<Patients>;
};

export type FetchAllPatientsQueryVariables = Exact<{ [key: string]: never; }>;


export type FetchAllPatientsQuery = { __typename?: 'Query', patientsCollection?: { __typename?: 'patientsConnection', edges: Array<{ __typename?: 'patientsEdge', node: { __typename?: 'patients', first_name?: string | null, last_name?: string | null, dob?: any | null, gender?: string | null, height?: any | null, weight?: any | null, id: any, email?: string | null, phone_number?: string | null } }> } | null };


export const FetchAllPatientsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchAllPatients"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"patientsCollection"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"first_name"}},{"kind":"Field","name":{"kind":"Name","value":"last_name"}},{"kind":"Field","name":{"kind":"Name","value":"dob"}},{"kind":"Field","name":{"kind":"Name","value":"gender"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"weight"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone_number"}}]}}]}}]}}]}}]} as unknown as DocumentNode<FetchAllPatientsQuery, FetchAllPatientsQueryVariables>;