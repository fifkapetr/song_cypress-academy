import { Homepage } from "../../page-objects/pmtool/homepage";
import { LoginPage } from "../../page-objects/pmtool/login_page";

describe("Login and Logout Tests", () => {
  it("Login to pmtool", () => {
    const pmtool = new LoginPage();
    pmtool.openPmtool();
    cy.log("Login to pmtool");
    pmtool.typeUsername("fifka_petr");
    pmtool.typePassword("Tredgate2023");
    pmtool.clickSubmit();
  });

  it("Login and Logout test", () => {
    const pmtool = new LoginPage();
    const homepage = new Homepage();
    pmtool.openPmtool();
    pmtool.typeUsername("fifka_petr");
    pmtool.typePassword("Tredgate2023");
    pmtool.clickSubmit();
    homepage.clickProfile();
    homepage.clickLogoff();
  });
});
