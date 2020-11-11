"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _jsxRuntime = require("react/jsx-runtime");

var _react = require("react");

var _actions = _interopRequireDefault(require("../../flux/note/actions"));

var _InputTextArea = _interopRequireDefault(require("../zhn/InputTextArea"));

var _DialogButtons = _interopRequireDefault(require("./DialogButtons"));

var _getNoteDescr = _interopRequireDefault(require("../page-board/getNoteDescr"));

var CL = {
  DESCR: 'md-details__descr',
  ACTIONS: 'md__actions'
};

var TabDescr = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TabDescr, _Component);

  function TabDescr(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._focusBtClose = function () {
      var _btClose = _this._refBtClose.current;

      if (_this.props.isSelected && _btClose) {
        _btClose.focus();
      }
    };

    _this._editDescr = function () {
      var _this$props = _this.props,
          note = _this$props.note,
          dispatch = _this$props.dispatch,
          _descr = _this._inputDescr.getValue();

      dispatch(_actions["default"].editNoteDescr(note.id, _descr));
    };

    _this._refInputDescr = function (node) {
      return _this._inputDescr = node;
    };

    _this._refBtClose = /*#__PURE__*/(0, _react.createRef)();
    return _this;
  }

  var _proto = TabDescr.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._focusBtClose();
  };

  //_refButtons = (node) => this._buttons = node
  _proto.render = function render() {
    var _this$props2 = this.props,
        note = _this$props2.note,
        onClose = _this$props2.onClose,
        _initDescr = (0, _getNoteDescr["default"])(note);

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_InputTextArea["default"], {
        ref: this._refInputDescr,
        className: CL.DESCR,
        maxLength: 250,
        initValue: _initDescr
      }, note.id), /*#__PURE__*/(0, _jsxRuntime.jsx)(_DialogButtons["default"] //ref={this._refButtons}
      , {
        refBtClose: this._refBtClose,
        className: CL.ACTIONS,
        onSave: this._editDescr,
        onClose: onClose
      })]
    });
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props !== prevProps && this.props.isSelected) {
      this._focusBtClose();
    }
  };

  return TabDescr;
}(_react.Component);

var _default = TabDescr;
exports["default"] = _default;
//# sourceMappingURL=TabDescr.js.map