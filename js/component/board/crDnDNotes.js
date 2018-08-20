'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NoteList = require('./NoteList');

var _NoteList2 = _interopRequireDefault(_NoteList);

var _DraggableNotes = require('./DraggableNotes');

var _DraggableNotes2 = _interopRequireDefault(_DraggableNotes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var crDnDNotes = function crDnDNotes(id, notes, ids, provided, snapshot) {
  return _react2.default.createElement(
    _NoteList2.default,
    (0, _extends3.default)({}, provided.droppableProps, {
      innerRef: provided.innerRef,
      isDraggingOver: snapshot.isDraggingOver
    }),
    _react2.default.createElement(_DraggableNotes2.default, {
      id: id,
      notes: notes,
      ids: ids
    }),
    provided.placeholder
  );
};

exports.default = crDnDNotes;
//# sourceMappingURL=crDnDNotes.js.map