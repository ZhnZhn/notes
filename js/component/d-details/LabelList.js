'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _LabelNote = require('./LabelNote');

var _LabelNote2 = _interopRequireDefault(_LabelNote);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    paddingBottom: 4
  }
};

var LabelList = function LabelList(_ref) {
  var labels = _ref.labels,
      onRemove = _ref.onRemove;
  return _react2.default.createElement(
    'div',
    { style: S.ROOT },
    labels.map(function (item) {
      return _react2.default.createElement(_LabelNote2.default, {
        key: item.id || item.title,
        className: _CL2.default.NOTE_LABEL,
        clClose: _CL2.default.NOTE_LABEL_CLOSE,
        item: item,
        onRemove: onRemove ? onRemove.bind(null, item) : undefined
      });
    })
  );
};
LabelList.defaultProps = {
  labels: []
};

exports.default = LabelList;
//# sourceMappingURL=LabelList.js.map