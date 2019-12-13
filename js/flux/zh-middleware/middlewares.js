"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _boardId = _interopRequireDefault(require("./boardId"));

var _columnId = _interopRequireDefault(require("./columnId"));

var _noteId = _interopRequireDefault(require("./noteId"));

var _noteLabelId = _interopRequireDefault(require("./noteLabelId"));

var _appStorage = _interopRequireDefault(require("./appStorage"));

var _drawerMsgId = _interopRequireDefault(require("./drawerMsgId"));

var _canRemoveColumn = _interopRequireDefault(require("./canRemoveColumn"));

var _canRemoveBoard = _interopRequireDefault(require("./canRemoveBoard"));

var _noteTitleValidation = _interopRequireDefault(require("./noteTitleValidation"));

var middlewares = [_boardId["default"], _columnId["default"], _noteId["default"], _noteLabelId["default"], _appStorage["default"], _drawerMsgId["default"], _canRemoveColumn["default"], _canRemoveBoard["default"], _noteTitleValidation["default"]];
var _default = middlewares;
exports["default"] = _default;
//# sourceMappingURL=middlewares.js.map