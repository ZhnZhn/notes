// @flow
import fns from '../reducerFns'
import fDnDMoveFns from '../fDnDMoveFns'

const {
  setInObj,
  filterBy,
  removeProp
} = fns;

const filterNoteIds = (
  column /*: Topic */,
  id /*: string */
) /*: Array<string> */ => filterBy(
  column.noteIds,
  id
);

const crColumn = (
  columnId /*: string */,
  withAdd /*: boolean */ = true
) /*: Topic */ => ({
  id: columnId,
  title: 'New Topic',
  noteIds: [],
  withAdd: withAdd
});

const {
  idsTo,
  moveInternal,
  moveExternal
} = fDnDMoveFns('noteIds');

export default {
  setInObj,
  crColumn,
  removeProp,
  filterNoteIds,
  noteIdsTo: idsTo,
  moveExternal,
  moveInternal
}
