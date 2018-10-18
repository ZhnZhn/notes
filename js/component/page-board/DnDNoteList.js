'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _DroppableDiv = require('../zhn-dnd/DroppableDiv');

var _DroppableDiv2 = _interopRequireDefault(_DroppableDiv);

var _DnDNote = require('./DnDNote');

var _DnDNote2 = _interopRequireDefault(_DnDNote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  ROOT: {
    minHeight: 50
  },
  NOT_DRAGGING_OVER: {
    border: '2px solid #9e9e9e'
  }
};

var _crNoteList = function _crNoteList(_ref) {
  var provided = _ref.provided,
      snapshot = _ref.snapshot,
      noteIds = _ref.noteIds,
      notes = _ref.notes,
      cId = _ref.cId;
  return _react2.default.createElement(
    _DroppableDiv2.default,
    (0, _extends3.default)({}, provided.droppableProps, {
      innerRef: provided.innerRef,
      isDraggingOver: snapshot.isDraggingOver,
      style: S.ROOT,
      notDraggingStyle: S.NOT_DRAGGING_OVER
    }),
    noteIds.map(function (nId, index) {
      return _react2.default.createElement(
        _reactBeautifulDnd.Draggable,
        { key: nId, draggableId: nId, index: index },
        function (provided, snap) {
          return _react2.default.createElement(_DnDNote2.default, {
            draggableProps: provided.draggableProps,
            innerRef: provided.innerRef,
            isDragging: snap.isDragging,
            dragHandleProps: provided.dragHandleProps,
            note: notes[nId],
            columnId: cId
          });
        }
      );
    }),
    provided.placeholder
  );
};

var DnDNoteList = function DnDNoteList(_ref2) {
  var cId = _ref2.cId,
      noteIds = _ref2.noteIds,
      notes = _ref2.notes;
  return _react2.default.createElement(
    _reactBeautifulDnd.Droppable,
    { droppableId: cId },
    function (provided, snapshot) {
      return _crNoteList({
        provided: provided, snapshot: snapshot,
        noteIds: noteIds, notes: notes, cId: cId
      });
    }
  );
};

exports.default = DnDNoteList;
//# sourceMappingURL=DnDNoteList.js.map