// @flow
const selectApp = (
  state /*: StoreState */
) => state.app || {};
export const selectAppModal = (
  state /*: StoreState */
) => state.modal || {}

const selectAppCurrentBoard = (
  state /*: StoreState */
) => selectApp(state).boardId
export const selectAppBoardIds = (
  state /*: StoreState */
) => selectApp(state).boardIds || []
export const selectAppUiTheme = (
  state /*: StoreState */
) => selectApp(state).uiTheme

export const selectDrawerItems = (
  state /*: StoreState */
) => state.drawerMsg || []


const selectBoards = (
  state /*: StoreState */
) => state.boards || {}

export const selectCurrentBoard = (
  state /*: StoreState */
) => selectBoards(state)[selectAppCurrentBoard(state)] || {}

export const selectBoardById = (
  state /*: StoreState */,
  boardId /*: string */
) => selectBoards(state)[boardId] || {}
export const selectBoardColumnIds = (
  state /*: StoreState */,
  boardId /*: string */
) => selectBoardById(state, boardId).columnIds || []

export const selectNotes = (
  state /*: StoreState */
) => state.notes || {}
export const selectNoteLabels = (
  state /*: StoreState */
) => state.noteLabels || {}

export const selectColumns = (
  state /*: StoreState */
) => state.columns || {}
const selectColumn = (
  state /*: StoreState */,
  columnId /*: string */
) => selectColumns(state)[columnId] || {}
export const selectNoteIds = (
  state /*: StoreState */,
  columnId /*: string */
) => selectColumn(state, columnId).noteIds || []
