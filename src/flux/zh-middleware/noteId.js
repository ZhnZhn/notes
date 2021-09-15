import { ACTION } from '../note/actions'
import { showNotif } from '../modal/reducer'
import crId from './crId'
import { sColumn } from '../selectors'
import CONF from '../appConf'

const _isMax = (state, columnId) => sColumn
  .noteIds(state, columnId).length >= CONF.MAX_NOTES;

const taskIdMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === ACTION.ADD_NOTE) {
    if ( _isMax(getState(), action.columnId) ) {
      dispatch(showNotif(CONF.N_MAX_NOTES))
      return false;
    }
    action = {
      ...action,
      noteId: crId(CONF.NOTES_PREFIX)
    }
  }
  return next(action);
};

export default taskIdMiddleware
