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
  books?: Maybe<Array<Book>>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<Author>;
  authors?: Maybe<Array<Author>>;
  book?: Maybe<Book>;
  books?: Maybe<Array<Book>>;
  libraries?: Maybe<Array<Library>>;
  library?: Maybe<Library>;
};

export type LibraryQueryVariables = Exact<{ [key: string]: never; }>;


export type LibraryQuery = { __typename?: 'Query', library?: { __typename?: 'Library', id: string, name: string, address: string, books?: Array<{ __typename?: 'Book', id: string, title: string, author: { __typename?: 'Author', id: string, name: string } }> | null | undefined } | null | undefined };


export const LibraryDocument = gql`
    query Library {
  library {
    id
    name
    address
    books {
      id
      title
      author {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useLibraryQuery__
 *
 * To run a query within a React component, call `useLibraryQuery` and pass it any options that fit your needs.
 * When your component renders, `useLibraryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLibraryQuery({
 *   variables: {
 *   },
 * });
 */
export function useLibraryQuery(baseOptions?: Apollo.QueryHookOptions<LibraryQuery, LibraryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LibraryQuery, LibraryQueryVariables>(LibraryDocument, options);
      }
export function useLibraryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LibraryQuery, LibraryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LibraryQuery, LibraryQueryVariables>(LibraryDocument, options);
        }
export type LibraryQueryHookResult = ReturnType<typeof useLibraryQuery>;
export type LibraryLazyQueryHookResult = ReturnType<typeof useLibraryLazyQuery>;
export type LibraryQueryResult = Apollo.QueryResult<LibraryQuery, LibraryQueryVariables>;