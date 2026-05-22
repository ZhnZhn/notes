"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _actions = require("../note/actions");
var _reducer = require("../modal/reducer");
var _crId = _interopRequireDefault(require("./crId"));
var _selectors = require("../selectors");
var _appConf = _interopRequireDefault(require("../appConf"));
const _isMax = (state, columnId) => (0, _selectors.selectNoteIds)(state, columnId).length >= _appConf.default.MAX_NOTES;
const taskIdMiddleware = _ref => {
  let {
    getState,
    dispatch
  } = _ref;
  return next => action => {
    if (action.type === _actions.addNote.type) {
      const {
        columnId
      } = action.payload;
      if (_isMax(getState(), columnId)) {
        dispatch((0, _reducer.showNotif)(_appConf.default.N_MAX_NOTES));
        return false;
      }
      const noteId = (0, _crId.default)(_appConf.default.NOTES_PREFIX);
      action.payload.noteId = noteId;
      next(action);
      return noteId;
    }
    return next(action);
  };
};
var _default = exports.default = taskIdMiddleware;
//# sourceMappingURL=noteId.js.map