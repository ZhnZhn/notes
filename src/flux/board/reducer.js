import { ACTION } from './actions'
import { ACTION as CA } from '../column/actions'
import initState from '../initialState'

import fns from '../reducerFns'
import fDnDMoveFns from '../fDnDMoveFns'

const {
  setInObj,
  removeProp,
  filterBy
} = fns;
const {
  moveInternal,
  moveExternal
} = fDnDMoveFns('columnIds');


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
    case CA.MOVE_COLUMN: {
      const { columnId, source, destination } = action
      , from = state[source.droppableId]
      , to = state[destination.droppableId];
      return from === to
        ? moveInternal(state, columnId, source, destination, from)
        : moveExternal(state, columnId, source, destination, from, to);
    }
    default: return state;
  }
};

export default reducer
