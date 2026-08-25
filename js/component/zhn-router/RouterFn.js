"use strict";

exports.__esModule = true;
exports.createPath = createPath;
exports.removeTrailingSlash = exports.removeDoubleSlashes = void 0;
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash = ""
  } = _ref;
  if (search && search !== "?") pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash && hash !== "#") pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
  return pathname;
}
const RE_TRAILING_SLASH = /\/+$/;
const removeTrailingSlash = path => path.replace(RE_TRAILING_SLASH, "");
exports.removeTrailingSlash = removeTrailingSlash;
const RE_DOUBLE_SLASHES = /[\\/]{2,}/g;
const removeDoubleSlashes = path => path.replace(RE_DOUBLE_SLASHES, "/");
exports.removeDoubleSlashes = removeDoubleSlashes;
//# sourceMappingURL=RouterFn.js.map