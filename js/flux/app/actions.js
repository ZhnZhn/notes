"use strict";

exports.__esModule = true;
exports.cleanStorage = exports.saveBoard = void 0;

var _toolkit = require("@reduxjs/toolkit");

var saveBoard = (0, _toolkit.createAction)("app/saveBoard");
exports.saveBoard = saveBoard;
var cleanStorage = (0, _toolkit.createAction)("app/cleanStorage");
exports.cleanStorage = cleanStorage;
//# sourceMappingURL=actions.js.map