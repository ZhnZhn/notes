
export function createPath({
  pathname = "/",
  search = "",
  hash = ""
}) {
  if (search && search !== "?")
    pathname += search.charAt(0) === "?"
      ? search
      : "?" + search;
  if (hash && hash !== "#")
    pathname += hash.charAt(0) === "#"
      ? hash
      : "#" + hash;
  return pathname;
}

const RE_TRAILING_SLASH = /\/+$/;
export const removeTrailingSlash = (
  path
) => path.replace(RE_TRAILING_SLASH, "")

const RE_DOUBLE_SLASHES = /[\\/]{2,}/g;
export const removeDoubleSlashes = (
  path
) => path.replace(RE_DOUBLE_SLASHES, "/")
