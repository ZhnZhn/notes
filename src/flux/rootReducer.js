import { combineReducers } from '@reduxjs/toolkit';

import app from './app/reducer';
import drawerMsg from './drawerMsg/reducer';
import modal from './modal/reducer';
import boards from './board/reducer';
import notes from './note/reducer';
import noteLabels from './noteLabel/reducer';
import columns from './column/reducer';

const rootReducer = combineReducers({
  app,
  drawerMsg,
  modal,
  boards,
  notes,
  noteLabels,
  columns
});

export default rootReducer
