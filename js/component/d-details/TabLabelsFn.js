"use strict";

exports.__esModule = true;
exports.toTitle = exports.removeLabel = exports.addLabel = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
const toTitle = str => {
  if (!(0, _isTypeFn.isStr)(str)) {
    return '';
  }
  const _str = str.trim();
  return _str && _str.length > 0 ? _str[0].toUpperCase() + _str.slice(1) : _str;
};
exports.toTitle = toTitle;
const addLabel = (labels, title, color) => {
  if (!title || labels.find(item => item.title === title)) {
    return labels;
  }
  return labels.concat({
    title,
    color
  });
};
exports.addLabel = addLabel;
const removeLabel = (labels, label) => labels.filter(item => item.title !== label.title);
exports.removeLabel = removeLabel;
//# sourceMappingURL=TabLabelsFn.js.map