"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _useBool2 = _interopRequireDefault(require("../hooks/useBool"));

var _reducer = require("../../flux/column/reducer");

var _actions = require("../../flux/column/actions");

var _isArrEmpty = _interopRequireDefault(require("../../utils/isArrEmpty"));

var _SvgMore = _interopRequireDefault(require("../zhn/SvgMore"));

var _TopicMenuMore = _interopRequireDefault(require("./TopicMenuMore"));

var _Card = _interopRequireDefault(require("../zhn-card/Card"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _DnDNoteList = _interopRequireDefault(require("./DnDNoteList"));

var _CL = require("../style/CL");

var _jsxRuntime = require("react/jsx-runtime");

var S_SVG_MORE = {
  marginRight: 8
},
    S_MENU_MORE = {
  position: 'absolute',
  width: 150
};

var Topic = function Topic(_ref) {
  var boardId = _ref.boardId,
      column = _ref.column,
      notes = _ref.notes,
      addNote = _ref.addNote;

  var columnId = column.id,
      isHide = column.isHide,
      title = column.title,
      withAdd = column.withAdd,
      noteIds = column.noteIds,
      _useBool = (0, _useBool2["default"])(),
      isMenuMore = _useBool[0],
      _openMenuMore = _useBool[1],
      _closeMenuMore = _useBool[2],
      dispatch = (0, _uiApi.useDispatch)(),
      _hHideTopic = (0, _uiApi.useCallback)(function () {
    dispatch((0, _reducer.toggleColumn)({
      columnId: columnId
    }));
  }, [columnId]),
      _hAddNewTask = (0, _uiApi.useCallback)(function () {
    addNote({
      columnId: columnId
    });
  }, [addNote, columnId]),
      _hBlurTitle = (0, _uiApi.useCallback)(function (evt) {
    dispatch((0, _reducer.editColumnTitle)({
      columnId: columnId,
      title: evt.target.value
    }));
  }, [columnId]),
      _hRemoveColumn = (0, _uiApi.useCallback)(function () {
    dispatch((0, _actions.removeColumn)({
      boardId: boardId,
      columnId: columnId
    }));
  }, [boardId, columnId]),
      _numberOfNotes = noteIds.length;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"].Item, {
    isHide: isHide,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"].Header, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
        style: S_SVG_MORE,
        title: "Click to open topic menu",
        onClick: _openMenuMore
      }), isMenuMore && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicMenuMore["default"], {
        style: S_MENU_MORE,
        isShow: isMenuMore,
        onAddNote: _hAddNewTask,
        onHideTopic: _hHideTopic,
        onClose: _closeMenuMore
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Title, {
        initialValue: title,
        onBlur: _hBlurTitle
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Counter, {
        value: _numberOfNotes
      }), withAdd && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        clCaption: _CL.CL_CARD_BT,
        caption: "AddNote",
        title: "Click to add a new note",
        timeout: 1000,
        onClick: _hAddNewTask
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DnDNoteList["default"], {
      cId: columnId,
      noteIds: noteIds,
      notes: notes
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: (0, _isArrEmpty["default"])(noteIds) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        clCaption: _CL.CL_CARD_BT,
        caption: "Remove Topic",
        onClick: _hRemoveColumn
      })
    })]
  });
};

var _default = Topic;
exports["default"] = _default;
//# sourceMappingURL=Topic.js.map