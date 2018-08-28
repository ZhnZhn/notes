'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var initState = {
  app: {
    boardId: 'b-1',
    boardIds: ['b-1'],
    uiTheme: 'DARK'
  },
  drawerMsg: [],
  modal: {
    id: null,
    data: null
  },
  boards: {
    'b-1': {
      id: 'b-1',
      title: 'Board 1',
      columnIds: ['c-1', 'c-2']
    }
  },
  notes: {
    //'n-1': { id: 'n-1', title: 'Note 1' },
  },
  columns: {
    'c-1': {
      id: 'c-1',
      title: 'Column 1',
      noteIds: [],
      withAdd: true
    },
    'c-2': {
      id: 'c-2',
      title: 'Column 2',
      noteIds: []
    }
    //columnOrder: [ 'column-1', 'column-2', 'column-3' ]
  } };

exports.default = initState;
//# sourceMappingURL=initialState.js.map