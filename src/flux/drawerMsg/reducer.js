import { createSlice } from '@reduxjs/toolkit';

import initialState from '../initialState';
import fns from './fns';

const { crMsg } = fns;

const drawerSlice = createSlice({
  name: "drawerMsg",
  initialState: initialState.drawerMsg,
  reducers: {
    addDrawerMsg(state, action){
      const { id, msg } = action.payload;
      state.unshift(crMsg(id, msg))
    },
    removeDrawerMsg(state, action){
      const { id } = action.payload;
      return state.filter(item => item.id !== id);
    }
  }
});

const { actions, reducer } = drawerSlice;

export const { addDrawerMsg, removeDrawerMsg } = actions

export default reducer
