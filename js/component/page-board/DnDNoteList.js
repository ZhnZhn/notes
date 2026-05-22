"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _reactBeautifulDnd = require("react-beautiful-dnd");
var _uiApi = require("../uiApi");
var _DroppableDiv = _interopRequireDefault(require("../zhn-dnd/DroppableDiv"));
var _DnDNote = _interopRequireDefault(require("./DnDNote"));
var _jsxRuntime = require("react/jsx-runtime");
const S_DIV = {
    minHeight: 50
  },
  S_DRAGGING_OVER_OFF = {
    border: '2px solid #9e9e9e'
  };
const _crNoteList = _ref => {
  let {
    provided,
    snapshot,
    noteIds,
    notes,
    cId
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DroppableDiv.default, {
    ...provided.droppableProps,
    innerRef: provided.innerRef,
    isDraggingOver: snapshot.isDraggingOver,
    style: S_DIV,
    draggingOverOffStyle: S_DRAGGING_OVER_OFF,
    children: [(0, _uiApi.safeMap)(noteIds, (nId, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.Draggable, {
      draggableId: nId,
      index: index,
      children: (provided, snap) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_DnDNote.default, {
        draggableProps: provided.draggableProps,
        innerRef: provided.innerRef,
        isDragging: snap.isDragging,
        dragHandleProps: provided.dragHandleProps,
        note: notes[nId],
        columnId: cId
      })
    }, nId)), provided.placeholder]
  });
};
const DnDNoteList = _ref2 => {
  let {
    cId,
    noteIds,
    notes
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.Droppable, {
    droppableId: cId,
    children: (provided, snapshot) => _crNoteList({
      provided,
      snapshot,
      noteIds,
      notes,
      cId
    })
  });
};
var _default = exports.default = DnDNoteList;
//# sourceMappingURL=DnDNoteList.js.map