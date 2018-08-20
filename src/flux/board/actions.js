
export const ACTION = {
  EDIT_BOARD_TITLE: 'EDIT_BOARD_TITLE',
  SET_BOARD_CURRENT: 'SET_BOARD_CURRENT',
  ADD_BOARD: 'ADD_BOARD',
  REMOVE_BOARD: 'REMOVE_BOARD'
};

export const editBoardTitle = (boardId, title) => ({
  type: ACTION.EDIT_BOARD_TITLE,
  boardId,
  title
});

export const setBoardCurrent = (boardId) => ({
  type: ACTION.SET_BOARD_CURRENT,
  boardId
});

export const addBoard = (boardId) => ({
  type: ACTION.ADD_BOARD,
  boardId
});

export const removeBoard = (boardId) => ({
  type: ACTION.REMOVE_BOARD,
  boardId
})

const actions = {
  editBoardTitle,
  setBoardCurrent,
  addBoard,
  removeBoard
};

export default actions
