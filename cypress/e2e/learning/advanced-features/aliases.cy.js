describe("Using Aliases", () => {
  it("Checking login placeholders consistency", () => {
    cy.visit("http://tredgate.com/pmtool/");
    cy.get("#username").invoke("attr", "placeholder").as("usernamePlaceholder");
    cy.get("#password").invoke("attr", "placeholder").as("usernamePassword");
    cy.get("#forget_password").click();
    cy.get("#back-btn").click();
    cy.get("@usernamePlaceholder").then((usernamePlaceholder) => {
      cy.log("usernamePlaceholder value:" + usernamePlaceholder);
      cy.get("#username").should(
        "have.attr",
        "placeholder",
        usernamePlaceholder
      );
    });
    cy.get("@usernamePassword").then((passwordPlaceholder) => {
      cy.log("passwordPlaceholder value:" + passwordPlaceholder);
      cy.get("#password").should(
        "have.attr",
        "placeholder",
        passwordPlaceholder
      );
    });
  });
});
