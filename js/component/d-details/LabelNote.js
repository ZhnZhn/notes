'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LabelNote = function LabelNote(_ref) {
  var className = _ref.className,
      clClose = _ref.clClose,
      item = _ref.item,
      onRemove = _ref.onRemove;
  return _react2.default.createElement(
    'button',
    {
      className: className,
      style: { backgroundColor: item.color },
      onClick: onRemove
    },
    item.title,
    onRemove && _react2.default.createElement(
      'span',
      { className: clClose },
      'x'
    )
  );
};

exports.default = LabelNote;
//# sourceMappingURL=LabelNote.js.map