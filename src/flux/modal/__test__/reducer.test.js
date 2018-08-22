import reducer from '../reducer'
import ma from '../actions'
import initialState from '../../initialState'

const state = initialState.modal
/*
const initState = {
  id: null,
  data: null
}
*/

describe('reducer columm', ()=>{
  test('should init to initialState', ()=>{
    expect(reducer(undefined, {})).toEqual(state)
  })
  test('should show modal dialog', ()=>{
    const mId = 'NOTIF', data = { descr: 'Description' };
    expect(
      reducer(state, ma.showModal(mId, data))
    ).toEqual({
      id: mId,
      data: data
    })
  })
})
