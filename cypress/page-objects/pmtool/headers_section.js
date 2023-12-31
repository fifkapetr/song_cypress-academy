import { LoginPage } from "./login_page";
import { MenuSection } from "./menu_section";

export class HeaderSection extends MenuSection {
  constructor() {
    super();
    this.profileButton = "#user_dropdown > .dropdown-toggle";
    this.logoffButton = "#logout > a";
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
