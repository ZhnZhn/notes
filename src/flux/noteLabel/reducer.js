import { createSlice } from '@reduxjs/toolkit';
import { editNoteLabels } from '../note/actions';

import initialState from '../initialState';

const noteLabelsSlice = createSlice({
  name: "noteLabels",
  initialState: initialState.noteLabels,
  extraReducers: builder => builder
    .addCase(editNoteLabels, (state, action) => {
      const { newLabels } = action.payload
      newLabels.forEach(item => {
        state[item.id] = item
      })
    })
});

const { reducer } = noteLabelsSlice

export default reducer
