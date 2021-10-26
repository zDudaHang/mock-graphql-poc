import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Library = {
  __typename?: 'Library';
  address: Scalars['String'];
  books?: Maybe<Array<Maybe<Book>>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Maybe<Author>>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Maybe<Book>>>;
  libraries?: Maybe<Array<Maybe<Library>>>;
  library?: Maybe<Library>;
};

export type LibrariesQueryVariables = Exact<{ [key: string]: never; }>;


export type LibrariesQuery = { __typename?: 'Query', libraries?: Array<{ __typename?: 'Library', id: string, name: string, address: string, books?: Array<{ __typename?: 'Book', id: string, title: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined };


export const LibrariesDocument = gql`
    query Libraries {
  libraries {
    id
    name
    address
    books {
      id
      title
    }
  }
}
    `;

/**
 * __useLibrariesQuery__
 *
 * To run a query within a React component, call `useLibrariesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLibrariesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLibrariesQuery({
 *   variables: {
 *   },
 * });
 */
export function useLibrariesQuery(baseOptions?: Apollo.QueryHookOptions<LibrariesQuery, LibrariesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LibrariesQuery, LibrariesQueryVariables>(LibrariesDocument, options);
      }
export function useLibrariesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LibrariesQuery, LibrariesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LibrariesQuery, LibrariesQueryVariables>(LibrariesDocument, options);
        }
export type LibrariesQueryHookResult = ReturnType<typeof useLibrariesQuery>;
export type LibrariesLazyQueryHookResult = ReturnType<typeof useLibrariesLazyQuery>;
export type LibrariesQueryResult = Apollo.QueryResult<LibrariesQuery, LibrariesQueryVariables>;