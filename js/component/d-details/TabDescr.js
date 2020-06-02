"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

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

  function TabDescr() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this._focusBtClose = function () {
      if (_this.props.isSelected && _this._buttons) {
        _this._buttons.focusBtClose();
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

    _this._refButtons = function (node) {
      return _this._buttons = node;
    };

    return _this;
  }

  var _proto = TabDescr.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._focusBtClose();
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        note = _this$props2.note,
        onClose = _this$props2.onClose,
        _initDescr = (0, _getNoteDescr["default"])(note);

    return /*#__PURE__*/_react["default"].createElement(_react.Fragment, null, /*#__PURE__*/_react["default"].createElement(_InputTextArea["default"], {
      ref: this._refInputDescr,
      key: note.id,
      className: CL.DESCR,
      maxLength: 250,
      initValue: _initDescr
    }), /*#__PURE__*/_react["default"].createElement(_DialogButtons["default"], {
      ref: this._refButtons,
      className: CL.ACTIONS,
      onSave: this._editDescr,
      onClose: onClose
    }));
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