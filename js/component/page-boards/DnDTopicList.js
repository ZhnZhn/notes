"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _reactBeautifulDnd = require("react-beautiful-dnd");
var _uiApi = require("../uiApi");
var _DroppableDiv = _interopRequireDefault(require("../zhn-dnd/DroppableDiv"));
var _DnDTopic = _interopRequireDefault(require("./DnDTopic"));
var _jsxRuntime = require("react/jsx-runtime");
const _crTopicProps = topic => ({
  title: topic.title,
  count: topic.noteIds.length
});
const _crTopicList = _ref => {
  let {
    provided,
    snapshot,
    columnIds,
    columns
  } = _ref;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DroppableDiv.default, {
    ...provided.droppableProps,
    innerRef: provided.innerRef,
    isDraggingOver: snapshot.isDraggingOver,
    children: [(0, _uiApi.safeMap)(columnIds, (tId, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.Draggable, {
      draggableId: tId,
      index: index,
      children: (provided, snap) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_DnDTopic.default, {
        draggableProps: provided.draggableProps,
        innerRef: provided.innerRef,
        isDragging: snap.isDragging,
        dragHandleProps: provided.dragHandleProps,
        ..._crTopicProps(columns[tId])
      })
    }, tId)), provided.placeholder]
  });
};
const DnDTopicList = _ref2 => {
  let {
    id,
    columnIds,
    columns
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.Droppable, {
    droppableId: id,
    children: (provided, snapshot) => _crTopicList({
      provided,
      snapshot,
      columnIds,
      columns
    })
  });
};
var _default = exports.default = DnDTopicList;
//# sourceMappingURL=DnDTopicList.js.map