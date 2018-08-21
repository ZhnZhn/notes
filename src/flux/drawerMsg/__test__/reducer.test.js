import reducer from '../reducer'
import dma from '../actions'
import fns from '../fns'
import initialState from '../../initialState'


const { crMsg } = fns;
const state = initialState.drawerMsg;

describe('reducer drawerMsg', ()=>{
  test('should init to []', ()=>{
    expect(reducer(undefined, {})).toEqual([])
  })
  /*
  test('should add drawer msg', ()=>{
    const mId = 'm-1', msg = 'Msg';
    expect(
      reducer(state, dma.addDrawerMsg(msg, mId))
    ).toEqual([
      crMsg(mId, msg)
    ])
  })
  */
  test('should remove drawer msg', ()=>{
    const mId = 'm-1', msg = 'Msg'
    , state1 = reducer(state, dma.addDrawerMsg(msg, mId));
    expect(
      reducer(state1, dma.removeDrawerMsg(mId))
    ).toEqual(state)
  })
})
