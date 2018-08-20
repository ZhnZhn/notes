
export const ACTION = {
  MOVE_NOTE: 'MOVE_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  EDIT_NOTE_TITLE: 'EDIT_NOTE_TITLE'
};

export const moveNote = (noteId, source, destination) => ({
  type: ACTION.MOVE_NOTE,
  noteId,
  source,
  destination
})

export const deleteNote = (columnId, noteId) => ({
  type: ACTION.DELETE_NOTE,
  columnId,
  noteId
})

export const editNoteTitle = (noteId, title) => ({
  type: ACTION.EDIT_NOTE_TITLE,
  noteId,
  title
})

export const addNote = (columnId, noteId) => ({
  type: ACTION.ADD_NOTE,
  columnId,
  noteId
})

const actions = {
  moveNote,
  deleteNote,
  editNoteTitle,
  addNote
};

export default actions
