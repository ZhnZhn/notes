// @flow
export const ACTION = {
  EDIT_BOARD_TITLE: 'EDIT_BOARD_TITLE',
  SET_BOARD_CURRENT: 'SET_BOARD_CURRENT',
  ADD_BOARD: 'ADD_BOARD',
  REMOVE_BOARD: 'REMOVE_BOARD'
};

export const editBoardTitle = (
  boardId /*: string */,
  title /*: string */
) => ({
  type: ACTION.EDIT_BOARD_TITLE,
  boardId,
  title
});

export const setBoardCurrent = (
  boardId /*: string */
) => ({
  type: ACTION.SET_BOARD_CURRENT,
  boardId
});

export const addBoard = (
  boardId /*: string */
) => ({
  type: ACTION.ADD_BOARD,
  boardId
});

export const removeBoard = (
  boardId /*: string */
) => ({
  type: ACTION.REMOVE_BOARD,
  boardId
})

/*::
export type BoardAction =
 | $Call<typeof editBoardTitle, string, string>
 | $Call<typeof setBoardCurrent, string>
 | $Call<typeof addBoard, string>
 | $Call<typeof removeBoard, string>
*/

const actions = {
  editBoardTitle,
  setBoardCurrent,
  addBoard,
  removeBoard
};

export default actions
