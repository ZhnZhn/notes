import {
  createPath,

  removeTrailingSlash,
  removeDoubleSlashes,
  normalizeLeadingSlash,

  parsePath
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

describe("parsePath", () => {
  const fn = parsePath;
  test("should parse a simple pathname without special characters", () => {
    expect(fn("/items")).toEqual({ pathname: "/items" });
  });
  test("should parse a complex pathname with special characters", () => {
    expect(fn("/items/props/about")).toEqual({ pathname: "/items/props/about" });
    expect(fn("/a-b_name/sub-path")).toEqual({ pathname: "/a-b_name/sub-path" });
    expect(fn("/items/props/123")).toEqual({ pathname: "/items/props/123" });
  });

  test("should parse search parameters", () => {
    expect(fn("/path?key=value")).toEqual({
      pathname: "/path",
      search: "?key=value"
    });
    expect(fn("/items?id=1&available=true")).toEqual({
      pathname: "/items",
      search: "?id=1&available=true"
    });
    expect(fn("/search?q=some%20token")).toEqual({
      pathname: "/search",
      search: "?q=some%20token"
    });
    expect(fn("?key=value")).toEqual({
      search: "?key=value"
    });
    expect(fn("/items?")).toEqual({
      pathname: "/items",
      search: "?"
    })
  });

  test("should parse hash fragments", ()=>{
    expect(fn("/page#a-section_2")).toEqual({
      pathname: "/page",
      hash: "#a-section_2",
    });
    expect(fn("#top")).toEqual({
      hash: "#top"
    })
    expect(fn("/page#")).toEqual({
      pathname: "/page",
      hash: "#"
    })
  });

  test("should parse pathname with search and hash", ()=>{
    expect(fn("/items?id=1#review")).toEqual({
      pathname: "/items",
      search: "?id=1",
      hash: "#review"
    })
    expect(fn("/search?q=app%20router&filter=docs#getting-started")).toEqual({
      pathname: "/search",
      search: "?q=app%20router&filter=docs",
      hash: "#getting-started"
    })
  });

  test("should parse in complex and edge cases", () => {
    expect(fn("/")).toEqual({ pathname: "/"})
    expect(fn("/items/")).toEqual({ pathname: "/items/" })
    expect(fn("?key=value#hash")).toEqual({
      search: "?key=value",
      hash: "#hash"
    })
    expect(fn("/page#section#subsection")).toEqual({
      pathname: "/page",
      hash: "#section#subsection",
    })
    expect(fn("/path?key=value?other")).toEqual({
      pathname: "/path",
      search: "?key=value?other"
    })
    expect(fn("/api/v1.0/data")).toEqual({
      pathname: "/api/v1.0/data",
    })
    expect(fn("/search?q=some token 2")).toEqual({
      pathname: "/search",
      search: "?q=some token 2",
    })
    expect(fn("/items?query#hash")).toEqual({
      pathname: "/items",
      search: "?query",
      hash: "#hash"
    })
  })

  test("should return an empty object in edge cases inputs", ()=>{
    expect(fn("")).toEqual({})
    expect(fn(null)).toEqual({})
    expect(fn()).toEqual({})
  })
})
