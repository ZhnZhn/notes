import { ACTION } from '../board/actions'
import { sBoard } from '../selectors'

const canRemoveBoard = store => next => action => {
  if (action.type === ACTION.REMOVE_BOARD) {
    const columnIds = sBoard.columnIds(store.getState(), action.boardId)
    if (!Array.isArray(columnIds) ||
         columnIds.length !== 0) {        
       return false;
    }
  }
  return next(action);
};

export default canRemoveBoard
