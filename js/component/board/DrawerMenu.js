'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TITLE = "Web App Notes v0.1.0";

var CL = {
  HEADER: 'header__title'
};

var S = {
  ROOT: {
    height: '100%',
    backgroundColor: '#4d4d4d',
    borderLeft: '1px solid darkcyan'
  },
  HEADER: {
    marginLeft: 16,
    paddingTop: 16,
    paddingBottom: 8
  },
  UL: {
    listStyleType: 'none'
  },
  BT: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: 16
  }
};

var DrawerMenu = function DrawerMenu(_ref) {
  var saveBoard = _ref.saveBoard,
      cleanStorage = _ref.cleanStorage;
  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
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
          rootStyle: S.BT,
          caption: 'Save Boards',
          title: 'Click to save boards to localStorage',
          onClick: saveBoard
        })
      ),
      _react2.default.createElement(
        'li',
        null,
        _react2.default.createElement(_FlatButton2.default, {
          rootStyle: S.BT,
          caption: 'Clean Storage',
          title: 'Click to remove boards from localStorage',
          onClick: cleanStorage
        })
      )
    )
  );
};

exports.default = DrawerMenu;
//# sourceMappingURL=DrawerMenu.js.map