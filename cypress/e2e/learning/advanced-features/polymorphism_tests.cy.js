import { Homepage } from "../../../page-objects/pmtool/homepage";
import { LoginPage } from "../../../page-objects/pmtool/login_page";

describe("Polymorphism tests", () => {
  beforeEach(() => {
    new LoginPage()
      .openPmtool()
      .typeUsername("fifka_petr")
      .typePassword("Tredgate2023")
      .clickSubmit();
  });
  it("Open Pages via Polymorphism Classes", () => {
    new Homepage().clickProjects().clickProfile().clickLogoff();
  });

  it("Open Projects, Dashboard, Users page and check titles", () => {
    new Homepage()
      .clickProjects()
      .pageTitleContainText("Projects")
      .clickDashboard()
      .clickUsers()
      .pageTitleContainText("Users")
      .clickProfile()
      .clickLogoff();
  });
});
