"use strict";

exports.__esModule = true;
exports["default"] = exports.removeDrawerMsg = exports.addDrawerMsg = exports.ACTION = void 0;
var ACTION = {
  ADD_DRAWER_MSG: 'ADD_DRAWER_MSG',
  REMOVE_DRAWER_MSG: 'REMOVE_DRAWER_MSG'
};
exports.ACTION = ACTION;

var _formatTime = function _formatTime(n
/*: number */
) {
  return (
    /*: string */
    n < 10 ? "0" + n : "" + n
  );
};

var _crMsg = function _crMsg(msg
/*: string */
)
/*: string */
{
  var d = new Date();
  return _formatTime(d.getHours()) + ":" + _formatTime(d.getMinutes()) + " " + msg;
};

var addDrawerMsg = function addDrawerMsg(msg
/*: string */
, id
/*: string */
) {
  return {
    type: ACTION.ADD_DRAWER_MSG,
    id: id,
    msg: _crMsg(msg)
  };
};

exports.addDrawerMsg = addDrawerMsg;

var removeDrawerMsg = function removeDrawerMsg(id
/*: string */
) {
  return {
    type: ACTION.REMOVE_DRAWER_MSG,
    id: id
  };
};
/*::
export type DrawerMsgAction =
 | $Call<typeof addDrawerMsg, string, string>
 | $Call<typeof removeDrawerMsg, string>
*/


exports.removeDrawerMsg = removeDrawerMsg;
var actions = {
  addDrawerMsg: addDrawerMsg,
  removeDrawerMsg: removeDrawerMsg
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map