'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _fIdsTo = require('./fIdsTo');

var _fIdsTo2 = _interopRequireDefault(_fIdsTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _crMoveInternal = function _crMoveInternal(propName, idsTo) {
  return function (state /*: {} */
  , id /*: string */
  , source /*: { index: number } */
  , destination /*: { index: number } */
  , from /*: {} */
  ) {
    var newIds = [].concat((0, _toConsumableArray3.default)(from[propName]));
    newIds.splice(source.index, 1);
    newIds.splice(destination.index, 0, id);
    return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, from.id, idsTo(from, newIds)));
  };
};


var _crMoveExternal = function _crMoveExternal(propName, idsTo) {
  return function (state /*: {} */
  , id /*: string */
  , source /*: { index: number } */
  , destination /*: { index: number } */
  , from /*: {} */
  , to /*: {} */
  ) /*: {} */{
    var _extends3;

    var newFromIds = [].concat((0, _toConsumableArray3.default)(from[propName]));
    newFromIds.splice(source.index, 1);
    var newToIds = [].concat((0, _toConsumableArray3.default)(to[propName]));
    newToIds.splice(destination.index, 0, id);
    return (0, _extends5.default)({}, state, (_extends3 = {}, (0, _defineProperty3.default)(_extends3, from.id, idsTo(from, newFromIds)), (0, _defineProperty3.default)(_extends3, to.id, idsTo(to, newToIds)), _extends3));
  };
};

var fDnDMoveFns = function fDnDMoveFns(propName /*: string */) {
  var _idsTo = (0, _fIdsTo2.default)(propName);
  return {
    idsTo: _idsTo,
    moveInternal: _crMoveInternal(propName, _idsTo),
    moveExternal: _crMoveExternal(propName, _idsTo)
  };
};

exports.default = fDnDMoveFns;
//# sourceMappingURL=fDnDMoveFns.js.map