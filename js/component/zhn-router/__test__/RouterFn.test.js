"use strict";

var _RouterFn = require("../RouterFn");
describe("createPath", () => {
  const _crPathConfig = (pathname, search, hash) => ({
    pathname,
    search,
    hash
  });
  const fn = (pathname, search, hash) => (0, _RouterFn.createPath)(_crPathConfig(pathname, search, hash));
  test("should return string path", () => {
    const expectedValue = "/items?search=a#hash=b";
    expect(fn("/items", "search=a", "hash=b")).toBe(expectedValue);
    expect(fn("/items", "?search=a", "hash=b")).toBe(expectedValue);
    expect(fn("/items", "?search=a", "#hash=b")).toBe(expectedValue);
    expect(fn("/items", "?search=a", "#hash=b")).toBe(expectedValue);
    expect(fn("/items")).toBe("/items");
    expect(fn("/items", "search=a")).toBe("/items?search=a");
    expect(fn("/items", "?search=a")).toBe("/items?search=a");
    expect(fn("/items", void 0, "hash=b")).toBe("/items#hash=b");
    expect(fn("/items", void 0, "#hash=b")).toBe("/items#hash=b");
  });
});
describe("removeTrailingSlash", () => {
  const fn = _RouterFn.removeTrailingSlash;
  test("should return string without trailing slash", () => {
    expect(fn("/items")).toBe("/items");
    expect(fn("/items/")).toBe("/items");
    expect(fn("/items//")).toBe("/items");
    expect(fn("/items/////")).toBe("/items");
  });
});
describe("removeDoubleSlashes", () => {
  const fn = _RouterFn.removeDoubleSlashes;
  test("should return string with replaced all more that one slash by exact one slash", () => {
    expect(fn("/items/props/")).toBe("/items/props/");
    expect(fn("//items///props////")).toBe("/items/props/");
    expect(fn("//items/props////")).toBe("/items/props/");
    expect(fn("/items///props////")).toBe("/items/props/");
  });
});
describe("normalizeLeadingSlash", () => {
  const fn = _RouterFn.normalizeLeadingSlash;
  test("should return string with exact one leading slash", () => {
    const expectedValue = "/items/props?seach=a#hash=b";
    expect(fn("items/props?seach=a#hash=b")).toBe(expectedValue);
    expect(fn("/items/props?seach=a#hash=b")).toBe(expectedValue);
    expect(fn("//items/props?seach=a#hash=b")).toBe(expectedValue);
    expect(fn("/////items/props?seach=a#hash=b")).toBe(expectedValue);
    expect(fn("/")).toBe("/");
    expect(fn("")).toBe("/");
    expect(fn()).toBe("/");
    expect(fn(null)).toBe("/");
  });
});
//# sourceMappingURL=RouterFn.test.js.map