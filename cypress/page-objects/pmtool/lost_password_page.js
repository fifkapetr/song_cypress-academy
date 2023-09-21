import { LoginPage } from "./login_page";

export class LostPasswordPage {
  constructor() {
    this.backButton = "#back-btn";
  }

  clickBackButton() {
    cy.get(this.backButton).click();
    return new LoginPage();
  }
}
