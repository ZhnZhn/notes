import { removeColumn } from '../column/actions'
import { sColumn } from '../selectors'

const _isArr = Array.isArray

const canRemoveColumn = ({ getState }) => next => action => {
  if (action.type === removeColumn.type){
    const _noteIds = sColumn.noteIds(getState(), action.payload.columnId)
    if (!_isArr(_noteIds) || _noteIds.length !== 0) {
      return false;
    }
  }
  return next(action);
};

export default canRemoveColumn
