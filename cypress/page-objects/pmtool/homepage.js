import { LoginPage } from "./login_page";

export class Homepage {
  constructor() {
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoffButton = "#logout > a";
    this.appTitle = ".navbar-brand";
    cy.get(this.appTitle).should("be.visible");
  }

  clickProfile() {
    cy.get(this.profileButton).click();
    return this;
  }

  clickLogoff() {
    cy.get(this.logoffButton).click();
    return new LoginPage();
  }
}
