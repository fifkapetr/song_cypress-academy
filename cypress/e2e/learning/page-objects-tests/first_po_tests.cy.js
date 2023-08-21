import { GeneralPOPage } from "../../../page-objects/learning/general_po_page";

describe("First Page Objects Tests", () => {
  it("General Page Object Init", () => {
    const firstObject = new GeneralPOPage();
    firstObject.someMethod();
    firstObject.someTypeMethod("Test text");
  });
});
