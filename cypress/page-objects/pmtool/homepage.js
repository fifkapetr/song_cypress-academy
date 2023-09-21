import { HeaderSection } from "./headers_section";

export class Homepage extends HeaderSection {
  constructor() {
    super();
    this.appTitle = ".navbar-brand";
    cy.get(this.appTitle).should("be.visible");
  }
}
