import { configureStore } from '@reduxjs/toolkit';

import CONF from './appConf'
import rootReducer from './rootReducer'
import initialState from './initialState'
import middlewares from './zh-middleware/middlewares'

const _middlewares = [
  ...middlewares
];

/*eslint-disable no-undef*/
if (process.env.NODE_ENV === 'development'){
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
/*eslint-enable no-undef*/
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
  /*eslint-disable no-undef*/
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => process.env.NODE_ENV === 'development'
     ? getDefaultMiddleware().concat(_middlewares)
     : _middlewares
  /*eslint-enable no-undef*/
});

export default store
