import reducer, { addDrawerMsg, removeDrawerMsg } from '../reducer';

import initialState from '../../initialState';
import store from '../../store';

const { getState, dispatch } = store

const _selectDrawerMsg = () => getState().drawerMsg;

describe('reducer drawerMsg', ()=>{
  test('should init to initialState', ()=>{
    expect(reducer(undefined, {}))
      .toEqual(initialState.drawerMsg)
  })

  test('should handle actions correctly', ()=>{
    // addDrawerMsg
    const msg = 'Msg'
    , id = dispatch(addDrawerMsg({ msg }))
    , itemMsg = _selectDrawerMsg()[0];
    expect(itemMsg.id).toBe(id)
    expect(itemMsg.msg.indexOf(msg)).not.toBe(-1)

    // removeDrawerMsg
    dispatch(removeDrawerMsg({ id }))
    expect(_selectDrawerMsg()).toEqual([])
  })
})
