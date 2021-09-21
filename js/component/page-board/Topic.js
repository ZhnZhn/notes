"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _reactRedux = require("react-redux");

var _reducer = require("../../flux/column/reducer");

var _actions = require("../../flux/column/actions");

var _isArrEmpty = _interopRequireDefault(require("../../utils/isArrEmpty"));

var _SvgMore = _interopRequireDefault(require("../zhn/SvgMore"));

var _TopicMenuMore = _interopRequireDefault(require("./TopicMenuMore"));

var _Card = _interopRequireDefault(require("../zhn-card/Card"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _DnDNoteList = _interopRequireDefault(require("./DnDNoteList"));

var _CL = _interopRequireDefault(require("../style/CL"));

var _jsxRuntime = require("react/jsx-runtime");

var S_SVG_MORE = {
  marginRight: 8
},
    S_MENU_MORE = {
  position: 'absolute',
  width: 150
};

var Topic = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(Topic, _Component);

  function Topic() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isMenuMore: false
    };

    _this._openMenuMore = function () {
      if (!_this.state.isMenuMore) {
        _this.setState({
          isMenuMore: true
        });
      }
    };

    _this._closeMenuMore = function () {
      _this.setState({
        isMenuMore: false
      });
    };

    _this._hHideTopic = function () {
      var _this$props = _this.props,
          toggleColumn = _this$props.toggleColumn,
          column = _this$props.column;
      toggleColumn({
        columnId: column.id
      });
    };

    _this._hAddNewTask = function () {
      var _this$props2 = _this.props,
          column = _this$props2.column,
          addNote = _this$props2.addNote;
      addNote({
        columnId: column.id
      });
    };

    _this._hBlurTitle = function (evt) {
      var _this$props3 = _this.props,
          column = _this$props3.column,
          editColumnTitle = _this$props3.editColumnTitle;
      editColumnTitle({
        columnId: column.id,
        title: evt.target.value
      });
    };

    _this._hRemoveColumn = function () {
      var _this$props4 = _this.props,
          boardId = _this$props4.boardId,
          column = _this$props4.column,
          removeColumn = _this$props4.removeColumn;
      removeColumn({
        boardId: boardId,
        columnId: column.id
      });
    };

    return _this;
  }

  var _proto = Topic.prototype;

  _proto.render = function render() {
    var isMenuMore = this.state.isMenuMore,
        _this$props5 = this.props,
        column = _this$props5.column,
        notes = _this$props5.notes,
        id = column.id,
        isHide = column.isHide,
        title = column.title,
        withAdd = column.withAdd,
        noteIds = column.noteIds;
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"].Item, {
      isHide: isHide,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"].Header, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SvgMore["default"], {
          style: S_SVG_MORE,
          title: "Click to open topic menu",
          onClick: this._openMenuMore
        }), isMenuMore && /*#__PURE__*/(0, _jsxRuntime.jsx)(_TopicMenuMore["default"], {
          style: S_MENU_MORE,
          isShow: isMenuMore,
          onAddNote: this._hAddNewTask,
          onHideTopic: this._hHideTopic,
          onClose: this._closeMenuMore
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Title, {
          value: title,
          onBlur: this._hBlurTitle
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Counter, {
          value: noteIds.length
        }), withAdd && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          clCaption: _CL["default"].CARD_BT,
          caption: "AddNote",
          title: "Click to add a new note",
          timeout: 1000,
          onClick: this._hAddNewTask
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DnDNoteList["default"], {
        cId: id,
        noteIds: noteIds,
        notes: notes
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        children: (0, _isArrEmpty["default"])(noteIds) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_FlatButton["default"], {
          clCaption: _CL["default"].CARD_BT,
          caption: "Remove Topic",
          onClick: this._hRemoveColumn
        })
      })]
    });
  };

  return Topic;
}(_react.Component);

var mapDispatchToProps = {
  editColumnTitle: _reducer.editColumnTitle,
  removeColumn: _actions.removeColumn,
  toggleColumn: _reducer.toggleColumn
};

var _default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Topic);

exports["default"] = _default;
//# sourceMappingURL=Topic.js.map