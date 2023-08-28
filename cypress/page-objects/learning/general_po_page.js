export class GeneralPOPage {
  constructor() {
    this.someElementSelector = "selector";
  }

  someMethod() {
    cy.get(this.someElementSelector).click();
  }

  someTypeMethod(text) {
    cy.get(this.someElementSelector).type(text);
  }
}
