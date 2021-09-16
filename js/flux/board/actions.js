"use strict";

exports.__esModule = true;
exports.setCurrentBoard = exports.removeBoard = exports.addBoard = void 0;

var _toolkit = require("@reduxjs/toolkit");

var addBoard = (0, _toolkit.createAction)("boards/addBoard");
exports.addBoard = addBoard;
var removeBoard = (0, _toolkit.createAction)("boards/removeBoard");
exports.removeBoard = removeBoard;
var setCurrentBoard = (0, _toolkit.createAction)("boards/setCurrentBoard");
exports.setCurrentBoard = setCurrentBoard;
//# sourceMappingURL=actions.js.map