const { gql } = require("apollo-server");

module.exports = gql`
    type Library {
      id: ID!
      name: String!
      address: String!
      books: [Book!]
    }

    type Book {
      id: ID!
      title: String!
      author: Author!
    }

    type Author {
      id: ID!
      name: String!
    }

    type Query {
        libraries: [Library]
        library: Library

        authors: [Author]
        author: Author

        books: [Book]
        book: Book
    }
`;
