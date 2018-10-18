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

var _DnDTopic = require('./DnDTopic');

var _DnDTopic2 = _interopRequireDefault(_DnDTopic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  return _react2.default.createElement(
    _DroppableDiv2.default,
    (0, _extends3.default)({}, provided.droppableProps, {
      innerRef: provided.innerRef,
      isDraggingOver: snapshot.isDraggingOver
    }),
    columnIds.map(function (tId, index) {
      return _react2.default.createElement(
        _reactBeautifulDnd.Draggable,
        { key: tId, draggableId: tId, index: index },
        function (provided, snap) {
          return _react2.default.createElement(_DnDTopic2.default, (0, _extends3.default)({
            draggableProps: provided.draggableProps,
            innerRef: provided.innerRef,
            isDragging: snap.isDragging,
            dragHandleProps: provided.dragHandleProps
          }, _crTopicProps(columns[tId])));
        }
      );
    }),
    provided.placeholder
  );
};

var DnDTopicList = function DnDTopicList(_ref2) {
  var id = _ref2.id,
      columnIds = _ref2.columnIds,
      columns = _ref2.columns;
  return _react2.default.createElement(
    _reactBeautifulDnd.Droppable,
    { droppableId: id },
    function (provided, snapshot) {
      return _crTopicList({
        provided: provided, snapshot: snapshot,
        columnIds: columnIds, columns: columns
      });
    }
  );
};

exports.default = DnDTopicList;
//# sourceMappingURL=DnDTopicList.js.map