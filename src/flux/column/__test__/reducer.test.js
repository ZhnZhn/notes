import reducer from '../reducer'
import ca from '../actions'
import na from '../../note/actions'
import fns from '../fns'
import initialState from '../../initialState'


const crColumn = fns.crColumn;
const state = initialState.columns;
/*
const initState = {
  'c-1': {
    id: 'c-1',
    title: 'Column 1',
    noteIds: [],
    withAdd: true
  },
  'c-2': {
    id: 'c-2',
    title: 'Column 2',
    noteIds: []
  }
};
*/

const _crDnD = (droppableId, index) => ({
  droppableId,
  index
});

describe('reducer column', ()=>{
  test('should init initialState', ()=>{
    expect(reducer(undefined, {})).toEqual(state)
  })
  test('should edit columm title', ()=>{
    const cId = 'c-1', newTitle = 'Column';
    expect(
      reducer(state, ca.editColumnTitle(cId, newTitle))
    ).toEqual({
      ...state,
      [cId]: {
        ...state[cId],
        title: newTitle
      }
    })
  })
  test('should add column', ()=>{
    const bId = 'b-1', cId = 'c-3';
    expect(
      reducer(state, ca.addColumn(bId, cId))
    ).toEqual({
      ...state,
      [cId]: crColumn(cId)
    })
  })
  test('should remove column', ()=>{
    const bId = 'b-1', cId = 'c-1';
    expect(
      reducer(state, ca.removeColumn(bId, cId))
    ).toEqual({
      'c-2': {
        id: 'c-2',
        title: 'Column 2',
        noteIds: []
      }
    })
  })
  test('should add note', ()=>{
    const cId = 'c-1', nId = 'n-1';
    expect(
      reducer(state, na.addNote(cId, nId))
    ).toEqual({
      ...state,
      [cId]: {
        ...state[cId],
        noteIds: [nId, ...state[cId].noteIds]
      }
    })
  })
  test('should delete note', ()=>{
    const cId = 'c-1', nId = 'n-1'
    , stateWithTask = reducer(state, na.addNote(cId, nId));
    expect(
      reducer(stateWithTask, na.deleteNote(cId, nId))
    ).toEqual({
      ...state
    })
  })
  test('should move note between column', ()=>{
    const cFromId = 'c-1' , cToId = 'c-2', nId = 'n-1'
    , source = _crDnD(cFromId, 0)
    , destination = _crDnD(cToId, 0)
    , stateWithTask = reducer(state, na.addNote(cFromId, nId));
    expect(
      reducer(stateWithTask, na.moveNote(nId, source, destination))
    ).toEqual({
        ...state,
        [cToId]: {
          ...state[cToId],
          noteIds: [ nId ]
        }
     })
  })
  test('should move note between index in column', ()=>{
    const cId = 'c-1', n1Id = 'n-1', n2Id = 'n-2'
    , state1 = reducer(state, na.addNote(cId, n1Id))
    , state2 = reducer(state1, na.addNote(cId, n2Id))
    , source = _crDnD(cId, 1)
    , destination = _crDnD(cId, 0);
    expect(
      reducer(state2, na.moveNote(n1Id, source, destination))
    ).toEqual({
      ...state,
      [cId]: {
        id: cId,
        title: 'Column 1',
        noteIds: [n1Id, n2Id],
        withAdd: true
      }
    })
  })

})
