import reducer from '../reducer'
import ta from '../actions'
import initialState from '../../initialState'

const state = {
  'n-1': {
    id: 'n-1',
    title: 'Note 1'
  },
  'n-2': {
    id: 'n-2',
    title: 'Note 2'
  }
};

describe('reducer note', () => {
  test('should init to initialState', () => {
    expect(reducer(undefined, {})).toEqual(initialState.notes)
  })
  test('should edit note title', ()=>{
    const nId ='n-1', newTitle = 'Note'
    expect(
      reducer(state, ta.editNoteTitle(nId, newTitle))
    ).toEqual({
      ...state,
      [nId]: {
        ...state[nId],
        title: newTitle
      }
    })
  })
  test('should add note', ()=>{
    const cId = 'c-1', nId = 'n-3'
    expect(
      reducer(state, ta.addNote(cId, nId))
    ).toEqual({
      ...state,
      [nId]: {
        id: nId,
        title: 'New Note'
      }
    })
  })
  test('should remove note', ()=>{
    const cId = 'c-1', nId = 'n-1';
    expect(
      reducer(state, ta.deleteNote(cId, nId))
    ).toEqual({
      'n-2': {
        id: 'n-2',
        title: 'Note 2'
      }
    })
  })
})
