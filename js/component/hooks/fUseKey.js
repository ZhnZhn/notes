"use strict";

exports.__esModule = true;
exports.useKeyEscape = void 0;
var _uiApi = require("../uiApi");
var _isEventKey = require("../zhn/isEventKey");
/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (fn, deps) => (0, _uiApi.useCallback)(evt => {
  if (isKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
    fn(evt);
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const useKeyEscape = exports.useKeyEscape = _fUseKey(_isEventKey.isEventKeyEscape);
//# sourceMappingURL=fUseKey.js.map