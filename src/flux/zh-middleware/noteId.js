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
    const noteId = crId(CONF.NOTES_PREFIX)
    action.payload.noteId = noteId
    next(action)
    return noteId;
  }
  return next(action);
};

export default taskIdMiddleware
