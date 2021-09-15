import { createSlice } from '@reduxjs/toolkit';

const _crNewNote = (noteId) => ({
  id: noteId,
  title: 'New Note'
});


export const initialState = {
  //'n-1': { id: 'n-1', title: 'Note 1' },
}

const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote(state, action){
      const { noteId } = action.payload;
      state[noteId] = _crNewNote(noteId)
    },
    deleteNote(state, action){
      const { noteId } = action.payload;
      delete state[noteId];      
    },
    editNoteTitle(state, action){
      const { noteId, title } = action.payload;
      state[noteId].title = title
    },
    editNoteDescr(state, action){
      const { noteId, descr } = action.payload;
      state[noteId].descr = descr
    },
    editNoteLabels(state, action){
      const { noteId, labelsTo } = action.payload;
      state[noteId].labels = labelsTo
    }
  }
})

const { reducer, actions } = notesSlice

export const {
  editNoteTitle,
  editNoteDescr
} = actions

export default reducer
