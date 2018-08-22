import { ACTION } from '../board/actions'
import ma from '../modal/actions'
import { MD } from '../../component/dialogs/modalRouter'
import crId from './crId'
import { sApp } from '../selectors'
import CONF from '../appConf'

const _isMax = (state) => sApp
  .boardIds(state).length >= CONF.MAX_BOARDS;

const boardIdMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === ACTION.ADD_BOARD) {
    if ( _isMax(getState()) ) {
      dispatch(
        ma.showModal(MD.NOTIF, CONF.N_MAX_BOARDS)
      )
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
