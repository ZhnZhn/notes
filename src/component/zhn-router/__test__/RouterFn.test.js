import {
  createPath,

  removeTrailingSlash,
  removeDoubleSlashes,
  normalizeLeadingSlash
} from "../RouterFn";

describe("createPath", () => {
  const _crPathConfig = (pathname, search, hash) => ({
    pathname,
    search,
    hash
  });
  const fn = (pathname, search, hash) => createPath(
    _crPathConfig(pathname, search, hash)
  )
  test("should return string path", ()=>{
    const expectedValue = "/items?search=a#hash=b";
    expect(fn("/items", "search=a", "hash=b")).toBe(expectedValue)
    expect(fn("/items", "?search=a", "hash=b")).toBe(expectedValue)
    expect(fn("/items", "?search=a", "#hash=b")).toBe(expectedValue)
    expect(fn("/items", "?search=a", "#hash=b")).toBe(expectedValue)

    expect(fn("/items")).toBe("/items")
    expect(fn("/items", "search=a")).toBe("/items?search=a")
    expect(fn("/items", "?search=a")).toBe("/items?search=a")
    expect(fn("/items", void 0, "hash=b")).toBe("/items#hash=b")
    expect(fn("/items", void 0, "#hash=b")).toBe("/items#hash=b")
  })
})

describe("removeTrailingSlash", () => {
  const fn = removeTrailingSlash;
  test("should return string without trailing slash", () => {
    expect(fn("/items")).toBe("/items")
    expect(fn("/items/")).toBe("/items")
    expect(fn("/items//")).toBe("/items")
    expect(fn("/items/////")).toBe("/items")
  })
})

describe("removeDoubleSlashes", () => {
  const fn = removeDoubleSlashes;
  test("should return string with replaced all more that one slash by exact one slash", ()=>{
    expect(fn("/items/props/")).toBe("/items/props/")
    expect(fn("//items///props////")).toBe("/items/props/")
    expect(fn("//items/props////")).toBe("/items/props/")
    expect(fn("/items///props////")).toBe("/items/props/")
  })
})

describe("normalizeLeadingSlash", () => {
  const fn = normalizeLeadingSlash;
  test("should return string with exact one leading slash", () => {
     const expectedValue = "/items/props?seach=a#hash=b";
     expect(fn("items/props?seach=a#hash=b")).toBe(expectedValue)
     expect(fn("/items/props?seach=a#hash=b")).toBe(expectedValue)
     expect(fn("//items/props?seach=a#hash=b")).toBe(expectedValue)
     expect(fn("/////items/props?seach=a#hash=b")).toBe(expectedValue)

     expect(fn("/")).toBe("/")
     expect(fn("")).toBe("/")
     expect(fn()).toBe("/")
     expect(fn(null)).toBe("/")
  })
})
