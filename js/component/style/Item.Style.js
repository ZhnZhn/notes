"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styleConfig = {
  themeName: undefined,
  style: undefined,

  createStyle: function createStyle(CSS_RULE) {
    return {
      ITEM: (0, _extends3.default)({}, CSS_RULE.ITEM)
    };
  }
};

exports.default = styleConfig;
//# sourceMappingURL=Item.Style.js.map