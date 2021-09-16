"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _fDnDMoveFns2 = _interopRequireDefault(require("../fDnDMoveFns"));

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
    moveInternal = _fDnDMoveFns.moveInternal,
    moveExternal = _fDnDMoveFns.moveExternal;

var _default = {
  crColumn: crColumn,
  moveExternal: moveExternal,
  moveInternal: moveInternal
};
exports["default"] = _default;
//# sourceMappingURL=fns.js.map