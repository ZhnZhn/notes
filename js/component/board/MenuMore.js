'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Comp = require('../style/Comp.Style');

var _Comp2 = _interopRequireDefault(_Comp);

var _ModalPane = require('../zhn-ch/ModalPane');

var _ModalPane2 = _interopRequireDefault(_ModalPane);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MenuMore = function MenuMore(_ref) {
  var theme = _ref.theme,
      className = _ref.className,
      style = _ref.style,
      isShow = _ref.isShow,
      onClose = _ref.onClose,
      onRemove = _ref.onRemove;

  var TS = theme.createStyle(_Comp2.default);
  return _react2.default.createElement(
    _ModalPane2.default,
    {
      className: _CL2.default.MODAL_PANE + ' ' + (className || ''),
      style: (0, _extends3.default)({}, style, TS.COMP),
      isShow: isShow,
      onClose: onClose
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(_FlatButton2.default, {
        caption: 'Remove',
        onClick: onRemove
      })
    )
  );
};

exports.default = (0, _withTheme2.default)(MenuMore);
//# sourceMappingURL=MenuMore.js.map