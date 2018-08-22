import { ACTION } from '../column/actions'
import ma from '../modal/actions'
import { MD } from '../../component/dialogs/modalRouter'
import { sBoard } from '../selectors'
import crId from './crId'
import CONF from '../appConf'

const _isMax = (state, boardId) => sBoard
  .columnIds(state, boardId).length >= CONF.MAX_COLUMNS;

const columnIdMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === ACTION.ADD_COLUMN) {
    if (_isMax(getState(), action.boardId)) {
      dispatch(
        ma.showModal(MD.NOTIF, CONF.N_MAX_COLUMNS)
      )
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
