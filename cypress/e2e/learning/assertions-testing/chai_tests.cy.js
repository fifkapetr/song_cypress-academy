import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Chai Tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });
  it("Login header has text 'Login'", () => {
    new LoginPage().pageTitleHasText("Login");
  });

  it("FAILING: Login Header has text 'Login2'", () => {
    new LoginPage().pageTitleHasText("Login2");
  });

  it("The Lost Password has text 'Password Forgotten?'", () => {
    new LoginPage().lostPasswordButtonHasText("Password forgotten?");
  });

  it("Username input has value after type", () => {
    let username = "testUsername";
    new LoginPage().typeUsername(username).usernameInputHasValue(username);
  });

  it("Password input has form-control class", () => {
    cy.get("#password")
      .should("have.class", "form-control")
      .should("have.class", "required");
  });

  it("Login button has class btn-info", () => {
    cy.get('button[type="submit"]').should("have.class", "btn-info");
  });

  it("Login button is visible", () => {
    cy.get('button[type="submit"]').should("be.visible");
    cy.get('button[type="submit"]').scrollIntoView().should("be.visible");
  });

  it("Application title is visible in homepage", () => {
    new LoginPage()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickSubmit();

    cy.get(".navbar-brand").should("be.visible");
  });

  it("Login button exist", () => {
    cy.get('button[type="submit"]').should("exist");
  });

  it("Username has placeholder 'Username'", () => {
    cy.get("#username").should("have.attr", "placeholder", "Username");
  });

  it("Password has placeholder 'Password'", () => {
    cy.get("#password").should("have.attr", "placeholder", "Password");
  });
});
