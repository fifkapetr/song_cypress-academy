import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Mocha tests", () => {
  beforeEach(() => {
    cy.viewport(800, 600);
    cy.log("Runs before each test");
  });

  it("Visit pmtool", () => {
    new LoginPage().openPmtool();
  });

  it("Pmtool login", () => {
    new LoginPage()
      .openPmtool()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickSubmit();
  });

  afterEach(() => {
    cy.log("Function After Each called");
  });
});
