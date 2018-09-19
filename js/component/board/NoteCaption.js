'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _InputText = require('../zhn/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _SvgMore = require('../zhn/SvgMore');

var _SvgMore2 = _interopRequireDefault(_SvgMore);

var _MenuMore = require('./MenuMore');

var _MenuMore2 = _interopRequireDefault(_MenuMore);

var _NoteHandle = require('./NoteHandle');

var _NoteHandle2 = _interopRequireDefault(_NoteHandle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  CAPTION: 'note__caption',
  BT_MORE: 'note__bt-more',
  MENU_MORE: 'note__menu-more'
};

var NoteCaption = function NoteCaption(_ref) {
  var dragHandleProps = _ref.dragHandleProps,
      isDetails = _ref.isDetails,
      onClickHandle = _ref.onClickHandle,
      noteTitle = _ref.noteTitle,
      onBlurTitle = _ref.onBlurTitle,
      isMenuMore = _ref.isMenuMore,
      onClickMenuMore = _ref.onClickMenuMore,
      onCloseMenuMore = _ref.onCloseMenuMore,
      onRemoveNote = _ref.onRemoveNote;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_NoteHandle2.default, (0, _extends3.default)({}, dragHandleProps, {
      isDetails: isDetails,
      onClick: onClickHandle
    })),
    _react2.default.createElement(_InputText2.default, {
      className: CL.CAPTION,
      value: noteTitle,
      onBlur: onBlurTitle
    }),
    _react2.default.createElement(_SvgMore2.default, {
      className: CL.BT_MORE,
      title: 'Click to open note menu',
      onClick: onClickMenuMore
    }),
    isMenuMore && _react2.default.createElement(_MenuMore2.default, {
      isShow: isMenuMore,
      className: CL.MENU_MORE,
      onClose: onCloseMenuMore,
      onRemove: onRemoveNote
    })
  );
};

exports.default = NoteCaption;
//# sourceMappingURL=NoteCaption.js.map