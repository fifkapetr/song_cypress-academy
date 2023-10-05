import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Using Each and Wrap function", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickSubmit()
      .clickProjects();
  });

  it("Checking if all rows in Project table has actions delete and edit", () => {
    cy.get("tbody .listing-table-tr").each((row) => {
      cy.wrap(row).within(() => {
        cy.get("a[title='Delete']").should("exist");
        cy.get("a[title='Edit']").should("exist");
      });
    });
  });
});
