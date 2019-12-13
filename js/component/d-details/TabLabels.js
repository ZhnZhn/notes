"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _actions = _interopRequireDefault(require("../../flux/note/actions"));

var _LabelList = _interopRequireDefault(require("./LabelList"));

var _InputText = _interopRequireDefault(require("../zhn/InputText"));

var _PaneColors = _interopRequireDefault(require("../zhn-m/PaneColors"));

var _FlatButton = _interopRequireDefault(require("../zhn-m/FlatButton"));

var _DialogButtons = _interopRequireDefault(require("./DialogButtons"));

var _fnTabLabels = _interopRequireDefault(require("./fnTabLabels"));

var _CL = _interopRequireDefault(require("../style/CL"));

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

var TabLabels =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(TabLabels, _Component);

  function TabLabels(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._focusBtClose = function () {
      if (_this.props.isSelected && _this._buttons) {
        _this._buttons.focusBtClose();
      }
    };

    _this._onBlurLabel = function (evt) {
      _this._label = evt.target.value;
    };

    _this._onAddLabel = function () {
      _this.setState(function (prevState) {
        return addLabel(prevState, toTitle(_this._label), _this._inputColor.getColor());
      }, function () {
        return _this._inputLabel.setValue('');
      });
    };

    _this._onRemoveLabel = function (label) {
      _this.setState(function (prevState) {
        return removeLabel(prevState, label);
      });
    };

    _this._saveLabels = function () {
      var _this$props = _this.props,
          note = _this$props.note,
          dispatch = _this$props.dispatch;
      dispatch(_actions["default"].editNoteLabels(note.id, _this.state.labels));
    };

    _this._refInputLabel = function (node) {
      return _this._inputLabel = node;
    };

    _this._refInputColor = function (node) {
      return _this._inputColor = node;
    };

    _this._refButtons = function (node) {
      return _this._buttons = node;
    };

    _this.state = {
      labels: props.note.labels || []
    };
    return _this;
  }

  var _proto = TabLabels.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._focusBtClose();
  };

  _proto.render = function render() {
    var onClose = this.props.onClose,
        labels = this.state.labels;
    return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
      style: S.LABELS
    }, _react["default"].createElement(_LabelList["default"], {
      labels: labels,
      onRemove: this._onRemoveLabel
    }), _react["default"].createElement(_InputText["default"], {
      ref: this._refInputLabel,
      onBlur: this._onBlurLabel
    }), _react["default"].createElement(_FlatButton["default"], {
      clCaption: _CL["default"].CARD_BT,
      rootStyle: S.BT_ADD,
      caption: "AddLabel",
      title: "Click to add a new label",
      timeout: 400,
      onClick: this._onAddLabel
    })), _react["default"].createElement(_PaneColors["default"], {
      ref: this._refInputColor
    }), _react["default"].createElement(_DialogButtons["default"], {
      ref: this._refButtons,
      className: _CL["default"].MD_ACTIONS,
      onSave: this._saveLabels,
      onClose: onClose
    }));
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props !== prevProps && this.props.isSelected) {
      this._focusBtClose();
    }
  };

  return TabLabels;
}(_react.Component);

var _default = TabLabels;
exports["default"] = _default;
//# sourceMappingURL=TabLabels.js.map