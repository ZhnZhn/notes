"use strict";

exports.__esModule = true;
exports.toTitle = exports.removeLabel = exports.addLabel = void 0;

var toTitle = function toTitle(str) {
  if (typeof str !== 'string') {
    return '';
  }

  var _str = str.trim();

  return _str && _str.length > 0 ? _str[0].toUpperCase() + _str.slice(1) : _str;
};

exports.toTitle = toTitle;

var addLabel = function addLabel(labels, title, color) {
  if (!title || labels.find(function (item) {
    return item.title === title;
  })) {
    return labels;
  }

  return labels.concat({
    title: title,
    color: color
  });
};

exports.addLabel = addLabel;

var removeLabel = function removeLabel(labels, label) {
  return labels.filter(function (item) {
    return item.title !== label.title;
  });
};

exports.removeLabel = removeLabel;
//# sourceMappingURL=TabLabelsFn.js.map