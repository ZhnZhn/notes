'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _Logo = require('../zhn/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _HeaderDrawer = require('../header/HeaderDrawer');

var _HeaderDrawer2 = _interopRequireDefault(_HeaderDrawer);

var _cl = require('../style/cl');

var _cl2 = _interopRequireDefault(_cl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  BT: {
    position: 'relative',
    marginLeft: 16
  },
  NAV: {
    display: 'inline-block'
  },
  NAV_LINK: {
    paddingLeft: 8
  }
};

var Header = function Header(_ref) {
  var style = _ref.style,
      titleStyle = _ref.titleStyle,
      board = _ref.board,
      saveBoard = _ref.saveBoard,
      cleanStorage = _ref.cleanStorage,
      addColumn = _ref.addColumn;
  return _react2.default.createElement(
    'header',
    {
      className: _cl2.default.HEADER,
      style: style
    },
    _react2.default.createElement(_Logo2.default, null),
    _react2.default.createElement('span', { className: _cl2.default.TITLE_GAP }),
    _react2.default.createElement(
      'span',
      {
        className: _cl2.default.HEADER_TITLE + ' ' + _cl2.default.TITLE_BOARD,
        style: titleStyle },
      'Notes: ' + board.title
    ),
    _react2.default.createElement(_FlatButton2.default, {
      style: S.BT,
      caption: 'Add Column',
      title: 'Click to add column to board',
      accessKey: 'a',
      timeout: 500,
      onClick: addColumn
    }),
    _react2.default.createElement(
      'nav',
      { style: S.NAV },
      _react2.default.createElement(
        _reactRouterDom.NavLink,
        {
          to: '/boards',
          style: S.NAV_LINK
        },
        'ToBoards'
      )
    ),
    _react2.default.createElement(_HeaderDrawer2.default, {
      saveBoard: saveBoard,
      cleanStorage: cleanStorage
    })
  );
};

exports.default = Header;
//# sourceMappingURL=Header.js.map