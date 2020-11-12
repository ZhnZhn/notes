"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var fnTabLabels = {
  toTitle: function toTitle(str) {
    if (typeof str !== 'string') {
      return '';
    }

    var _str = str.trim();

    return _str && _str.length > 0 ? _str[0].toUpperCase() + _str.slice(1) : _str;
  },
  addLabel: function addLabel(labels, title, color) {
    if (!title || labels.find(function (item) {
      return item.title === title;
    })) {
      return labels;
    }

    return labels.concat({
      title: title,
      color: color
    });
  },
  removeLabel: function removeLabel(labels, label) {
    return labels.filter(function (item) {
      return item.title !== label.title;
    });
  }
};
var _default = fnTabLabels;
exports["default"] = _default;
//# sourceMappingURL=fnTabLabels.js.map