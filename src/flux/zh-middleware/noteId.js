import { addNote } from '../note/actions'
import { showNotif } from '../modal/reducer'
import crId from './crId'
import { sColumn } from '../selectors'
import CONF from '../appConf'

const _isMax = (state, columnId) => sColumn
  .noteIds(state, columnId).length >= CONF.MAX_NOTES;

const taskIdMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === addNote.type) {
    const { columnId } = action.payload
    if ( _isMax(getState(), columnId) ) {
      dispatch(showNotif(CONF.N_MAX_NOTES))
      return false;
    }
    action.payload.noteId = crId(CONF.NOTES_PREFIX)
  }
  return next(action);
};

export default taskIdMiddleware
