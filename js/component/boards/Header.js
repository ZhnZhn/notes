'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _actions = require('../../flux/board/actions');

var _Header = require('../zhn-ch/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Logo = require('../zhn/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _HeaderDrawer = require('../header/HeaderDrawer');

var _HeaderDrawer2 = _interopRequireDefault(_HeaderDrawer);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(_ref) {
  var style = _ref.style,
      addBoard = _ref.addBoard;
  return _react2.default.createElement(
    _Header2.default,
    { className: _CL2.default.HEADER, style: style },
    _react2.default.createElement(_Logo2.default, null),
    _react2.default.createElement('span', { className: _CL2.default.TITLE_GAP }),
    _react2.default.createElement(
      'span',
      { className: _CL2.default.HEADER_TITLE },
      'Notes: Boards'
    ),
    _react2.default.createElement(_FlatButton2.default, {
      caption: 'Add Board',
      title: 'Click to add new board',
      accessKey: 'a',
      timeout: 200,
      onClick: addBoard
    }),
    _react2.default.createElement(_HeaderDrawer2.default, null)
  );
};

var mapDispatchToProps = {
  addBoard: _actions.addBoard
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Header);
//# sourceMappingURL=Header.js.map