"use strict";

exports.__esModule = true;
exports.default = void 0;
var _isTypeFn = require("../../utils/isTypeFn");
const getNodeDescr = note => (0, _isTypeFn.isObj)(note) ? note.descr || 'Edit description...' : 'This note is not exist.';
var _default = exports.default = getNodeDescr;
//# sourceMappingURL=getNoteDescr.js.map