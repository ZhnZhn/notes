'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Header = require('../zhn-ch/Header');

var _Header2 = _interopRequireDefault(_Header);

var _TopicDrawer = require('./TopicDrawer');

var _TopicDrawer2 = _interopRequireDefault(_TopicDrawer);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _HeaderDrawer = require('../header/HeaderDrawer');

var _HeaderDrawer2 = _interopRequireDefault(_HeaderDrawer);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var addColumn = _ref.addColumn;
  return _react2.default.createElement(
    _Header2.default,
    {
      className: _CL2.default.HEADER
    },
    _react2.default.createElement(_TopicDrawer2.default, null),
    _react2.default.createElement(_FlatButton2.default, {
      caption: 'Add Topic',
      title: 'Click to add topic to board',
      accessKey: 'a',
      timeout: 500,
      onClick: addColumn
    }),
    _react2.default.createElement(
      'nav',
      null,
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
          to: '/boards',
          className: _CL2.default.NAV_LINK + ' ' + _CL2.default.ML_8
        },
        'ToBoards'
      )
    ),
    _react2.default.createElement(_HeaderDrawer2.default, null)
  );
};

exports.default = Header;
//# sourceMappingURL=Header.js.map