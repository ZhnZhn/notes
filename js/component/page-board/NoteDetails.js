'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ShowHide = require('../zhn-ch/ShowHide');

var _ShowHide2 = _interopRequireDefault(_ShowHide);

var _LabelList = require('../d-details/LabelList');

var _LabelList2 = _interopRequireDefault(_LabelList);

var _getNoteDescr = require('./getNoteDescr');

var _getNoteDescr2 = _interopRequireDefault(_getNoteDescr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = 'note__details';

var NoteDetails = function NoteDetails(_ref) {
  var isShow = _ref.isShow,
      note = _ref.note,
      editDetails = _ref.editDetails;

  var _descr = (0, _getNoteDescr2.default)(note);
  return _react2.default.createElement(
    _ShowHide2.default,
    {
      className: CL,
      isShow: isShow
    },
    _react2.default.createElement(
      'div',
      { onClick: editDetails },
      _react2.default.createElement(_LabelList2.default, {
        labels: note.labels
      }),
      _react2.default.createElement(
        'div',
        null,
        _descr
      )
    )
  );
};

exports.default = NoteDetails;
//# sourceMappingURL=NoteDetails.js.map