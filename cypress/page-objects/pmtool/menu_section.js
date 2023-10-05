export class MenuSection {
  constructor() {
    this.dashboardMenuAnchor = "#dashboard a";
    this.projectsMenuAnchor = "#Projects a";
    this.usersMenuAnchor = "#Users>a.menu-itemsitems1";
  }

  clickProjects() {
    const { ProjectsPage } = require("./projects_page");
    cy.get(this.projectsMenuAnchor).click();
    return new ProjectsPage();
  }

  clickDashboard() {
    const { Homepage } = require("./homepage");
    cy.get(this.dashboardMenuAnchor).click();
    return new Homepage();
  }

  clickUsers() {
    const { UsersPage } = require("./users_page");
    cy.get(this.usersMenuAnchor).click();
    return new UsersPage();
  }
}
