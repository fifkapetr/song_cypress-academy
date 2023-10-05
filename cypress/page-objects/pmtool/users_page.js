import { HeaderSection } from "./headers_section";

export class UsersPage extends HeaderSection {
  constructor() {
    super();
    this.pageTitleH3 = ".page-title";
  }

  pageTitleContainText(titleText) {
    cy.get(this.pageTitleH3).should("contain.text", titleText);
    return this;
  }
}
