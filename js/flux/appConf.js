'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crMaxDescr = function _crMaxDescr(domain, n) {
  return 'Max number (' + n + ') of ' + domain + ' reached.';
};

var MAX = {
  BOARDS: 8,
  COLUMNS: 8,
  NOTES: 12
};

var CONF = {
  STORAGE_KEY: 'notes-manager',
  DMSG_PREFIX: 'm',
  MSG_SAVED: 'Boards saved',
  MSG_SAVE_FAIL: 'Boards not saved',
  MSG_CLEANED: 'localStorage cleaned',
  MSG_CLEAN_FAIL: 'localStorage not cleaned',

  BOARDS_PREFIX: 'b',
  MAX_BOARDS: MAX.BOARDS,
  N_MAX_BOARDS: {
    descr: _crMaxDescr('boards', MAX.BOARDS)
  },

  MAX_COLUMNS: MAX.COLUMNS,
  COLUMNS_PREFIX: 'c',
  N_MAX_COLUMNS: {
    descr: _crMaxDescr('columns', MAX.COLUMNS)
  },

  MAX_NOTES: MAX.NOTES,
  NOTES_PREFIX: 'n',
  N_MAX_NOTES: {
    descr: _crMaxDescr('notes', MAX.NOTES)
  }
};

exports.default = CONF;
//# sourceMappingURL=appConf.js.map