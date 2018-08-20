import { ACTION } from '../note/actions'
import crId from './crId'
import { sColumn } from '../selectors'
import CONF from '../appConf'

const _isMax = (state, columnId) => sColumn
  .noteIds(state, columnId).length >= CONF.MAX_NOTES;

const taskIdMiddleware = store => next => action => {
  if (action.type === ACTION.ADD_NOTE) {
    if ( _isMax(store.getState(), action.columnId) ) {
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
