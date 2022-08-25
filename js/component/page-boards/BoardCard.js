"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _uiApi = require("../uiApi");

var _reactRedux = require("react-redux");

var _actions = require("../../flux/board/actions");

var _reducer = require("../../flux/board/reducer");

var _selectors = require("../../flux/selectors");

var _isArrEmpty = _interopRequireDefault(require("../../utils/isArrEmpty"));

var _CL = require("../style/CL");

var _Card = _interopRequireDefault(require("../zhn-card/Card"));

var _DnDTopicList = _interopRequireDefault(require("./DnDTopicList"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _jsxRuntime = require("react/jsx-runtime");

var S_LINK = {
  margin: '8px 8px 4px 0'
};

var BoardCard = function BoardCard(_ref) {
  var boardId = _ref.id;

  var dispatch = (0, _reactRedux.useDispatch)(),
      _useMemo = (0, _uiApi.useMemo)(function () {
    return [function (evt) {
      return dispatch((0, _reducer.editBoardTitle)({
        boardId: boardId,
        title: evt.target.value
      }));
    }, function () {
      return dispatch((0, _actions.removeBoard)({
        boardId: boardId
      }));
    }, function () {
      return dispatch((0, _actions.setCurrentBoard)({
        boardId: boardId
      }));
    }, function (state) {
      return _selectors.sBoard.board(state, boardId);
    }];
  }, [boardId, dispatch]),
      _hBlurTitle = _useMemo[0],
      _hRemove = _useMemo[1],
      _hToNotes = _useMemo[2],
      _selectBoard = _useMemo[3],
      board = (0, _reactRedux.useSelector)(_selectBoard),
      columns = (0, _reactRedux.useSelector)(_selectors.sColumn.columns),
      columnIds = board.columnIds;

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"].Item, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"].Header, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Title, {
        initialValue: board.title,
        onBlur: _hBlurTitle
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Counter, {
        value: columnIds.length
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DnDTopicList["default"], {
      id: boardId,
      columnIds: columnIds,
      columns: columns
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_uiApi.NavLink, {
      to: "/boards/" + boardId,
      className: _CL.CL_NAV_LINK,
      style: S_LINK,
      onClick: _hToNotes,
      children: "ToNotes"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: (0, _isArrEmpty["default"])(columnIds) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
        clCaption: _CL.CL_CARD_BT,
        caption: "Remove Board",
        onClick: _hRemove
      })
    })]
  });
};

var _default = BoardCard;
exports["default"] = _default;
//# sourceMappingURL=BoardCard.js.map