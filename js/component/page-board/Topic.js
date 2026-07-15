"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _useBool = _interopRequireDefault(require("../hooks/useBool"));
var _reducer = require("../../flux/column/reducer");
var _actions = require("../../flux/column/actions");
var _actions2 = require("../../flux/note/actions");
var _isArrEmpty = _interopRequireDefault(require("../../utils/isArrEmpty"));
var _BtSvg = require("../zhn/BtSvg");
var _TopicMenuMore = _interopRequireDefault(require("./TopicMenuMore"));
var _Card = _interopRequireDefault(require("../zhn-card/Card"));
var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));
var _DnDNoteList = _interopRequireDefault(require("./DnDNoteList"));
var _CL = require("../style/CL");
var _jsxRuntime = require("react/jsx-runtime");
const S_BT_SVG_MORE = {
    marginRight: 8
  },
  S_MENU_MORE = {
    position: 'absolute',
    width: 150
  };
const Topic = _ref => {
  let {
    boardId,
    column,
    notes
  } = _ref;
  const {
      id: columnId,
      isHide,
      title,
      withAdd,
      noteIds
    } = column,
    [isMenuMore, _openMenuMore, _closeMenuMore] = (0, _useBool.default)(),
    dispatch = (0, _uiApi.useDispatch)()

    /*eslint-disable react-hooks/exhaustive-deps */,
    _hHideTopic = (0, _uiApi.useCallback)(() => {
      dispatch((0, _reducer.toggleColumn)({
        columnId
      }));
    }, [columnId])
    // dispatch
    ,
    _hAddNewTask = (0, _uiApi.useCallback)(() => {
      dispatch((0, _actions2.addNote)({
        columnId
      }));
    }, [columnId])
    //dispatch
    ,
    _hBlurTitle = (0, _uiApi.useCallback)(evt => {
      const title = evt.target.value;
      if (title) {
        dispatch((0, _reducer.editColumnTitle)({
          columnId,
          title
        }));
      }
    }, [columnId])
    // dispatch
    ,
    _hRemoveColumn = (0, _uiApi.useCallback)(() => {
      dispatch((0, _actions.removeColumn)({
        boardId,
        columnId
      }));
    }, [boardId, columnId])
    // dispatch
    /*eslint-enable react-hooks/exhaustive-deps */,
    _numberOfNotes = noteIds.length;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default.Item, {
    isHide: isHide,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card.default.Header, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_BtSvg.BtSvgMore, {
        style: S_BT_SVG_MORE,
        title: "Click to open topic menu",
        onClick: _openMenuMore
      }), isMenuMore && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicMenuMore.default, {
        style: S_MENU_MORE,
        isShow: isMenuMore,
        onAddNote: _hAddNewTask,
        onHideTopic: _hHideTopic,
        onClose: _closeMenuMore
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default.Title, {
        initialValue: title,
        onBlur: _hBlurTitle
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card.default.Counter, {
        value: _numberOfNotes
      }), withAdd && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
        clCaption: _CL.CL_CARD_BT,
        caption: "AddNote",
        title: "Click to add a new note",
        timeout: 1000,
        onClick: _hAddNewTask
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DnDNoteList.default, {
      cId: columnId,
      noteIds: noteIds,
      notes: notes
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: (0, _isArrEmpty.default)(noteIds) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton.default, {
        clCaption: _CL.CL_CARD_BT,
        caption: "Remove Topic",
        onClick: _hRemoveColumn
      })
    })]
  });
};
var _default = exports.default = Topic;
//# sourceMappingURL=Topic.js.map