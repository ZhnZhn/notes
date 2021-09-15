import reducer, {
  initialState,
  editNoteTitle,
  editNoteDescr
} from '../reducer';
import { addNote, deleteNote } from '../actions';
import store from '../../store';

const { dispatch, getState } = store;


/*
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
*/

const _getIdFromSlice = (pathSlice) => Object
 .keys(getState()[pathSlice])[0];
const _selectNotes = () => getState().notes

describe('reducer notes', ()=>{
  test('should init to initialState', () => {
    expect(reducer(undefined, {}))
      .toEqual(initialState)
  })
  test('should handle actions', ()=>{
     const columnId = _getIdFromSlice('columns')
     dispatch(addNote({ columnId }))
     const noteId = _getIdFromSlice('notes')
     expect(_selectNotes()).toEqual({
       [noteId]: {
         id: noteId,
         title: "New Note"
       }
     })

     const title = 'Title'
     dispatch(editNoteTitle({ noteId, title }))
     expect(_selectNotes()).toEqual({
       [noteId]: {
         id: noteId,
         title
       }
     })

     const descr = "Description"
     dispatch(editNoteDescr({ noteId, descr }))
     expect(_selectNotes()).toEqual({
       [noteId]: {
         id: noteId,
         title, descr
       }
     })

     dispatch(deleteNote({ noteId, columnId }))
     expect(_selectNotes()).toEqual({})
  })
})
