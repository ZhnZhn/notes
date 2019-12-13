"use strict";

exports.__esModule = true;
exports["default"] = exports.setUiTheme = exports.cleanStorage = exports.saveBoard = exports.ACTION = void 0;
var ACTION = {
  SAVE_BOARD: 'SAVE_BOARD',
  CLEAN_STORAGE: 'CLEAN_STORAGE',
  SET_UI_THEME: 'SET_UI_THEME'
};
exports.ACTION = ACTION;

var saveBoard = function saveBoard() {
  return {
    type: ACTION.SAVE_BOARD
  };
};

exports.saveBoard = saveBoard;

var cleanStorage = function cleanStorage() {
  return {
    type: ACTION.CLEAN_STORAGE
  };
};

exports.cleanStorage = cleanStorage;

var setUiTheme = function setUiTheme(uiTheme
/*: UiTheme */
) {
  return {
    type: ACTION.SET_UI_THEME,
    uiTheme: uiTheme
  };
};
/*::
export type TopicAction =
  | $Call<typeof saveBoard>
  | $Call<typeof cleanStorage>
  | $Call<typeof setUiTheme, UiTheme>
*/


exports.setUiTheme = setUiTheme;
var actions = {
  saveBoard: saveBoard,
  cleanStorage: cleanStorage,
  setUiTheme: setUiTheme
};
var _default = actions;
exports["default"] = _default;
//# sourceMappingURL=actions.js.map