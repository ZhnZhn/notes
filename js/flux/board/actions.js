"use strict";

exports.__esModule = true;
exports["default"] = exports.removeBoard = exports.addBoard = exports.setBoardCurrent = exports.editBoardTitle = exports.ACTION = void 0;
var ACTION = {
  EDIT_BOARD_TITLE: 'EDIT_BOARD_TITLE',
  SET_BOARD_CURRENT: 'SET_BOARD_CURRENT',
  ADD_BOARD: 'ADD_BOARD',
  REMOVE_BOARD: 'REMOVE_BOARD'
};
exports.ACTION = ACTION;

var editBoardTitle = function editBoardTitle(boardId
/*: string */
, title
/*: string */
) {
  return {
    type: ACTION.EDIT_BOARD_TITLE,
    boardId: boardId,
    title: title
  };
};

exports.editBoardTitle = editBoardTitle;

var setBoardCurrent = function setBoardCurrent(boardId
/*: string */
) {
  return {
    type: ACTION.SET_BOARD_CURRENT,
    boardId: boardId
  };
};

exports.setBoardCurrent = setBoardCurrent;

var addBoard = function addBoard(boardId
/*: string */
) {
  return {
    type: ACTION.ADD_BOARD,
    boardId: boardId
  };
};

exports.addBoard = addBoard;

var removeBoard = function removeBoard(boardId
/*: string */
) {
  return {
    type: ACTION.REMOVE_BOARD,
    boardId: boardId
  };
};
/*::
export type BoardAction =
 | $Call<typeof editBoardTitle, string, string>
 | $Call<typeof setBoardCurrent, string>
 | $Call<typeof addBoard, string>
 | $Call<typeof removeBoard, string>
*/


exports.removeBoard = removeBoard;
var actions = {
  editBoardTitle: editBoardTitle,
  setBoardCurrent: setBoardCurrent,
  addBoard: addBoard,
  removeBoard: removeBoard
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map