"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _reactRouterDom = require("react-router-dom");

var _reactRedux = require("react-redux");

var _actions = require("../../flux/board/actions");

var _selectors = require("../../flux/selectors");

var _CL = _interopRequireDefault(require("../style/CL"));

var _isArrEmpty = _interopRequireDefault(require("../../utils/isArrEmpty"));

var _Card = _interopRequireDefault(require("../zhn-card/Card"));

var _DnDTopicList = _interopRequireDefault(require("./DnDTopicList"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var S = {
  LINK: {
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 4
  }
};

var BoardCard = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(BoardCard, _Component);

  function BoardCard() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._hBlurTitle = function (evt) {
      var _this$props = _this.props,
          board = _this$props.board,
          editBoardTitle = _this$props.editBoardTitle;
      editBoardTitle(board.id, evt.target.value);
    };

    _this._hSetCurrent = function () {
      var _this$props2 = _this.props,
          board = _this$props2.board,
          setBoardCurrent = _this$props2.setBoardCurrent;
      setBoardCurrent(board.id);
    };

    _this._hRemove = function () {
      var _this$props3 = _this.props,
          board = _this$props3.board,
          removeBoard = _this$props3.removeBoard;
      removeBoard(board.id);
    };

    _this._hToNotes = function () {
      var _this$props4 = _this.props,
          board = _this$props4.board,
          setBoardCurrent = _this$props4.setBoardCurrent;
      setBoardCurrent(board.id);
    };

    return _this;
  }

  var _proto = BoardCard.prototype;

  _proto.render = function render() {
    var _this$props5 = this.props,
        id = _this$props5.id,
        board = _this$props5.board,
        columns = _this$props5.columns,
        columnIds = board.columnIds;
    return /*#__PURE__*/_react["default"].createElement(_Card["default"].Item, null, /*#__PURE__*/_react["default"].createElement(_Card["default"].Title, {
      value: board.title,
      onBlur: this._hBlurTitle
    }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Counter, {
      value: columnIds.length
    }), /*#__PURE__*/_react["default"].createElement(_DnDTopicList["default"], {
      id: id,
      columnIds: columnIds,
      columns: columns
    }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.NavLink, {
      to: "/boards/" + board.id,
      className: _CL["default"].NAV_LINK,
      style: S.LINK,
      onClick: this._hToNotes
    }, "ToNotes"), /*#__PURE__*/_react["default"].createElement("div", null, (0, _isArrEmpty["default"])(columnIds) && /*#__PURE__*/_react["default"].createElement(_FlatButton["default"], {
      clCaption: _CL["default"].CARD_BT,
      caption: "Remove Board",
      onClick: this._hRemove
    })));
  };

  return BoardCard;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    board: _selectors.sBoard.board(state, ownProps.id),
    columns: _selectors.sColumn.columns(state)
  };
};

var mapDispatchToProps = {
  editBoardTitle: _actions.editBoardTitle,
  setBoardCurrent: _actions.setBoardCurrent,
  removeBoard: _actions.removeBoard
};

var _default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(BoardCard);

exports["default"] = _default;
//# sourceMappingURL=BoardCard.js.map