import { ACTION } from '../column/actions'
import { sColumn } from '../selectors'

const canRemoveColumn = store => next => action => {
  if (action.type === ACTION.REMOVE_COLUMN){
    const _noteIds = sColumn.noteIds(store.getState(), action.columnId)
    if (!Array.isArray(_noteIds) ||
        _noteIds.length !== 0) {
      return false;
    }
  }
  return next(action);
};

export default canRemoveColumn
