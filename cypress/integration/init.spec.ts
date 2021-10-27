describe("Cypress", () => {
  beforeEach(() => {
    cy.readFile("./src/graphql/introspection.generated.json").then((schema) => {
      cy.mockNetwork({ schema });
    });
    
    cy.visit("http://localhost:3000");
  });

  it("is working", () => {
    expect(true).to.equal(true);
  });

  it("opens the app", () => {
    cy.visit("http://localhost:3000");
  });
});
