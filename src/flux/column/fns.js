// @flow
import fns from '../reducerFns'

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
  title: 'New Column',
  noteIds: [],
  withAdd: withAdd
});

const noteIdsTo = (
  column /*: Topic */,
  noteIds /*: Array<string> */
) /*: Topic */ => ({
  ...column,
  noteIds
});

const moveInternal = (
  state /*: TopicState */,
  taskId /*: string */,
  source /*: { index: number } */,
  destination /*: { index: number } */,
  from /*: Topic */
) /*: TopicState */ => {
  const newNoteIds = [...from.noteIds]
  newNoteIds.splice(source.index, 1)
  newNoteIds.splice(destination.index, 0, taskId)
  return {
    ...state,
    [from.id] : noteIdsTo(from, newNoteIds)
  }
};

const moveExternal = (
  state /*: TopicState */,
  taskId /*: string */,
  source /*: { index: number } */,
  destination /*: { index: number } */,
  from /*: Topic */,
  to /*: Topic */
) /*: TopicState */ => {
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
  setInObj,
  crColumn,
  removeProp,
  filterNoteIds,
  noteIdsTo,
  moveExternal,
  moveInternal
}
