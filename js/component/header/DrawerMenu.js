'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _DrawerMsgList = require('./DrawerMsgList');

var _DrawerMsgList2 = _interopRequireDefault(_DrawerMsgList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = "Web App Notes v0.1.0";

var CL = {
  HEADER: 'header__title',
  ROOT: 'drawer__list',
  BT: 'drawer__list-bt'
};

var S = {
  HEADER: {
    marginLeft: 16,
    paddingTop: 16,
    paddingBottom: 8
  },
  UL: {
    listStyleType: 'none'
  }
};

var DrawerMenu = function DrawerMenu(_ref) {
  var saveBoard = _ref.saveBoard,
      cleanStorage = _ref.cleanStorage;
  return _react2.default.createElement(
    'div',
    { className: CL.ROOT },
    _react2.default.createElement(
      'div',
      {
        className: CL.HEADER,
        style: S.HEADER
      },
      TITLE
    ),
    _react2.default.createElement(
      'ul',
      { style: S.UL },
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(_FlatButton2.default, {
          className: CL.BT,
          caption: 'Save Boards',
          title: 'Click to save boards to localStorage',
          onClick: saveBoard
        })
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(_FlatButton2.default, {
          className: CL.BT,
          caption: 'Clean Storage',
          title: 'Click to remove boards from localStorage',
          onClick: cleanStorage
        })
      )
    ),
    _react2.default.createElement(_DrawerMsgList2.default, null)
  );
};

exports.default = DrawerMenu;
//# sourceMappingURL=DrawerMenu.js.map