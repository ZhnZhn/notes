"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var initState
/*: StoreState */
= {
  app: {
    boardId: 'b-1',
    boardIds: ['b-1'],
    uiTheme: 'DARK'
  },
  drawerMsg: [],
  modal: {
    id: undefined,
    data: undefined
  },
  boards: {
    'b-1': {
      id: 'b-1',
      title: 'Board 1',
      columnIds: ['c-1', 'c-2']
    }
  },
  notes: {//'n-1': { id: 'n-1', title: 'Note 1' },
  },
  noteLabels: {//'nl-1': { id: 'nl-1', title: 'Label', color: 'green' },
  },
  columns: {
    'c-1': {
      id: 'c-1',
      title: 'Topic 1',
      noteIds: [],
      withAdd: true
    },
    'c-2': {
      id: 'c-2',
      title: 'Topic 2',
      noteIds: []
    }
  } //columnOrder: [ 'column-1', 'column-2', 'column-3' ]

};
var _default = initState;
exports["default"] = _default;
//# sourceMappingURL=initialState.js.map