'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _boardId = require('./boardId');

var _boardId2 = _interopRequireDefault(_boardId);

var _columnId = require('./columnId');

var _columnId2 = _interopRequireDefault(_columnId);

var _noteId = require('./noteId');

var _noteId2 = _interopRequireDefault(_noteId);

var _noteLabelId = require('./noteLabelId');

var _noteLabelId2 = _interopRequireDefault(_noteLabelId);

var _appStorage = require('./appStorage');

var _appStorage2 = _interopRequireDefault(_appStorage);

var _drawerMsgId = require('./drawerMsgId');

var _drawerMsgId2 = _interopRequireDefault(_drawerMsgId);

var _canRemoveColumn = require('./canRemoveColumn');

var _canRemoveColumn2 = _interopRequireDefault(_canRemoveColumn);

var _canRemoveBoard = require('./canRemoveBoard');

var _canRemoveBoard2 = _interopRequireDefault(_canRemoveBoard);

var _noteTitleValidation = require('./noteTitleValidation');

var _noteTitleValidation2 = _interopRequireDefault(_noteTitleValidation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var middlewares = [_boardId2.default, _columnId2.default, _noteId2.default, _noteLabelId2.default, _appStorage2.default, _drawerMsgId2.default, _canRemoveColumn2.default, _canRemoveBoard2.default, _noteTitleValidation2.default];

exports.default = middlewares;
//# sourceMappingURL=middlewares.js.map