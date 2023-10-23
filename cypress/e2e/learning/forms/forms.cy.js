describe("Forms tests", () => {
  beforeEach(() => {
    cy.visit("http://tredgate.com/webtrain/registration.html");
  });
  it("Check radio button", () => {
    cy.get('input[name="subscription"]').check("basic");
    cy.get("#basic").should("be.checked");
  });

  it("Check 2 Interests", () => {
    cy.get('input[name="interests[]"]').check("sports");
    cy.get('input[name="interests[]"]').check("travel");
    cy.get("#interests-travel").should("be.checked");
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-music").should("not.be.checked");
    cy.get("#interests-reading").should("not.be.checked");
  });

  it("Check 3 Interests in one line", () => {
    cy.get('input[name="interests[]"]').check(["sports", "reading", "music"]);
    cy.get("#interests-travel").should("not.be.checked");
    cy.get("#interests-sports").should("be.checked");
    cy.get("#interests-music").should("be.checked");
    cy.get("#interests-reading").should("be.checked");
    cy.get('input[name="interests[]"]').uncheck("sports");
    cy.get("#interests-sports").should("not.be.checked");
  });

  it("Check and uncheck checkbox", () => {
    cy.get("input[name='interests[]']").check("sports");
    cy.get("#interests-sports").should("be.checked");
    cy.get("input[name='interests[]']").uncheck("sports");
    cy.get("#interests-sports").should("not.be.checked");
  });

  it("fill name", () => {
    cy.get("#name").type("Petr Fifka");
  });

  it("Clean and fill name", () => {
    cy.get("#name")
      .clear()
      .type("Petr Fifka")
      .should("have.value", "Petr Fifka");
  });

  it("Select female gender", () => {
    cy.get("#gender")
      .select("female")
      .should("have.value", "female")
      .select("Other")
      .should("have.value", "other");
  });

  it("Submit form", () => {
    cy.get("#myForm").submit();
    cy.get("#message-box").should("have.text", "Form submitted successfully!");
  });

  it("Upload file", () => {
    cy.fixture("test.txt", { encoding: null }).as("fileToUpload");
    cy.get("#file-upload").selectFile("@fileToUpload");
  });

  it("Type date", () => {
    cy.get("#datepicker").type("2023-01-01").should("have.value", "2023-01-01");
  });
});
