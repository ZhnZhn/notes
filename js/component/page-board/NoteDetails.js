"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _ShowHide = _interopRequireDefault(require("../zhn-ch/ShowHide"));

var _LabelList = _interopRequireDefault(require("../d-details/LabelList"));

var _getNoteDescr = _interopRequireDefault(require("./getNoteDescr"));

var CL = 'note__details';

var NoteDetails = function NoteDetails(_ref) {
  var isShow = _ref.isShow,
      note = _ref.note,
      editDetails = _ref.editDetails;

  var _descr = (0, _getNoteDescr["default"])(note);

  return _react["default"].createElement(_ShowHide["default"], {
    className: CL,
    isShow: isShow
  }, _react["default"].createElement("div", {
    onClick: editDetails
  }, _react["default"].createElement(_LabelList["default"], {
    labels: note.labels
  }), _react["default"].createElement("div", null, _descr)));
};

var _default = NoteDetails;
exports["default"] = _default;
//# sourceMappingURL=NoteDetails.js.map