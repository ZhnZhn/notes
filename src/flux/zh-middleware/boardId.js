import { ACTION } from '../board/actions'
import crId from './crId'
import { sApp } from '../selectors'
import CONF from '../appConf'

const _isMax = (state) => sApp
  .boardIds(state).length >= CONF.MAX_BOARDS;

const boardIdMiddleware = store => next => action => {
  if (action.type === ACTION.ADD_BOARD) {
    if ( _isMax(store.getState()) ) {
      return false;
    }
    action  = {
      ...action,
      boardId: crId(CONF.BOARDS_PREFIX)
     }
  }
  return next(action);
};

export default boardIdMiddleware
