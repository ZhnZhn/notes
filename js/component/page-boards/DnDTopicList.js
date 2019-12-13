"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

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
  return _react["default"].createElement(_DroppableDiv["default"], (0, _extends2["default"])({}, provided.droppableProps, {
    innerRef: provided.innerRef,
    isDraggingOver: snapshot.isDraggingOver
  }), columnIds.map(function (tId, index) {
    return _react["default"].createElement(_reactBeautifulDnd.Draggable, {
      key: tId,
      draggableId: tId,
      index: index
    }, function (provided, snap) {
      return _react["default"].createElement(_DnDTopic["default"], (0, _extends2["default"])({
        draggableProps: provided.draggableProps,
        innerRef: provided.innerRef,
        isDragging: snap.isDragging,
        dragHandleProps: provided.dragHandleProps
      }, _crTopicProps(columns[tId])));
    });
  }), provided.placeholder);
};

var DnDTopicList = function DnDTopicList(_ref2) {
  var id = _ref2.id,
      columnIds = _ref2.columnIds,
      columns = _ref2.columns;
  return _react["default"].createElement(_reactBeautifulDnd.Droppable, {
    droppableId: id
  }, function (provided, snapshot) {
    return _crTopicList({
      provided: provided,
      snapshot: snapshot,
      columnIds: columnIds,
      columns: columns
    });
  });
};

var _default = DnDTopicList;
exports["default"] = _default;
//# sourceMappingURL=DnDTopicList.js.map