'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../app/actions');

var _appConf = require('../appConf');

var _appConf2 = _interopRequireDefault(_appConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appStorage = function appStorage(store) {
  return function (next) {
    return function (action) {
      switch (action.type) {
        case _actions.ACTION.SAVE_BOARD:
          {
            try {
              window.localStorage.setItem(_appConf2.default.STORAGE_KEY, JSON.stringify(store.getState()));
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