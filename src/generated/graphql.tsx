import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "profiles" */
  delete_profiles?: Maybe<Profiles_Mutation_Response>;
  /** delete single row from the table: "profiles" */
  delete_profiles_by_pk?: Maybe<Profiles>;
  /** insert data into the table: "profiles" */
  insert_profiles?: Maybe<Profiles_Mutation_Response>;
  /** insert a single row into the table: "profiles" */
  insert_profiles_one?: Maybe<Profiles>;
  /** update data of the table: "profiles" */
  update_profiles?: Maybe<Profiles_Mutation_Response>;
  /** update single row of the table: "profiles" */
  update_profiles_by_pk?: Maybe<Profiles>;
  /** update multiples rows of table: "profiles" */
  update_profiles_many?: Maybe<Array<Maybe<Profiles_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_ProfilesArgs = {
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Profiles_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_ProfilesArgs = {
  objects: Array<Profiles_Insert_Input>;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Profiles_OneArgs = {
  object: Profiles_Insert_Input;
  on_conflict?: InputMaybe<Profiles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_ProfilesArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_By_PkArgs = {
  _inc?: InputMaybe<Profiles_Inc_Input>;
  _set?: InputMaybe<Profiles_Set_Input>;
  pk_columns: Profiles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Profiles_ManyArgs = {
  updates: Array<Profiles_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "profiles" */
export type Profiles = {
  __typename?: 'profiles';
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "profiles" */
export type Profiles_Aggregate = {
  __typename?: 'profiles_aggregate';
  aggregate?: Maybe<Profiles_Aggregate_Fields>;
  nodes: Array<Profiles>;
};

/** aggregate fields of "profiles" */
export type Profiles_Aggregate_Fields = {
  __typename?: 'profiles_aggregate_fields';
  avg?: Maybe<Profiles_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Profiles_Max_Fields>;
  min?: Maybe<Profiles_Min_Fields>;
  stddev?: Maybe<Profiles_Stddev_Fields>;
  stddev_pop?: Maybe<Profiles_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Profiles_Stddev_Samp_Fields>;
  sum?: Maybe<Profiles_Sum_Fields>;
  var_pop?: Maybe<Profiles_Var_Pop_Fields>;
  var_samp?: Maybe<Profiles_Var_Samp_Fields>;
  variance?: Maybe<Profiles_Variance_Fields>;
};


/** aggregate fields of "profiles" */
export type Profiles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Profiles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Profiles_Avg_Fields = {
  __typename?: 'profiles_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "profiles". All fields are combined with a logical 'AND'. */
export type Profiles_Bool_Exp = {
  _and?: InputMaybe<Array<Profiles_Bool_Exp>>;
  _not?: InputMaybe<Profiles_Bool_Exp>;
  _or?: InputMaybe<Array<Profiles_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "profiles" */
export enum Profiles_Constraint {
  /** unique or primary key constraint on columns "id" */
  ProfilesPkey = 'profiles_pkey'
}

/** input type for incrementing numeric columns in table "profiles" */
export type Profiles_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "profiles" */
export type Profiles_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Profiles_Max_Fields = {
  __typename?: 'profiles_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Profiles_Min_Fields = {
  __typename?: 'profiles_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "profiles" */
export type Profiles_Mutation_Response = {
  __typename?: 'profiles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Profiles>;
};

/** on_conflict condition type for table "profiles" */
export type Profiles_On_Conflict = {
  constraint: Profiles_Constraint;
  update_columns?: Array<Profiles_Update_Column>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

/** Ordering options when selecting data from "profiles". */
export type Profiles_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: profiles */
export type Profiles_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "profiles" */
export enum Profiles_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "profiles" */
export type Profiles_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Profiles_Stddev_Fields = {
  __typename?: 'profiles_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Profiles_Stddev_Pop_Fields = {
  __typename?: 'profiles_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Profiles_Stddev_Samp_Fields = {
  __typename?: 'profiles_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Streaming cursor of the table "profiles" */
export type Profiles_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Profiles_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Profiles_Stream_Cursor_Value_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate sum on columns */
export type Profiles_Sum_Fields = {
  __typename?: 'profiles_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "profiles" */
export enum Profiles_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

export type Profiles_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Profiles_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Profiles_Set_Input>;
  where: Profiles_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Profiles_Var_Pop_Fields = {
  __typename?: 'profiles_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Profiles_Var_Samp_Fields = {
  __typename?: 'profiles_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Profiles_Variance_Fields = {
  __typename?: 'profiles_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
};


export type Query_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Query_RootProfiles_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "profiles" */
  profiles: Array<Profiles>;
  /** fetch aggregated fields from the table: "profiles" */
  profiles_aggregate: Profiles_Aggregate;
  /** fetch data from the table: "profiles" using primary key columns */
  profiles_by_pk?: Maybe<Profiles>;
  /** fetch data from the table in a streaming manner: "profiles" */
  profiles_stream: Array<Profiles>;
};


export type Subscription_RootProfilesArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Profiles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Profiles_Order_By>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};


export type Subscription_RootProfiles_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootProfiles_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Profiles_Stream_Cursor_Input>>;
  where?: InputMaybe<Profiles_Bool_Exp>;
};

export type MyQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type MyQueryQuery = { __typename?: 'query_root', profiles: Array<{ __typename?: 'profiles', id: number, name: string }> };


export const MyQueryDocument = gql`
    query MyQuery {
  profiles {
    id
    name
  }
}
    `;

/**
 * __useMyQueryQuery__
 *
 * To run a query within a React component, call `useMyQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyQueryQuery(baseOptions?: Apollo.QueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
      }
export function useMyQueryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MyQueryQuery, MyQueryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MyQueryQuery, MyQueryQueryVariables>(MyQueryDocument, options);
        }
export type MyQueryQueryHookResult = ReturnType<typeof useMyQueryQuery>;
export type MyQueryLazyQueryHookResult = ReturnType<typeof useMyQueryLazyQuery>;
export type MyQueryQueryResult = Apollo.QueryResult<MyQueryQuery, MyQueryQueryVariables>;