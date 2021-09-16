import { addBoard } from '../board/actions'
import { showNotif } from '../modal/reducer'
import crId from './crId'
import { sApp } from '../selectors'
import CONF from '../appConf'

const _isMax = state => sApp
  .boardIds(state).length >= CONF.MAX_BOARDS;

const boardIdMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === addBoard.type) {
    if ( _isMax(getState()) ) {
      dispatch(showNotif(CONF.N_MAX_BOARDS))
      return false;
    }
    const boardId = crId(CONF.BOARDS_PREFIX)
    action.payload = { boardId }
    next(action)
    return boardId;
  }
  return next(action);
};

export default boardIdMiddleware
