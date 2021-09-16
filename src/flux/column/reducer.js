import { createSlice } from '@reduxjs/toolkit';

import {
  addNote,
  deleteNote,
  moveNote
} from '../note/actions';
import fns from './fns';

import initialState from '../initialState';

const {
  crColumn,
  moveExternal,
  moveInternal
} = fns;

/*
const initialState = {
  'c-1': {
    id: 'c-1',
    title: 'Topic 1',
    noteIds: [],
    withAdd: true
  },
  'c-2': {
    id: 'c-2',
    title: 'Topic 2',
    noteIds: []
  }
};
*/

const columnsSlice = createSlice({
  name: 'columns',
  initialState: initialState.columns,
  reducers: {
     editColumnTitle(state, action){
       const { columnId, title } = action.payload
       state[columnId].title = title
     },
     toggleColumn(state, action){
       const { columnId } = action.payload
       , column = state[columnId]
       state[columnId].isHide = !column.isHide
     },
     addColumn(state, action){
       const { columnId } = action.payload
       state[columnId] = crColumn(columnId)
     },
     removeColumn(state, action){
       const { columnId } = action.payload
       delete state[columnId]
     }
  },
  extraReducers: (builder) => {
    builder
      .addCase(addNote, (state, action) => {
        const { columnId, noteId } = action.payload
        state[columnId].noteIds.unshift(noteId)
      })
      .addCase(deleteNote, (state, action) => {
        const { columnId, noteId } = action.payload
        , column = state[columnId];
        column.noteIds = column.noteIds
          .filter(id => id !== noteId)
      })
      .addCase(moveNote, (state, action) => {
         const { draggableId, source, destination } = action.payload
         , from = state[source.droppableId]
         , to = state[destination.droppableId];

         if (from === to) {
           moveInternal(state, draggableId, source, destination, from)
         } else {
           moveExternal(state, draggableId, source, destination, from, to);
         }
      })
  }
})

const { actions, reducer } = columnsSlice;

export const {
  editColumnTitle,
  toggleColumn
} = actions

export default reducer
