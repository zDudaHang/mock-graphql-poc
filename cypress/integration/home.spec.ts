import { Selector } from "./zeus";

describe("Home", () => {
  beforeEach(() => {
    cy.readFile("./src/graphql/introspection.generated.json").then((schema) => {
      cy.mockNetwork({ schema }); // dah para adicionar mocks para os escalares e para os tipos ;)
    });
    cy.visit("http://localhost:3000");
  });

  it("deve mostrar o texto 'Nenhum dado encontrado'", () => {
    cy.mockNetworkAdd({
      Query: () => ({
        library: () => ({}),
      }),
    });
    cy.visit("http://localhost:3000");
    cy.contains("Nenhum dado encontrado");
  });

  it("deve mostrar os dados da biblioteca corretamente se nao houverem livros", () => {
    cy.mockNetworkAdd({
      Query: () => ({
        library: () => ({
          id: "1",
          name: "Nome biblioteca teste",
          address: "Endereço teste",
          books: [],
        }),
      }),
    });
    cy.visit("http://localhost:3000");
    cy.contains("Biblioteca #1: Nome biblioteca teste");
    cy.contains("Endereço: Endereço teste");
    cy.contains("Sem livros");
  });

  it("deve mostrar os dados da biblioteca e dos livros corretamente", () => {
    cy.mockNetworkAdd({
      Query: () => ({
        library: () => ({
          id: "1",
          name: "Nome biblioteca teste",
          address: "Endereço teste",
          books: [
            {
              id: "1",
              title: "Título teste",
              author: {
                id: "1",
                name: "Nome autor teste",
              },
            },
          ],
        }),
      }),
    });
    cy.visit("http://localhost:3000");
    cy.contains("Biblioteca #1: Nome biblioteca teste");
    cy.contains("Endereço: Endereço teste");
    cy.contains("Quantidade de livros: 1");
  });

  const lib = Selector("Library")({
    address: "Endereço da biblioteca com Selector Zeus",
    books: [
      Selector("Book")({
        author: Selector("Author")({
          id: "2",
          name: "Autor Teste Selector Zeus",
        }),
        description: "Descrição do Livro Teste Selector Zeus",
        id: "2",
        isRented: false,
        rent: 15,
        title: "Título do livro teste Selector Zeus",
        totalPages: 231,
      }),
    ],
    id: "2",
    name: "Nome da Biblioteca com Selector Zeus",
  });

  it("deve mostrar os dados da biblioteca e dos livros gerados pelo Selector", () => {
    cy.mockNetworkAdd({
      Query: () => ({
        library: () => lib,
      }),
    });
    cy.visit("http://localhost:3000");
    cy.contains("Biblioteca #2: Nome da Biblioteca com Selector Zeus");
    cy.contains("Endereço: Endereço da biblioteca com Selector Zeus");
    cy.contains("Quantidade de livros: 1");
    cy.contains("Disponível");
    cy.contains("Descrição do Livro Teste Selector Zeus");
    cy.contains("Autor #2: Autor Teste Selector Zeus");
    cy.contains("Alugar por R$15");
  });
});
