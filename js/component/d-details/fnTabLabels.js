'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fnTabLabels = {
  toTitle: function toTitle(str) {
    if (typeof str !== 'string') {
      return '';
    }
    var _str = str.trim();
    if (_str && _str.length > 1) {
      return _str[0].toUpperCase() + _str.substring(1).trim();
    }
    return _str;
  },

  addLabel: function addLabel(prevState, title, color) {
    var labels = prevState.labels;

    if (!title || labels.find(function (item) {
      return item.title === title;
    })) {
      return null;
    }
    return {
      labels: [].concat((0, _toConsumableArray3.default)(labels), [{
        title: title,
        color: color
      }])
    };
  },

  removeLabel: function removeLabel(prevState, label) {
    return {
      labels: prevState.labels.filter(function (item) {
        return item.title !== label.title;
      })
    };
  }
};

exports.default = fnTabLabels;
//# sourceMappingURL=fnTabLabels.js.map