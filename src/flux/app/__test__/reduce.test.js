import reducer, { setUiTheme } from '../reducer';
import {
  addBoard,
  removeBoard,
  setCurrentBoard
} from '../../board/actions';

import initialState from '../../initialState';
import store from '../../store';

const { getState, dispatch } = store;

const _selectApp = () => getState().app;

/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
  uiTheme: 'DARK'
};
*/

describe('reducer app', ()=>{
  test('should init to initialState', ()=>{
    expect(reducer(undefined, {}))
      .toEqual(initialState.app)
  })

  test('should handle app actions correctly', ()=>{
    const uiTheme = "SAND"
    dispatch(setUiTheme({uiTheme}))
    expect(_selectApp().uiTheme).toBe(uiTheme)
  })

  test('should handle board actions correctly', ()=>{
    const initialBoardIds = _selectApp().boardIds;

    const boardId = dispatch(addBoard())
    expect(_selectApp().boardIds[1]).toBe(boardId)

    dispatch(setCurrentBoard({ boardId }))
    expect(_selectApp().boardId).toBe(boardId)

    dispatch(removeBoard({ boardId }))
    expect(_selectApp().boardIds).toEqual(initialBoardIds)
  })
});
