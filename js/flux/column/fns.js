'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _extends4 = require('babel-runtime/helpers/extends');

var _extends5 = _interopRequireDefault(_extends4);

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var removeProp = _reducerFns2.default.removeProp;

var filterNoteIds = function filterNoteIds(column, id) {
  return _reducerFns2.default.filterBy(column.noteIds, id);
};

var crColumn = function crColumn(columnId) {
  var withAdd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return {
    id: columnId,
    title: 'New Column',
    noteIds: [],
    withAdd: withAdd
  };
};

var noteIdsTo = function noteIdsTo(column, noteIds) {
  return (0, _extends5.default)({}, column, {
    noteIds: noteIds
  });
};

var moveInternal = function moveInternal(state, taskId, source, destination, from) {
  var newNoteIds = [].concat((0, _toConsumableArray3.default)(from.noteIds));
  newNoteIds.splice(source.index, 1);
  newNoteIds.splice(destination.index, 0, taskId);
  return (0, _extends5.default)({}, state, (0, _defineProperty3.default)({}, from.id, noteIdsTo(from, newNoteIds)));
};

var moveExternal = function moveExternal(state, taskId, source, destination, from, to) {
  var _extends3;

  var newFromNoteIds = [].concat((0, _toConsumableArray3.default)(from.noteIds));
  newFromNoteIds.splice(source.index, 1);
  var newToNoteIds = [].concat((0, _toConsumableArray3.default)(to.noteIds));
  newToNoteIds.splice(destination.index, 0, taskId);
  return (0, _extends5.default)({}, state, (_extends3 = {}, (0, _defineProperty3.default)(_extends3, from.id, noteIdsTo(from, newFromNoteIds)), (0, _defineProperty3.default)(_extends3, to.id, noteIdsTo(to, newToNoteIds)), _extends3));
};

exports.default = {
  crColumn: crColumn,
  removeProp: removeProp,
  filterNoteIds: filterNoteIds,
  noteIdsTo: noteIdsTo,
  moveExternal: moveExternal,
  moveInternal: moveInternal
};
//# sourceMappingURL=fns.js.map