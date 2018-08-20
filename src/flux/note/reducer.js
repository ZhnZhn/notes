import { ACTION } from './actions'
import initialState from '../initialState'

import fns from '../reducerFns'

const { removeProp } = fns;

const _crNewNote = (noteId) => ({
  id: noteId,
  title: 'New Note'
});

const reducer = function(state=initialState.notes, action){
  switch(action.type){
    case ACTION.EDIT_NOTE_TITLE: {
      const { noteId, title } = action
      , note = state[noteId]
      , newNote = { ...note, title };
      return {
        ...state,
        [noteId]: newNote
      };
    }
    case ACTION.ADD_NOTE: {
      const { noteId } = action;
      return {
        ...state,
        [noteId]: _crNewNote(noteId)
      }
    }
    case ACTION.DELETE_NOTE: {
      const { noteId } = action;
      return removeProp(state, noteId);
    }
    default: return state;
  }
};

export default reducer
