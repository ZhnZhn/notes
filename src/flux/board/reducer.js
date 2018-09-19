import { ACTION } from './actions'
import { ACTION as CA } from '../column/actions'
import initState from '../initialState'

import fns from '../reducerFns'

const {
  setInObj,
  removeProp,
  filterBy
} = fns;

/*
boards: {
  'b-1': {
    id: 'b-1',
    title: 'Board 1',
    columnIds: ['c-1','c-2']
  }
}
*/

const reducer = function (
  state /*: BoardState */=initState.boards,
  action /*: BoardAction */
) /*: BoardState */ {
  switch(action.type){
    case ACTION.EDIT_BOARD_TITLE: {
      const { boardId, title } = action
         , newBoard = {...state[boardId], title };
      return setInObj(state, boardId, newBoard)
    }
    case ACTION.ADD_BOARD: {
      const { boardId } = action;
      return setInObj(state, boardId, {
        id: boardId,
        title: 'New Board',
        columnIds: []
      });
    }
    case ACTION.REMOVE_BOARD: {
      const { boardId } = action;
      return removeProp(state, boardId);
    }
    case CA.ADD_COLUMN: {
      const { boardId, columnId } = action
      , oldBoard = state[boardId]
      , newBoard = {
        ...oldBoard,
        columnIds: [
          ...oldBoard.columnIds
          , columnId
        ]
      }
      return setInObj(state, boardId, newBoard);
    }
    case CA.REMOVE_COLUMN:{
      const { boardId, columnId } = action
      , oldBoard = state[boardId];
      return setInObj(state, boardId, {
        ...oldBoard,
        columnIds: filterBy(oldBoard.columnIds, columnId)
      });
    }
    default: return state;
  }
};

export default reducer
