'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  SAVE_BOARD: 'SAVE_BOARD',
  CLEAN_STORAGE: 'CLEAN_STORAGE'
};

var saveBoard = exports.saveBoard = function saveBoard() {
  return {
    type: ACTION.SAVE_BOARD
  };
};

var cleanStorage = exports.cleanStorage = function cleanStorage() {
  return {
    type: ACTION.CLEAN_STORAGE
  };
};

var actions = {
  saveBoard: saveBoard,
  cleanStorage: cleanStorage
};

exports.default = actions;
//# sourceMappingURL=actions.js.map