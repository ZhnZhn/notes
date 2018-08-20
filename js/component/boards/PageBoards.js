'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Main = require('../zhn-ch/Main');

var _Main2 = _interopRequireDefault(_Main);

var _BoardList = require('./BoardList');

var _BoardList2 = _interopRequireDefault(_BoardList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageBoards = function PageBoards() {
  return [_react2.default.createElement(_Header2.default, null), _react2.default.createElement(
    _Main2.default,
    null,
    _react2.default.createElement(_BoardList2.default, null)
  )];
};

exports.default = PageBoards;
//# sourceMappingURL=PageBoards.js.map