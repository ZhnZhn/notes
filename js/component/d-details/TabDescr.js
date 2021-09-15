"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _reducer = require("../../flux/note/reducer");

var _InputTextArea = _interopRequireDefault(require("../zhn/InputTextArea"));

var _DialogButtons = _interopRequireDefault(require("./DialogButtons"));

var _getNoteDescr = _interopRequireDefault(require("../page-board/getNoteDescr"));

var _jsxRuntime = require("react/jsx-runtime");

var CL = {
  DESCR: 'md-details__descr',
  ACTIONS: 'md__actions'
};

var TabDescr = function TabDescr(props) {
  var isSelected = props.isSelected,
      note = props.note,
      dispatch = props.dispatch,
      onClose = props.onClose,
      id = note.id,
      _refBtClose = (0, _react.useRef)(null),
      _refInputDescr = (0, _react.useRef)(null),
      _editDescr = (0, _react.useCallback)(function () {
    dispatch((0, _reducer.editNoteDescr)({
      noteId: id,
      descr: _refInputDescr.current.getValue()
    }));
  }, [id]); //dispatch


  (0, _react.useEffect)(function () {
    var _btClose = _refBtClose.current;

    if (isSelected && _btClose) {
      _btClose.focus();
    }
  }, [props]); //isSelected

  var _initDescr = (0, _getNoteDescr["default"])(note);

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputTextArea["default"], {
      ref: _refInputDescr,
      className: CL.DESCR,
      maxLength: 250,
      initValue: _initDescr
    }, id), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogButtons["default"], {
      refBtClose: _refBtClose,
      className: CL.ACTIONS,
      onSave: _editDescr,
      onClose: onClose
    })]
  });
};

var _default = TabDescr;
exports["default"] = _default;
//# sourceMappingURL=TabDescr.js.map