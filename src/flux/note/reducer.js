import { ACTION } from './actions'
import initialState from '../initialState'

import fns from '../reducerFns'

const {
  setInObj,
  removeProp
} = fns;

const _crNewNote = (noteId) => ({
  id: noteId,
  title: 'New Note'
});

const reducer = function(
  state /*: NoteState */=initialState.notes,
  action /*: NoteAction */
) /*: NoteState */ {
  switch(action.type){
    case ACTION.EDIT_NOTE_TITLE: {
      const { noteId, title } = action
      , note = state[noteId]
      , newNote = { ...note, title };
      return setInObj(state, noteId, newNote);
    }
    case ACTION.EDIT_NOTE_DESCR: {
      const { noteId, descr } = action
      , note = state[noteId]
      , newNote = { ...note, descr };
      return setInObj(state, noteId, newNote);      
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
