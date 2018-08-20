import { combineReducers } from 'redux'

import app from './app/reducer'
import boards from './board/reducer'
import notes from './note/reducer'
import columns from './column/reducer'

const rootReducer = combineReducers({
  app,
  boards,
  notes,
  columns
});

export default rootReducer
