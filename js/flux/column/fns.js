"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _reducerFns = _interopRequireDefault(require("../reducerFns"));

var _fDnDMoveFns2 = _interopRequireDefault(require("../fDnDMoveFns"));

var setInObj = _reducerFns["default"].setInObj,
    filterBy = _reducerFns["default"].filterBy,
    removeProp = _reducerFns["default"].removeProp;

var filterNoteIds = function filterNoteIds(column
/*: Topic */
, id
/*: string */
) {
  return (
    /*: Array<string> */
    filterBy(column.noteIds, id)
  );
};

var crColumn = function crColumn(columnId
/*: string */
, withAdd
/*: boolean */
) {
  if (withAdd
  /*: boolean */
  === void 0) {
    withAdd
    /*: boolean */
    = true;
  }

  return (
    /*: Topic */
    {
      id: columnId,
      title: 'New Topic',
      noteIds: [],
      withAdd: withAdd
    }
  );
};

var _fDnDMoveFns = (0, _fDnDMoveFns2["default"])('noteIds'),
    idsTo = _fDnDMoveFns.idsTo,
    moveInternal = _fDnDMoveFns.moveInternal,
    moveExternal = _fDnDMoveFns.moveExternal;

var _default = {
  setInObj: setInObj,
  crColumn: crColumn,
  removeProp: removeProp,
  filterNoteIds: filterNoteIds,
  noteIdsTo: idsTo,
  moveExternal: moveExternal,
  moveInternal: moveInternal
};
exports["default"] = _default;
//# sourceMappingURL=fns.js.map