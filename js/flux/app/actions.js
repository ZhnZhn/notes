'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ACTION = exports.ACTION = {
  SAVE_BOARD: 'SAVE_BOARD',
  CLEAN_STORAGE: 'CLEAN_STORAGE',
  SET_UI_THEME: 'SET_UI_THEME'
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

var setUiTheme = exports.setUiTheme = function setUiTheme(uiTheme /*: UiTheme */
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

var actions = {
  saveBoard: saveBoard,
  cleanStorage: cleanStorage,
  setUiTheme: setUiTheme
};

exports.default = actions;
//# sourceMappingURL=actions.js.map