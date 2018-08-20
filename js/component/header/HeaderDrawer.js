'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Drawer = require('../zhn-ch/Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

var _DrawerMenu = require('./DrawerMenu');

var _DrawerMenu2 = _interopRequireDefault(_DrawerMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  DRAWER_BT: {
    color: '#1b2836'
  }
};

var HeaderDrawer = function HeaderDrawer(_ref) {
  var saveBoard = _ref.saveBoard,
      cleanStorage = _ref.cleanStorage;
  return _react2.default.createElement(
    _Drawer2.default,
    {
      btStyle: S.DRAWER_BT
    },
    _react2.default.createElement(_DrawerMenu2.default, {
      saveBoard: saveBoard,
      cleanStorage: cleanStorage
    })
  );
};

exports.default = HeaderDrawer;
//# sourceMappingURL=HeaderDrawer.js.map