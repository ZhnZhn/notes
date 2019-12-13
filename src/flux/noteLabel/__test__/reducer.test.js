import reducer from '../reducer'
import na from '../../note/actions'
import initialState from '../../initialState'

describe('reducer noteLabels', ()=>{
  test('should init to initial state', ()=>{
    expect(reducer(undefined, {}))
      .toEqual(initialState.noteLabels)
  })
  test('should add new labels for notes', ()=>{
    const id = 'nl-1'
    , newLabels = [{
      id: id, title: 'Story', color: 'green'
    }];
    expect(reducer({}, na.editNoteLabels(
      'n-1', [], [], newLabels
    ))).toEqual({
      [id]: {
        id: id,
        title: 'Story',
        color: 'green'
      }
    })
  })
})
