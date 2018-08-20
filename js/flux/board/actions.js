'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  EDIT_BOARD_TITLE: 'EDIT_BOARD_TITLE',
  SET_BOARD_CURRENT: 'SET_BOARD_CURRENT',
  ADD_BOARD: 'ADD_BOARD',
  REMOVE_BOARD: 'REMOVE_BOARD'
};

var editBoardTitle = exports.editBoardTitle = function editBoardTitle(boardId, title) {
  return {
    type: ACTION.EDIT_BOARD_TITLE,
    boardId: boardId,
    title: title
  };
};

var setBoardCurrent = exports.setBoardCurrent = function setBoardCurrent(boardId) {
  return {
    type: ACTION.SET_BOARD_CURRENT,
    boardId: boardId
  };
};

var addBoard = exports.addBoard = function addBoard(boardId) {
  return {
    type: ACTION.ADD_BOARD,
    boardId: boardId
  };
};

var removeBoard = exports.removeBoard = function removeBoard(boardId) {
  return {
    type: ACTION.REMOVE_BOARD,
    boardId: boardId
  };
};

var actions = {
  editBoardTitle: editBoardTitle,
  setBoardCurrent: setBoardCurrent,
  addBoard: addBoard,
  removeBoard: removeBoard
};

exports.default = actions;
//# sourceMappingURL=actions.js.map