'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../app/actions');

var _actions2 = require('../drawerMsg/actions');

var _actions3 = _interopRequireDefault(_actions2);

var _appConf = require('../appConf');

var _appConf2 = _interopRequireDefault(_appConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appStorage = function appStorage(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      switch (action.type) {
        case _actions.ACTION.SAVE_BOARD:
          {
            try {
              window.localStorage.setItem(_appConf2.default.STORAGE_KEY, JSON.stringify((0, _extends3.default)({}, getState(), {
                drawerMsg: []
              })));
              dispatch(_actions3.default.addDrawerMsg(_appConf2.default.MSG_SAVED));
              return true;
            } catch (e) {
              console.log(e.msg);
              return false;
            }
          }
        case _actions.ACTION.CLEAN_STORAGE:
          {
            try {
              window.localStorage.removeItem(_appConf2.default.STORAGE_KEY);
              dispatch(_actions3.default.addDrawerMsg(_appConf2.default.MSG_CLEANED));
              return true;
            } catch (e) {
              console.log(e.msg);
              return false;
            }
          }
        default:
          return next(action);
      }
    };
  };
};

exports.default = appStorage;
//# sourceMappingURL=appStorage.js.map