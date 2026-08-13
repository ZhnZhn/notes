"use strict";

exports.__esModule = true;
exports.useFocusPrevElement = void 0;
var _uiApi = require("../uiApi");
const useFocusPrevElement = isShow => {
  const _refPrevElement = (0, _uiApi.useRef)();
  (0, _uiApi.useEffect)(() => {
    let _idFocus;
    if (isShow) {
      (0, _uiApi.setRefValue)(_refPrevElement, document.activeElement);
    } else {
      _idFocus = setTimeout(() => (0, _uiApi.focusRefElement)(_refPrevElement), 100);
    }
    return () => clearTimeout(_idFocus);
  }, [isShow]);
};
exports.useFocusPrevElement = useFocusPrevElement;
//# sourceMappingURL=useFocus.js.map