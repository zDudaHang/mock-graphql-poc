const { ApolloServer } = require("apollo-server");
const casual = require("casual")

// Pegando o schema que foi definido
const typeDefs = require("./schema");

// Mockando alguns valores pelo tipo
const mocks = {  
  ID: () => casual.uuid,
  String: () => casual.text,
  Author: () => {
    return { name: () => casual.name }
  }
};

// Criando um resolver para a query library
const resolvers = {
    Query: {
        library() {
          return { books: [{ title: 'Livro#1'}, {title: 'Livro#2'}]};
        },
      },
}

const server = new ApolloServer({
    typeDefs,
    mocks,
    resolvers,
    mockEntireSchema: false // Evita que os mocks padroes sobreescrevam os resolvers que foram criados
});

  
server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});
  