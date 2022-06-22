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
});
