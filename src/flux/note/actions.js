// @flow

export const ACTION = {
  MOVE_NOTE: 'MOVE_NOTE',
  DELETE_NOTE: 'DELETE_NOTE',
  ADD_NOTE: 'ADD_NOTE',
  EDIT_NOTE_TITLE: 'EDIT_NOTE_TITLE',
  EDIT_NOTE_DESCR: 'EDIT_NOTE_DESCR'
};

export const moveNote = (
  noteId /*: string */,
  source /*: {} */,
  destination /*: {} */
) => ({
  type: ACTION.MOVE_NOTE,
  noteId,
  source,
  destination
})

export const deleteNote = (
  columnId /*: string */,
  noteId /*: string */
) => ({
  type: ACTION.DELETE_NOTE,
  columnId,
  noteId
})

export const editNoteTitle = (
  noteId /*: string */,
  title /*: string */
) => ({
  type: ACTION.EDIT_NOTE_TITLE,
  noteId,
  title
})

const editNoteDescr = (
  noteId /*: string */,
  descr /*: string */
) => ({
  type: ACTION.EDIT_NOTE_DESCR,
  noteId,
  descr
});

export const addNote = (
  columnId /*: string */,
  noteId /*: string */
) => ({
  type: ACTION.ADD_NOTE,
  columnId,
  noteId
})

/*::
export type NoteAction =
  | $Call<typeof moveNote, string, {}, {}>
  | $Call<typeof deleteNote, string, string>
  | $Call<typeof editNoteTitle, string, string>
  | $Call<typeof editNoteDescr, string, string>
  | $Call<typeof addNote, string, string>
*/

const actions = {
  moveNote,
  deleteNote,
  editNoteTitle,
  editNoteDescr,
  addNote
};

export default actions
