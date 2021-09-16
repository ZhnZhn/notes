import reducer from '../reducer';
import {
  addNote,
  editNoteLabels
} from '../../note/actions';
import initialState from '../../initialState';
import store from '../../store';

const _getState = () => store.getState();
const _getIdFromSlice = (pathSlice) => Object
 .keys(_getState()[pathSlice])[0];

describe('reducer noteLabels', ()=>{
  test('should init to initialState', ()=>{
    expect(reducer(void 0, {}))
      .toEqual(initialState.noteLabels)
  })

  test('should add labels to note label slice and note', ()=>{
    const columnId = _getIdFromSlice('columns');
    const noteId = store.dispatch(addNote({ columnId }));
    const labels = [{ title: "L1", color: "#2f7ed8" }];
    store.dispatch(editNoteLabels({ noteId, labels }))

    const nextState = _getState();
    const labelId = _getIdFromSlice('noteLabels');
    const labelConfig = {
      id: labelId,
     ...labels[0]
   };
    //Add Labels To noteLabel Slice
    expect(nextState.noteLabels)
     .toEqual({ [labelId]: labelConfig })
    //Add Labels to Note
    expect(nextState.notes[noteId].labels)
     .toEqual([labelConfig])
  })
})
