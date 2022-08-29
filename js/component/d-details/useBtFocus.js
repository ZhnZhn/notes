"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var useBtFocus = function useBtFocus(refBt, isSelected, props) {
  return (0, _uiApi.useEffect)(function () {
    var _bt = (0, _uiApi.getRefValue)(_bt);

    if (isSelected && _bt) {
      _bt.focus();
    }
  }, [props]);
}; // isSelected


var _default = useBtFocus;
exports["default"] = _default;
//# sourceMappingURL=useBtFocus.js.map