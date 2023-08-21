export class LoginPage {
  constructor() {
    this.pageUrl = "http://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.submitButton = ".btn";
  }

  openPmtool() {
    cy.visit(this.pageUrl);
  }

  typeUsername(username) {
    cy.get(this.usernameInput).type(username);
  }

  typePassword(password) {
    cy.get(this.passwordInput).type(password);
  }

  clickSubmit() {
    cy.get(this.submitButton).click();
  }
}
