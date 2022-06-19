describe("Cypress", () => {
  beforeEach(() => {
    cy.task("getSchema").then((schema) => {
      cy.log(schema as string)
      cy.server()
      cy.mockGraphql({ schema: schema as string })
    })
  })
  it("is working", () => {
    expect(true).to.equal(true)
  })

  it("opens the app", () => {
    cy.visit("http://localhost:3000")
  })
})
