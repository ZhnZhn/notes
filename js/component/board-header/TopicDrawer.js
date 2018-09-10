'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DrawerLeft = require('../zhn-ch/DrawerLeft');

var _DrawerLeft2 = _interopRequireDefault(_DrawerLeft);

var _HeaderCaption = require('./HeaderCaption');

var _HeaderCaption2 = _interopRequireDefault(_HeaderCaption);

var _TopicDrawerMenu = require('./TopicDrawerMenu');

var _TopicDrawerMenu2 = _interopRequireDefault(_TopicDrawerMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TopicDrawer = function TopicDrawer() {
  return _react2.default.createElement(
    _DrawerLeft2.default,
    {
      captionComp: _react2.default.createElement(_HeaderCaption2.default, null)
    },
    _react2.default.createElement(_TopicDrawerMenu2.default, null)
  );
};

exports.default = TopicDrawer;
//# sourceMappingURL=TopicDrawer.js.map