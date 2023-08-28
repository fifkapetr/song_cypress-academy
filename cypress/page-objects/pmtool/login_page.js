import { Homepage } from "./homepage";

export class LoginPage {
  constructor() {
    this.pageUrl = "http://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.submitButton = ".btn";
  }

  openPmtool() {
    cy.visit(this.pageUrl);
    return this;
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
    return this;
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
    return this;
  }

  clickSubmit() {
    cy.get(this.submitButton).click();
    return new Homepage();

    // ! dont do this!
    // if (!isErrorMessageVisible) {
    //   return new Homepage();
    // } else {
    //   return this;
    // }
  }
}
