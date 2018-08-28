import { ACTION } from './actions'
import { ACTION as BA } from '../board/actions'
import initialState from '../initialState'

import fns from '../reducerFns'

const { filterBy } = fns;

/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'GREY'
};
*/

const reducer = function(state=initialState.app, action) {
  switch (action.type) {
    case ACTION.SET_UI_THEME: {
      const { uiTheme } = action;
      return {
        ...state,
        uiTheme
      };
    }
    case BA.SET_BOARD_CURRENT: {
      const { boardId } = action;
      return {
        ...state,
        boardId
      };
    }
    case BA.ADD_BOARD: {
      const { boardId } = action
      , newBoardIds = [
         ...state.boardIds,
         boardId
       ];
      return {
        ...state,
        boardIds: newBoardIds
      };
    }
    case BA.REMOVE_BOARD: {
      const { boardId } = action;
      if (state.boardId === boardId) {
        state.boardId = null
      }
      return {
        ...state,
        boardIds: filterBy(state.boardIds, boardId)
      };
    }
    default: return state;
  }
};

export default reducer
