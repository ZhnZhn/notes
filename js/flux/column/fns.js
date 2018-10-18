'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducerFns = require('../reducerFns');

var _reducerFns2 = _interopRequireDefault(_reducerFns);

var _fDnDMoveFns2 = require('../fDnDMoveFns');

var _fDnDMoveFns3 = _interopRequireDefault(_fDnDMoveFns2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setInObj = _reducerFns2.default.setInObj,
    filterBy = _reducerFns2.default.filterBy,
    removeProp = _reducerFns2.default.removeProp;


var filterNoteIds = function filterNoteIds(column /*: Topic */
, id /*: string */
) {
  return (/*: Array<string> */filterBy(column.noteIds, id)
  );
};

var crColumn = function crColumn(columnId /*: string */
) {
  var withAdd /*: boolean */ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  return (/*: Topic */{
      id: columnId,
      title: 'New Topic',
      noteIds: [],
      withAdd: withAdd
    }
  );
};

var _fDnDMoveFns = (0, _fDnDMoveFns3.default)('noteIds'),
    idsTo = _fDnDMoveFns.idsTo,
    moveInternal = _fDnDMoveFns.moveInternal,
    moveExternal = _fDnDMoveFns.moveExternal;

exports.default = {
  setInObj: setInObj,
  crColumn: crColumn,
  removeProp: removeProp,
  filterNoteIds: filterNoteIds,
  noteIdsTo: idsTo,
  moveExternal: moveExternal,
  moveInternal: moveInternal
};
//# sourceMappingURL=fns.js.map