"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var styleConfig = {
  themeName: undefined,
  style: undefined,
  createStyle: function createStyle(CSS_RULE) {
    return {
      DIALOG: (0, _extends2["default"])({}, CSS_RULE.BG),
      SELECT: {
        MODAL_PANE: (0, _extends2["default"])({}, CSS_RULE.BG)
      }
    };
  }
};
var _default = styleConfig;
exports["default"] = _default;
//# sourceMappingURL=Dialog.Style.js.map