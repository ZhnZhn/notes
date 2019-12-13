"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _actions = require("../app/actions");

var _actions2 = _interopRequireDefault(require("../drawerMsg/actions"));

var _appConf = _interopRequireDefault(require("../appConf"));

var appStorage = function appStorage(_ref) {
  var getState = _ref.getState,
      dispatch = _ref.dispatch;
  return function (next) {
    return function (action) {
      switch (action.type) {
        case _actions.ACTION.SAVE_BOARD:
          {
            try {
              window.localStorage.setItem(_appConf["default"].STORAGE_KEY, JSON.stringify((0, _extends2["default"])({}, getState(), {
                drawerMsg: [],
                modal: {
                  id: null,
                  data: null
                }
              })));
              dispatch(_actions2["default"].addDrawerMsg(_appConf["default"].MSG_SAVED));
              return true;
            } catch (e) {
              dispatch(_actions2["default"].addDrawerMsg(_appConf["default"].MSG_SAVE_FAIL));
              console.log(e.msg);
              return false;
            }
          }

        case _actions.ACTION.CLEAN_STORAGE:
          {
            try {
              window.localStorage.removeItem(_appConf["default"].STORAGE_KEY);
              dispatch(_actions2["default"].addDrawerMsg(_appConf["default"].MSG_CLEANED));
              return true;
            } catch (e) {
              dispatch(_actions2["default"].addDrawerMsg(_appConf["default"].MSG_CLEAN_FAIL));
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

var _default = appStorage;
exports["default"] = _default;
//# sourceMappingURL=appStorage.js.map