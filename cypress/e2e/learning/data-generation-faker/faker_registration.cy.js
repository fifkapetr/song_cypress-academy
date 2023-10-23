import { faker } from "@faker-js/faker";

describe("Registration using faker.js", () => {
  it("Register in tredgate eshop using faker", () => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const email = faker.internet.exampleEmail({
      firstName: firstName,
      lastName: lastName,
    });
    const phone = faker.phone.number();
    const password = faker.internet.password();
    cy.log("firstName: " + firstName);
    cy.log("lastName: " + lastName);
    cy.log("email: " + email);
    cy.log("phone: " + phone);
    cy.log("password: " + password);

    cy.visit("http://tredgate.com/eshop/index.php?route=account/register");
    cy.get("#input-firstname").type(firstName);
    cy.get("#input-lastname").type(lastName);
    cy.get("#input-email").type(email);
    cy.get("#input-telephone").type(phone);
    cy.get("#input-password").type(password);
    cy.get("#input-confirm").type(password);
  });
});
