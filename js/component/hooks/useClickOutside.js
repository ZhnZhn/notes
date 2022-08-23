"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _removeClickListener = function _removeClickListener(listener, ref) {
  if ((0, _uiApi.getRefValue)(ref)) {
    document.removeEventListener('click', listener, true);
    (0, _uiApi.setRefValue)(ref, null);
  }
};

var useClickOutside = function useClickOutside(isShow, onClickOutside) {
  var _ref = (0, _uiApi.useRef)(null),
      _refIs = (0, _uiApi.useRef)(null)
  /*eslint-disable react-hooks/exhaustive-deps */
  ,
      _hClickOutside = (0, _uiApi.useCallback)(function (event) {
    var _el = (0, _uiApi.getRefValue)(_ref);

    if (_el && _el.contains && !_el.contains(event.target)) {
      event.stopPropagation();
      onClickOutside(event);
    }
  }, []); // onClickOutside

  /*eslint-enable react-hooks/exhaustive-deps */


  (0, _uiApi.useEffect)(function () {
    if (isShow && !(0, _uiApi.getRefValue)(_refIs)) {
      document.addEventListener('click', _hClickOutside, true);
      (0, _uiApi.setRefValue)(_refIs, true);
    } else if (!isShow) {
      _removeClickListener(_hClickOutside, _refIs);
    }
  });
  /*eslint-disable react-hooks/exhaustive-deps */

  (0, _uiApi.useEffect)(function () {
    return function () {
      return _removeClickListener(_hClickOutside, _refIs);
    };
  }, []); // _hClickOutside

  /*eslint-enable react-hooks/exhaustive-deps */

  return _ref;
};

var _default = useClickOutside;
exports["default"] = _default;
//# sourceMappingURL=useClickOutside.js.map