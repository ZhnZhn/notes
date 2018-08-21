'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _actions = require('../drawerMsg/actions');

var _crId = require('./crId');

var _crId2 = _interopRequireDefault(_crId);

var _appConf = require('../appConf');

var _appConf2 = _interopRequireDefault(_appConf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drawerMsgMiddleware = function drawerMsgMiddleware(store) {
  return function (next) {
    return function (action) {
      if (action.type === _actions.ACTION.ADD_DRAWER_MSG) {
        action = (0, _extends3.default)({}, action, {
          id: (0, _crId2.default)(_appConf2.default.DMSG_PREFIX)
        });
      }
      return next(action);
    };
  };
};

exports.default = drawerMsgMiddleware;
//# sourceMappingURL=drawerMsgId.js.map