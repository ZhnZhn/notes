import { addColumn } from '../column/actions'
import { showNotif } from '../modal/reducer'
import { sBoard } from '../selectors'
import crId from './crId'
import CONF from '../appConf'

const _isMax = (state, boardId) => sBoard
  .columnIds(state, boardId).length >= CONF.MAX_COLUMNS;

const columnIdMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === addColumn.type) {
    if (_isMax(getState(), action.payload.boardId)) {
      dispatch(showNotif(CONF.N_MAX_COLUMNS))
      return false;
    }
    const columnId = crId(CONF.COLUMNS_PREFIX);
    action.payload.columnId = columnId
    next(action);
    return columnId;
  }
  return next(action);
}

export default columnIdMiddleware
