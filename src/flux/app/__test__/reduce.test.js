import reducer from '../reducer'
import ba from '../../board/actions'
import initialState from '../../initialState'


const state = initialState.app;
/*
const initState = {
  boardId: 'b-1',
  boardIds: ['b-1']
};
*/

describe('reducer app', ()=>{
  test('should init to initialState', ()=>{
    expect(reducer(undefined, {})).toEqual(state)
  })

  test('should set board current', ()=>{
    const bId = 'b-2';
    expect(
      reducer(state, ba.setBoardCurrent(bId))
    ).toEqual({
      ...state,
      boardId: bId
    })
  })

  test('should add board', ()=>{
    const bId = 'b-2';
    expect(
      reducer(state, ba.addBoard(bId))
    ).toEqual({
      ...state,
      boardIds: [
        ...state.boardIds,
        bId
      ]
    })
  })


  test('should remove board', ()=>{
    const bId = 'b-1';
    expect(
      reducer(state, ba.removeBoard(bId))
    ).toEqual({
      boardId: null,
      boardIds: []
    })
  })

});
