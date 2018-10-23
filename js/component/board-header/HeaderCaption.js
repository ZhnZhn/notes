'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _selectors = require('../../flux/selectors');

var _selectors2 = _interopRequireDefault(_selectors);

var _Logo = require('../zhn/Logo');

var _Logo2 = _interopRequireDefault(_Logo);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

var _crTitle = require('./crTitle');

var _crTitle2 = _interopRequireDefault(_crTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderCaption = function HeaderCaption(_ref) {
  var board = _ref.board;
  return [_react2.default.createElement(_Logo2.default, { key: 'logo', className: _CL2.default.LOGO_BOARD }), _react2.default.createElement(
    'span',
    {
      key: 'title',
      className: _CL2.default.HEADER_TITLE + ' ' + _CL2.default.TITLE_BOARD
    },
    (0, _crTitle2.default)(board)
  )];
};

var mapStateToProps = function mapStateToProps(state /*: StoreState */) {
  return {
    board: _selectors2.default.board.currentBoard(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(HeaderCaption);
//# sourceMappingURL=HeaderCaption.js.map