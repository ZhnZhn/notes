"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _DroppableDiv = _interopRequireDefault(require("../zhn-dnd/DroppableDiv"));

var _DnDNote = _interopRequireDefault(require("./DnDNote"));

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
  return _react["default"].createElement(_DroppableDiv["default"], (0, _extends2["default"])({}, provided.droppableProps, {
    innerRef: provided.innerRef,
    isDraggingOver: snapshot.isDraggingOver,
    style: S.ROOT,
    notDraggingStyle: S.NOT_DRAGGING_OVER
  }), noteIds.map(function (nId, index) {
    return _react["default"].createElement(_reactBeautifulDnd.Draggable, {
      key: nId,
      draggableId: nId,
      index: index
    }, function (provided, snap) {
      return _react["default"].createElement(_DnDNote["default"], {
        draggableProps: provided.draggableProps,
        innerRef: provided.innerRef,
        isDragging: snap.isDragging,
        dragHandleProps: provided.dragHandleProps,
        note: notes[nId],
        columnId: cId
      });
    });
  }), provided.placeholder);
};

var DnDNoteList = function DnDNoteList(_ref2) {
  var cId = _ref2.cId,
      noteIds = _ref2.noteIds,
      notes = _ref2.notes;
  return _react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: cId
  }, function (provided, snapshot) {
    return _crNoteList({
      provided: provided,
      snapshot: snapshot,
      noteIds: noteIds,
      notes: notes,
      cId: cId
    });
  });
};

var _default = DnDNoteList;
exports["default"] = _default;
//# sourceMappingURL=DnDNoteList.js.map