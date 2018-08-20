'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../column/actions');

var _selectors = require('../selectors');

var _crId = require('./crId');

var _crId2 = _interopRequireDefault(_crId);

var _appConf = require('../appConf');

var _appConf2 = _interopRequireDefault(_appConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _isMax = function _isMax(state, boardId) {
  return _selectors.sBoard.columnIds(state, boardId).length >= _appConf2.default.MAX_COLUMNS;
};

var columnIdMiddleware = function columnIdMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.ADD_COLUMN) {
        if (_isMax(store.getState(), action.boardId)) {
          return false;
        }
        action = (0, _extends3.default)({}, action, {
          columnId: (0, _crId2.default)(_appConf2.default.COLUMNS_PREFIX)
        });
      }
      return next(action);
    };
  };
};

exports.default = columnIdMiddleware;
//# sourceMappingURL=columnId.js.map