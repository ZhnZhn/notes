'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  HANDLE: 'note__handle',
  OPEN: 'note__handle--open'
};

var NoteHandle = function NoteHandle(_ref) {
  var isDetails = _ref.isDetails,
      rest = (0, _objectWithoutProperties3.default)(_ref, ['isDetails']);

  var _cl = isDetails ? CL.HANDLE + ' ' + CL.OPEN : CL.HANDLE;
  return _react2.default.createElement('span', (0, _extends3.default)({
    className: _cl
  }, rest));
};

exports.default = NoteHandle;
//# sourceMappingURL=NoteHandle.js.map