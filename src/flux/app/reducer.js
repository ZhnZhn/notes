import { createSlice } from "@reduxjs/toolkit";

import { addBoard, removeBoard, setCurrentBoard } from '../board/actions';
import initialState from '../initialState';

/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'GREY'
};
*/

const appSlice = createSlice({
  name: "app",
  initialState: initialState.app,
  reducers: {
    setUiTheme(state, action) {
      const { uiTheme } = action.payload;
      state.uiTheme = uiTheme
    }
  },
  extraReducers: builder => builder
    .addCase(addBoard, (state, action) =>{
      const { boardId } = action.payload;
      state.boardIds.push(boardId)
    })
    .addCase(removeBoard, (state, action) =>{
      const { boardId } = action.payload;
      state.boardIds = state.boardIds
        .filter(id => id !== boardId)
    })
    .addCase(setCurrentBoard, (state, action) => {
      const { boardId } = action.payload;      
      state.boardId = boardId
    })
})

const { actions, reducer } = appSlice;

export const { setUiTheme } = actions

export default reducer
