import { Homepage } from "./homepage";
import { LostPasswordPage } from "./lost_password_page";

export class LoginPage {
  constructor() {
    this.pageUrl = "http://tredgate.com/pmtool";
    this.usernameInput = "#username";
    this.passwordInput = "#password";
    this.submitButton = ".btn";
    this.lostPaswordButton = "#forget_password";
    this.pageTitle = "h3.form-title";
    this.alertDiv = "alert-danger";
  }

  alertNotExist() {
    cy.get(this.alertDiv).should("not.exist");
    return this;
  }

  usernameInputHasValue(username) {
    cy.get(this.usernameInput).should("have.value", username);
    return this;
  }

  lostPasswordButtonHasText(buttonText) {
    cy.get(this.lostPaswordButton).should("have.text", buttonText);
    return this;
  }

  pageTitleHasText(titleText) {
    cy.get(this.pageTitle).should("have.text", titleText);
    return this;
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

  clickLostPassword() {
    cy.get(this.lostPaswordButton).click();
    return new LostPasswordPage();
  }
}
