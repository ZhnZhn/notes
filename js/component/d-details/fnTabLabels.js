"use strict";

exports.__esModule = true;
exports["default"] = void 0;
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
      labels: [].concat(labels, [{
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
var _default = fnTabLabels;
exports["default"] = _default;
//# sourceMappingURL=fnTabLabels.js.map