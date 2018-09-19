import { ACTION } from './actions'
import { ACTION as TA } from '../note/actions'
import initState from '../initialState'
import fns from './fns'

const {
  setInObj,
  crColumn,
  noteIdsTo, filterNoteIds,
  removeProp,
  moveExternal, moveInternal
} = fns;

const reducer = function(
  state /*: TopicState */=initState.columns,
  action /*: TopicAction */
) /*: TopicState */ {
  switch(action.type){
    case ACTION.EDIT_COLUMN_TITLE: {
      const { columnId, title } = action;
      return setInObj(state, columnId, {
        ...state[columnId],
        title
      });
    }
    case ACTION.ADD_COLUMN: {
      const { columnId } = action;
      return setInObj(state, columnId,
        crColumn(columnId)
      );
    }
    case ACTION.REMOVE_COLUMN: {
      const { columnId } = action;
      return removeProp(state, columnId);
    }
    case ACTION.TOGGLE_COLUMN: {
      const { columnId } = action
      , column = state[columnId];
      return setInObj(state, columnId, {
        ...column,
        isHide: !column.isHide
      });
    }

    case TA.MOVE_NOTE: {
      const { noteId, source, destination } = action
      , from = state[source.droppableId]
      , to = state[destination.droppableId];
      return from === to
        ? moveInternal(state, noteId, source, destination, from)
        : moveExternal(state, noteId, source, destination, from, to);
    }
    case TA.DELETE_NOTE: {
      const { columnId, noteId } = action
        , column = state[columnId]
        , newNodeIds = filterNoteIds(column, noteId);
      return setInObj(state, columnId,
        noteIdsTo(column, newNodeIds)
      );
    }
    case TA.ADD_NOTE: {
      const { columnId, noteId } = action
      , column = state[columnId]
      , newNoteIds = [noteId, ...column.noteIds];
      return setInObj(state, columnId,
        noteIdsTo(column, newNoteIds)
      );      
    }

    default: return state;
  }
};

export default reducer
