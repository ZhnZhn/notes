import { ACTION } from '../column/actions'
import { sBoard } from '../selectors'
import crId from './crId'
import CONF from '../appConf'

const _isMax = (state, boardId) => sBoard
  .columnIds(state, boardId).length >= CONF.MAX_COLUMNS;

const columnIdMiddleware = store => next => action => {
  if (action.type === ACTION.ADD_COLUMN) {
    if (_isMax(store.getState(), action.boardId)) {
      return false;
    }
    action = {
      ...action,
      columnId: crId(CONF.COLUMNS_PREFIX)
    }
  }
  return next(action);
}

export default columnIdMiddleware
