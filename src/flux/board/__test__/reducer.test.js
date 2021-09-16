import reducer, {
  crBoard,
  editBoardTitle
} from '../reducer';
import {
  addBoard,
  removeBoard
} from '../actions';
import {
  addColumn,
  removeColumn,
  moveColumn
} from '../../column/actions';

import initialState from '../../initialState';
import store from '../../store';

const { getState, dispatch } = store;
const _selectBoards = () => getState().boards;


/*
const initState = {
  'b-1': {
    id: 'b-1',
    title: 'Board 1',
    columnIds: ['c-1','c-2']
  }
};
*/

describe('reducer board', () => {
  test('should init to initialState', ()=>{
    expect(reducer(undefined, {})).toEqual(initialState.boards)
  })

  test('should handle board actions correctly', ()=>{
    const beforeBoards = _selectBoards()

    const boardId = dispatch(addBoard())
    expect(_selectBoards()).toEqual({
      ...beforeBoards,
      [boardId]: crBoard(boardId)
    })

    const title = "Test Title"
    dispatch(editBoardTitle({ boardId, title }))
    expect(_selectBoards()[boardId].title).toBe(title)

    const columnId_1 = dispatch(addColumn({boardId}))
    expect(_selectBoards()[boardId].columnIds).toEqual([columnId_1])
    const columnId_2 = dispatch(addColumn({boardId}))
    expect(_selectBoards()[boardId].columnIds).toEqual([columnId_1, columnId_2])

    dispatch(moveColumn({
      draggableId: columnId_2,
      source: { droppableId: boardId, index: 1 },
      destination: { droppableId: boardId, index: 0 }
    }))
    expect(_selectBoards()[boardId].columnIds).toEqual([columnId_2, columnId_1])

    dispatch(removeColumn({boardId, columnId: columnId_1}))
    expect(_selectBoards()[boardId].columnIds).toEqual([columnId_2])
    expect(dispatch(removeBoard({ boardId }))).toBe(false)
    dispatch(removeColumn({boardId, columnId: columnId_2}))
    expect(_selectBoards()[boardId].columnIds).toEqual([])

    dispatch(removeBoard({ boardId }))
    expect(_selectBoards()).toEqual(beforeBoards)
  })
})
