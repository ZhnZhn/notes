"use strict";

exports.__esModule = true;
exports.useKeyEscape = exports.isKeyEnterOrSpace = exports.isEventKeyEscape = exports.isEventKeyEnter = exports.isEventKeyDelete = void 0;
var _uiApi = require("../uiApi");
/*eslint-disable react-hooks/exhaustive-deps */
const _fUseKey = isKey => (fn, deps) => (0, _uiApi.useCallback)(evt => {
  if (isKey(evt)) {
    (0, _uiApi.stopDefaultFor)(evt);
    fn(evt);
  }
}, deps || []);
/*eslint-enable react-hooks/exhaustive-deps */

const _fIsEventKey = (key, keyCode) => evt => evt.key === key || evt.keyCode === keyCode;
const isEventKeyDelete = exports.isEventKeyDelete = _fIsEventKey(_uiApi.KEY_DELETE, 46);
const isEventKeyEnter = exports.isEventKeyEnter = _fIsEventKey(_uiApi.KEY_ENTER, 13);
const isEventKeyEscape = exports.isEventKeyEscape = _fIsEventKey(_uiApi.KEY_ESCAPE, 27);
const useKeyEscape = exports.useKeyEscape = _fUseKey(isEventKeyEscape);
const isKeyEnterOrSpace = evtKey => evtKey === _uiApi.KEY_ENTER || evtKey === _uiApi.KEY_SPACE;
exports.isKeyEnterOrSpace = isKeyEnterOrSpace;
//# sourceMappingURL=fUseKey.js.map