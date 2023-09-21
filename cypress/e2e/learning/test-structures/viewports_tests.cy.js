import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Viewports tests", () => {
  it("Viewport 550x750", () => {
    cy.viewport(550, 750);
    new LoginPage().openPmtool();
  });

  it("Viewport iPhone 6", () => {
    cy.viewport("iphone-6");
    new LoginPage().openPmtool();
  });

  it("Viewport iPhone 6 in landscape mode", () => {
    cy.viewport("iphone-6", "landscape");
    new LoginPage().openPmtool();
  });
});
