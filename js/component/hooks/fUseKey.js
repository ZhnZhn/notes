"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
/*eslint-disable react-hooks/exhaustive-deps */
const fUseKey = isKey => (fn, deps) => (0, _uiApi.useCallback)(evt => {
  if (isKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    fn(evt);
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */
var _default = exports.default = fUseKey;
//# sourceMappingURL=fUseKey.js.map