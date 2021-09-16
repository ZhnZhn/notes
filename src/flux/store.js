import { configureStore } from '@reduxjs/toolkit';

import CONF from './appConf'
import rootReducer from './rootReducer'
import initialState from './initialState'
import middlewares from './zh-middleware/middlewares'

const _middlewares = [
  ...middlewares
];

/*eslint-disable no-undef, no-console*/
if (process.env.NODE_ENV === 'development'){
/*eslint-enable no-undef, no-console*/
    const logger = store => next => action => {
      let result;
      try {
        console.group('dispatching', action)
        console.log('before', store.getState())
        result = next(action)
        console.log('after', store.getState());
        console.groupEnd();
        return result;
      } catch (err){
        console.log(err);
        return result;
      }
    }
    _middlewares.push(logger)
 }

const _getInitialState = () => {
  let _initialState;
  try {
    const _str = window.localStorage
      .getItem(CONF.STORAGE_KEY);
    if (_str) {
      _initialState = JSON.parse(_str)
    }
  } catch(e) {
     console.log(e.msg)
  }
  return _initialState || initialState;
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: _getInitialState(),
  /*eslint-disable no-undef, no-console*/
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => process.env.NODE_ENV === 'development'
     ? getDefaultMiddleware().concat(_middlewares)
     : _middlewares
  /*eslint-enable no-undef, no-console*/
});

export default store
