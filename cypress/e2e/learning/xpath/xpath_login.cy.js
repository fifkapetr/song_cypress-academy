describe("Login tests with XPath selectors", () => {
  it("Login with Xpath Selectors", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.xpath("//input[@name='username']").type("fifka_petr");
  });
});
