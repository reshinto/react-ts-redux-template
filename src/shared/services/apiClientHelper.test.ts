import { isJsonContentType } from "./apiClientHelper";

describe("isJsonContentType", () => {
  it("Should be true for json content types", () => {
    expect(isJsonContentType("application/hal+json")).toBeTruthy();
    expect(isJsonContentType("application/json")).toBeTruthy();
  });

  it("Should be false for not json content types", () => {
    expect(isJsonContentType("text")).toBeFalsy();
  });
});
