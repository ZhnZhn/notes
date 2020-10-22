"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _jsxRuntime = require("react/jsx-runtime");

var _ShowHide = _interopRequireDefault(require("../zhn-ch/ShowHide"));

var _LabelList = _interopRequireDefault(require("../d-details/LabelList"));

var _getNoteDescr = _interopRequireDefault(require("./getNoteDescr"));

var CL = 'note__details';

var NoteDetails = function NoteDetails(_ref) {
  var isShow = _ref.isShow,
      note = _ref.note,
      editDetails = _ref.editDetails;

  var _descr = (0, _getNoteDescr["default"])(note);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ShowHide["default"], {
    className: CL,
    isShow: isShow,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      onClick: editDetails,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelList["default"], {
        labels: note.labels
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: _descr
      })]
    })
  });
};

var _default = NoteDetails;
exports["default"] = _default;
//# sourceMappingURL=NoteDetails.js.map