import fn from '../reducerFns'

const removeProp = fn.removeProp;

const filterNoteIds = (column, id) => fn
  .filterBy(column.noteIds, id);

const crColumn = (columnId, withAdd=true) => ({
  id: columnId,
  title: 'New Column',
  noteIds: [],
  withAdd: withAdd
});

const noteIdsTo = (column, noteIds) => ({
  ...column,
  noteIds
});

const moveInternal = (state, taskId, source, destination, from) => {
  const newNoteIds = [...from.noteIds]
  newNoteIds.splice(source.index, 1)
  newNoteIds.splice(destination.index, 0, taskId)
  return {
    ...state,
    [from.id] : noteIdsTo(from, newNoteIds)
  }
};

const moveExternal = (state, taskId, source, destination, from, to) => {
  const newFromNoteIds = [...from.noteIds]
  newFromNoteIds.splice(source.index, 1)
  const newToNoteIds = [...to.noteIds]
  newToNoteIds.splice(destination.index, 0, taskId)
  return {
    ...state,
    [from.id]: noteIdsTo(from, newFromNoteIds),
    [to.id]: noteIdsTo(to, newToNoteIds)
  }
};

export default {
  crColumn,
  removeProp,
  filterNoteIds,
  noteIdsTo,
  moveExternal,
  moveInternal
}
