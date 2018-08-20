'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _Note = require('./Note');

var _Note2 = _interopRequireDefault(_Note);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _crNote = function _crNote(provided, snap, note, columnId) {
  return _react2.default.createElement(_Note2.default, {
    draggableProps: provided.draggableProps,
    innerRef: provided.innerRef,
    isDragging: snap.isDragging,
    dragHandleProps: provided.dragHandleProps,
    note: note,
    columnId: columnId
  });
};

var DraggableNotes = function DraggableNotes(_ref) {
  var id = _ref.id,
      notes = _ref.notes,
      ids = _ref.ids;

  return _react2.default.createElement(
    _react.Fragment,
    null,
    ids.map(function (nId, index) {
      return _react2.default.createElement(
        _reactBeautifulDnd.Draggable,
        { key: nId, draggableId: nId, index: index },
        function (provided, snap) {
          return _crNote(provided, snap, notes[nId], id);
        }
      );
    })
  );
};

exports.default = DraggableNotes;
//# sourceMappingURL=DraggableNotes.js.map