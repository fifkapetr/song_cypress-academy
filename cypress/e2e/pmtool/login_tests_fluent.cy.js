import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Fluent Login tests", () => {
  beforeEach(() => {
    new LoginPage().openPmtool();
  });

  it("Login to pmtool using Fluent API test", () => {
    new LoginPage()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickSubmit()
      .clickProfile()
      .clickLogoff();
  });

  it("Open Lost Password Page and return test", () => {
    new LoginPage().clickLostPassword().clickBackButton();
  });

  it.only("Alert not exist after open pmtool", () => {
    new LoginPage().alertNotExist();
  });
});
