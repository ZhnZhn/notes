"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBtFocus = _interopRequireDefault(require("./useBtFocus"));
var _actions = require("../../flux/note/actions");
var _LabelList = _interopRequireDefault(require("./LabelList"));
var _InputText = _interopRequireDefault(require("../zhn/InputText"));
var _PaneColors = _interopRequireDefault(require("../zhn-m/PaneColors"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _DialogButtons = _interopRequireDefault(require("./DialogButtons"));
var _TabLabelsFn = require("./TabLabelsFn");
var _CL = require("../style/CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_LABELS = {
    padding: '4px 0 8px 12px'
  },
  S_BT_ADD = {
    marginLeft: 16
  };
const TabLabels = props => {
  const {
      isSelected,
      note,
      dispatch,
      onClose
    } = props,
    {
      id
    } = note,
    [labels, setLabels] = (0, _uiApi.useState)(() => note.labels || []),
    _refBtClose = (0, _uiApi.useRef)(null),
    _refLabel = (0, _uiApi.useRef)(''),
    _refInputLabel = (0, _uiApi.useRef)(null),
    _refInputColor = (0, _uiApi.useRef)(null),
    _onBlurLabel = (0, _uiApi.useCallback)(evt => {
      _refLabel.current = evt.target.value;
    }, []),
    _onAddLabel = (0, _uiApi.useCallback)(() => {
      setLabels(prevState => (0, _TabLabelsFn.addLabel)(prevState, (0, _TabLabelsFn.toTitle)((0, _uiApi.getRefValue)(_refLabel)), (0, _uiApi.getRefValue)(_refInputColor).getColor()), (0, _uiApi.getRefValue)(_refInputLabel).setValue(''));
    }, []),
    _onRemoveLabel = (0, _uiApi.useCallback)(label => {
      setLabels(prevState => (0, _TabLabelsFn.removeLabel)(prevState, label));
    }, [])
    /*eslint-disable react-hooks/exhaustive-deps */,
    _saveLabels = (0, _uiApi.useCallback)(() => {
      dispatch((0, _actions.editNoteLabels)({
        noteId: id,
        labels
      }));
    }, [id, labels]);
  //dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  (0, _useBtFocus.default)(_refBtClose, isSelected, props);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: S_LABELS,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_LabelList.default, {
        labels: labels,
        onRemove: _onRemoveLabel
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_InputText.default, {
        refEl: _refInputLabel,
        onBlur: _onBlurLabel
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
        clCaption: _CL.CL_CARD_BT,
        style: S_BT_ADD,
        caption: "AddLabel",
        title: "Click to add a new label",
        timeout: 400,
        onClick: _onAddLabel
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_PaneColors.default, {
      refEl: _refInputColor
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogButtons.default, {
      refBtClose: _refBtClose,
      className: _CL.CL_MD_ACTIONS,
      onSave: _saveLabels,
      onClose: onClose
    })]
  });
};
var _default = exports.default = TabLabels;
//# sourceMappingURL=TabLabels.js.map