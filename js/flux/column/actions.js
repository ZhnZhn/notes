"use strict";

exports.__esModule = true;
exports.removeColumn = exports.moveColumn = exports.addColumn = void 0;

var _toolkit = require("@reduxjs/toolkit");

var addColumn = (0, _toolkit.createAction)("columns/addColumn");
exports.addColumn = addColumn;
var removeColumn = (0, _toolkit.createAction)("columns/removeColumn");
exports.removeColumn = removeColumn;
var moveColumn = (0, _toolkit.createAction)("columns/moveColumn");
exports.moveColumn = moveColumn;
//# sourceMappingURL=actions.js.map