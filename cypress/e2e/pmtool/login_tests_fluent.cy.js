import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login to pmtool using Fluent API test", () => {
    const username = Cypress.env("pmtool_username");
    const password = Cypress.env("pmtool_password");

    new LoginPage()
      .typeUsername(username)
      .typePassword(password)
      .clickSubmit()
      .clickProfile()
      .clickLogoff();
  });

  it("Open Lost Password Page and return test", () => {
    new LoginPage().clickLostPassword().clickBackButton();
  });

  it("Alert not exist after open pmtool", () => {
    new LoginPage().alertNotExist();
  });
});
