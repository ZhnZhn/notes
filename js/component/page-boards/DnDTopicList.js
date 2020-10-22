"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _jsxRuntime = require("react/jsx-runtime");

var _reactBeautifulDnd = require("react-beautiful-dnd");

var _DroppableDiv = _interopRequireDefault(require("../zhn-dnd/DroppableDiv"));

var _DnDTopic = _interopRequireDefault(require("./DnDTopic"));

var _crTopicProps = function _crTopicProps(topic) {
  return {
    title: topic.title,
    count: topic.noteIds.length
  };
};

var _crTopicList = function _crTopicList(_ref) {
  var provided = _ref.provided,
      snapshot = _ref.snapshot,
      columnIds = _ref.columnIds,
      columns = _ref.columns;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_DroppableDiv["default"], (0, _extends2["default"])({}, provided.droppableProps, {
    innerRef: provided.innerRef,
    isDraggingOver: snapshot.isDraggingOver,
    children: [columnIds.map(function (tId, index) {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.Draggable, {
        draggableId: tId,
        index: index,
        children: function children(provided, snap) {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_DnDTopic["default"], (0, _extends2["default"])({
            draggableProps: provided.draggableProps,
            innerRef: provided.innerRef,
            isDragging: snap.isDragging,
            dragHandleProps: provided.dragHandleProps
          }, _crTopicProps(columns[tId])));
        }
      }, tId);
    }), provided.placeholder]
  }));
};

var DnDTopicList = function DnDTopicList(_ref2) {
  var id = _ref2.id,
      columnIds = _ref2.columnIds,
      columns = _ref2.columns;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactBeautifulDnd.Droppable, {
    droppableId: id,
    children: function children(provided, snapshot) {
      return _crTopicList({
        provided: provided,
        snapshot: snapshot,
        columnIds: columnIds,
        columns: columns
      });
    }
  });
};

var _default = DnDTopicList;
exports["default"] = _default;
//# sourceMappingURL=DnDTopicList.js.map