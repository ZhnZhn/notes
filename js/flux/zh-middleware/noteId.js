'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../note/actions');

var _crId = require('./crId');

var _crId2 = _interopRequireDefault(_crId);

var _selectors = require('../selectors');

var _appConf = require('../appConf');

var _appConf2 = _interopRequireDefault(_appConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isMax = function _isMax(state, columnId) {
  return _selectors.sColumn.noteIds(state, columnId).length >= _appConf2.default.MAX_NOTES;
};

var taskIdMiddleware = function taskIdMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.ADD_NOTE) {
        if (_isMax(store.getState(), action.columnId)) {
          return false;
        }
        action = (0, _extends3.default)({}, action, {
          noteId: (0, _crId2.default)(_appConf2.default.NOTES_PREFIX)
        });
      }
      return next(action);
    };
  };
};

exports.default = taskIdMiddleware;
//# sourceMappingURL=noteId.js.map