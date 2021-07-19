"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = require("react");

var _actions = _interopRequireDefault(require("../../flux/note/actions"));

var _LabelList = _interopRequireDefault(require("./LabelList"));

var _InputText = _interopRequireDefault(require("../zhn/InputText"));

var _PaneColors = _interopRequireDefault(require("../zhn-m/PaneColors"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _DialogButtons = _interopRequireDefault(require("./DialogButtons"));

var _fnTabLabels = _interopRequireDefault(require("./fnTabLabels"));

var _CL = _interopRequireDefault(require("../style/CL"));

var _jsxRuntime = require("react/jsx-runtime");

var toTitle = _fnTabLabels["default"].toTitle,
    addLabel = _fnTabLabels["default"].addLabel,
    removeLabel = _fnTabLabels["default"].removeLabel;
var S = {
  LABELS: {
    paddingTop: 4,
    paddingLeft: 12,
    paddingBottom: 8
  },
  BT_ADD: {
    marginLeft: 16
  }
};

var _getCurrent = function _getCurrent(ref) {
  return ref.current;
};

var TabLabels = function TabLabels(props) {
  var isSelected = props.isSelected,
      note = props.note,
      dispatch = props.dispatch,
      onClose = props.onClose,
      id = note.id,
      _useState = (0, _react.useState)(function () {
    return note.labels || [];
  }),
      labels = _useState[0],
      setLabels = _useState[1],
      _refBtClose = (0, _react.useRef)(null),
      _refLabel = (0, _react.useRef)(''),
      _refInputLabel = (0, _react.useRef)(null),
      _refInputColor = (0, _react.useRef)(null),
      _onBlurLabel = (0, _react.useCallback)(function (evt) {
    _refLabel.current = evt.target.value;
  }, []),
      _onAddLabel = (0, _react.useCallback)(function () {
    setLabels(function (prevState) {
      return addLabel(prevState, toTitle(_getCurrent(_refLabel)), _refInputColor.current.getColor());
    }, _refInputLabel.current.setValue(''));
  }, []),
      _onRemoveLabel = (0, _react.useCallback)(function (label) {
    setLabels(function (prevState) {
      return removeLabel(prevState, label);
    });
  }, []),
      _saveLabels = (0, _react.useCallback)(function () {
    dispatch(_actions["default"].editNoteLabels(id, labels));
  }, [id, labels]); //dispatch


  (0, _react.useEffect)(function () {
    var _btClose = _refBtClose.current;

    if (isSelected && _btClose) {
      _btClose.focus();
    }
  }, [props]); //isSelected

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S.LABELS,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelList["default"], {
        labels: labels,
        onRemove: _onRemoveLabel
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputText["default"], {
        ref: _refInputLabel,
        onBlur: _onBlurLabel
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        clCaption: _CL["default"].CARD_BT,
        rootStyle: S.BT_ADD,
        caption: "AddLabel",
        title: "Click to add a new label",
        timeout: 400,
        onClick: _onAddLabel
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaneColors["default"], {
      ref: _refInputColor
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogButtons["default"], {
      refBtClose: _refBtClose,
      className: _CL["default"].MD_ACTIONS,
      onSave: _saveLabels,
      onClose: onClose
    })]
  });
};

var _default = TabLabels;
exports["default"] = _default;
//# sourceMappingURL=TabLabels.js.map