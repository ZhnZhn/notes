import reducer, { editColumnTitle, toggleColumn } from '../reducer';
import {
  addColumn,
  removeColumn
} from '../actions';

import {
  addNote,
  deleteNote,
  moveNote
} from '../../note/actions';
import fns from '../fns';

import initialState from '../../initialState';
import store from '../../store';

const { crColumn } = fns;

const { getState, dispatch } = store;
const _selectColums = () => getState().columns;


/*
const initState = {
  'c-1': {
    id: 'c-1',
    title: 'Topic 1',
    noteIds: [],
    withAdd: true
  },
  'c-2': {
    id: 'c-2',
    title: 'Topic 2',
    noteIds: []
  }
};
*/


const boardId = Object.keys(getState().boards)[0]

describe('reducer column', ()=>{
  test('should init initialState', ()=>{
    expect(reducer(undefined, {})).toEqual(initialState.columns)
  })

  test('should handle actions correctly', ()=>{
    const beforeColums = _selectColums();

    const columnId = dispatch(addColumn({ boardId }));
    expect(_selectColums()).toEqual({
      ...beforeColums,
      [columnId]: crColumn(columnId)
    })

    const title = "Test Title"
    dispatch(editColumnTitle({ columnId, title }))
    expect(_selectColums()[columnId].title).toBe(title)

    const noteId_1 = dispatch(addNote({ boardId, columnId }))
    expect(_selectColums()[columnId].noteIds).toEqual([noteId_1])
    const noteId_2 = dispatch(addNote({ boardId, columnId }))
    expect(_selectColums()[columnId].noteIds).toEqual([noteId_2, noteId_1])

    dispatch(moveNote({
      draggableId: noteId_1,
      source: { droppableId: columnId, index: 1 },
      destination: { droppableId: columnId, index: 0 }
    }))
    expect(_selectColums()[columnId].noteIds).toEqual([noteId_1, noteId_2])

    dispatch(deleteNote({ columnId, noteId: noteId_1 }))
    expect(_selectColums()[columnId].noteIds).toEqual([noteId_2])
    dispatch(deleteNote({ columnId, noteId: noteId_2 }))
    expect(_selectColums()[columnId].noteIds).toEqual([])

    dispatch(toggleColumn({ columnId }))
    expect(_selectColums()[columnId].isHide).toBe(true)
    dispatch(toggleColumn({ columnId }))
    expect(_selectColums()[columnId].isHide).toBe(false)

    dispatch(removeColumn({ boardId, columnId }))
    expect(_selectColums()).toEqual(beforeColums)
  })
})
