"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
const useBtFocus = (refBt, isSelected, props) => (0, _uiApi.useEffect)(() => {
  const _bt = (0, _uiApi.getRefValue)(refBt);
  if (isSelected && _bt) {
    _bt.focus();
  }
}, [props]);
// isSelected
var _default = exports.default = useBtFocus;
//# sourceMappingURL=useBtFocus.js.map