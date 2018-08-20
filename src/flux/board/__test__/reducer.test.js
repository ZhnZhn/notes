import reducer from '../reducer'
import ba from '../actions'
import ca from '../../column/actions'
import initialState from '../../initialState'


const state = initialState.boards;
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
    expect(reducer(undefined, {})).toEqual(state)
  })

  test('should edit board title', ()=>{
    const bId = 'b-1'
    , newTitle = 'Board';
    expect(
      reducer(state, ba.editBoardTitle(bId, newTitle))
    ).toEqual({
      ...state,
      [bId]: {
        ...state[bId],
        title: newTitle
      }
    })
  })

  test('should add new board', ()=>{
    const bId = 'b-2';
    expect(
      reducer(state, ba.addBoard(bId))
    ).toEqual({
      ...state,
      [bId]: {
        id: bId,
        title: 'New Board',
        columnIds: []
      }
    })
  })

  test('should remove board', ()=>{
    const bId = 'b-1'
    expect(
      reducer(state, ba.removeBoard(bId))
    ).toEqual({})
  })

  test('should add column', () => {
    const bId = 'b-1', cId = 'c-4';
    expect(
      reducer(state, ca.addColumn(bId, cId))
    ).toEqual({
      ...state,
      [bId]: {
        ...state[bId],
        columnIds: [
          ...state[bId].columnIds,
          cId
        ]
      }
    })
  })

  test('should remove column', () => {
    const bId = 'b-1', cId = 'c-1';
    expect(
      reducer(state, ca.removeColumn(bId, cId))
    ).toEqual({
      ...state,
      [bId]: {
        ...state[bId],
        columnIds: [ 'c-2' ]
      }
    })
  })
})
