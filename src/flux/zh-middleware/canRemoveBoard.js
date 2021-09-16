import { removeBoard } from '../board/actions';
import { sBoard } from '../selectors';

const _isArr = Array.isArray;

const canRemoveBoard = ({ getState }) => next => action => {
  if (action.type === removeBoard.type) {
    const columnIds = sBoard.columnIds(getState(), action.payload.boardId)
    if (!_isArr(columnIds) || columnIds.length !== 0) {
       return false;
    }
  }
  return next(action);
};

export default canRemoveBoard
