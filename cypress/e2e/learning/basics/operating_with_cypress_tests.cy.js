describe("Operating with Cypress Tests", () => {
  it("Login test", () => {});

  it("Login test2", () => {
    cy.visit("http://tredgate.com/pmtool");
    cy.get("#username").type("TestingCypress");
    cy.get("#password").type("Password");
    cy.get(".btn").click();
  });

  it.skip("Failing test", () => {
    cy.get("123456");
  });
});
