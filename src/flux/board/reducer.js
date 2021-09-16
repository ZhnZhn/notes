import { createSlice } from '@reduxjs/toolkit';

import {
  addColumn,
  removeColumn,
  moveColumn
} from '../column/actions';

import initialState from '../initialState';
import fDnDMoveFns from '../fDnDMoveFns';

const {
  moveInternal,
  moveExternal
} = fDnDMoveFns('columnIds');

export const crBoard = id => ({
  id,
  title: 'New Board',
  columnIds: []
})

const boardsSlice = createSlice({
  name: "boards",
  initialState: initialState.boards,
  reducers: {
    editBoardTitle(state, action){
      const { boardId, title } = action.payload
      state[boardId].title = title
    },
    addBoard(state, action){
      const { boardId } = action.payload;
      state[boardId] = crBoard(boardId);
    },
    removeBoard(state, action){
      const { boardId } = action.payload;
      delete state[boardId]
    }
  },
  extraReducers: builder => builder
     .addCase(addColumn, (state, action) => {
        const { boardId, columnId } = action.payload
        state[boardId].columnIds.push(columnId)
     })
     .addCase(removeColumn, (state, action) => {
       const { boardId, columnId } = action.payload
       , board = state[boardId];
       board.columnIds = board.columnIds
         .filter(id => id !== columnId)
     })
     .addCase(moveColumn, (state, action) => {
       const { draggableId, source, destination } = action.payload
       , from = state[source.droppableId]
       , to = state[destination.droppableId];
       if (from === to) {
         moveInternal(state, draggableId, source, destination, from)
       } else {
         moveExternal(state, draggableId, source, destination, from, to);
       }
     })
})

const { actions, reducer } = boardsSlice

export const { editBoardTitle } = actions

export default reducer
