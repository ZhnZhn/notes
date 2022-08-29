"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fIdsTo = _interopRequireDefault(require("./fIdsTo"));

var _crMoveInternal = function _crMoveInternal(propName, idsTo) {
  return function (state
  /*: {} */
  , id
  /*: string */
  , source
  /*: { index: number } */
  , destination
  /*: { index: number } */
  , from
  /*: { id: string } */
  ) {
    var newIds = [].concat(from[propName]);
    newIds.splice(source.index, 1);
    newIds.splice(destination.index, 0, id);
    state[from.id] = idsTo(from, newIds);
  };
};

var _crMoveExternal = function _crMoveExternal(propName, idsTo) {
  return function
    /*: {} */
  (state
  /*: {} */
  , id
  /*: string */
  , source
  /*: { index: number } */
  , destination
  /*: { index: number } */
  , from
  /*: { id: string } */
  , to
  /*: { id: string } */
  ) {
    var newFromIds = [].concat(from[propName]);
    newFromIds.splice(source.index, 1);
    var newToIds = [].concat(to[propName]);
    newToIds.splice(destination.index, 0, id);
    state[from.id] = idsTo(from, newFromIds);
    state[to.id] = idsTo(to, newToIds);
  };
};

var fDnDMoveFns = function
  /*: {} */
fDnDMoveFns(propName
/*: string */
) {
  var _idsTo = (0, _fIdsTo["default"])(propName);

  return {
    idsTo: _idsTo,
    moveInternal: _crMoveInternal(propName, _idsTo),
    moveExternal: _crMoveExternal(propName, _idsTo)
  };
};

var _default = fDnDMoveFns;
exports["default"] = _default;
//# sourceMappingURL=fDnDMoveFns.js.map