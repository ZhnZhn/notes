'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  ADD_DRAWER_MSG: 'ADD_DRAWER_MSG',
  REMOVE_DRAWER_MSG: 'REMOVE_DRAWER_MSG'
};

var _formatTime = function _formatTime(n) {
  return n < 10 ? '0' + n : n;
};

var _crMsg = function _crMsg(msg) {
  var d = new Date();
  return _formatTime(d.getHours()) + ':' + _formatTime(d.getMinutes()) + ' ' + msg;
};

var addDrawerMsg = exports.addDrawerMsg = function addDrawerMsg(msg, id) {
  return {
    type: ACTION.ADD_DRAWER_MSG,
    id: id,
    msg: _crMsg(msg)
  };
};

var removeDrawerMsg = exports.removeDrawerMsg = function removeDrawerMsg(id) {
  return {
    type: ACTION.REMOVE_DRAWER_MSG,
    id: id
  };
};

var actions = {
  addDrawerMsg: addDrawerMsg,
  removeDrawerMsg: removeDrawerMsg
};

exports.default = actions;
//# sourceMappingURL=actions.js.map