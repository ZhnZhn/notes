'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actions = require('../../flux/note/actions');

var _actions2 = _interopRequireDefault(_actions);

var _LabelList = require('./LabelList');

var _LabelList2 = _interopRequireDefault(_LabelList);

var _InputText = require('../zhn/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _PaneColors = require('../zhn-m/PaneColors');

var _PaneColors2 = _interopRequireDefault(_PaneColors);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _DialogButtons = require('./DialogButtons');

var _DialogButtons2 = _interopRequireDefault(_DialogButtons);

var _fnTabLabels = require('./fnTabLabels');

var _fnTabLabels2 = _interopRequireDefault(_fnTabLabels);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toTitle = _fnTabLabels2.default.toTitle,
    addLabel = _fnTabLabels2.default.addLabel,
    removeLabel = _fnTabLabels2.default.removeLabel;


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

var TabLabels = function (_Component) {
  (0, _inherits3.default)(TabLabels, _Component);

  function TabLabels(props) {
    (0, _classCallCheck3.default)(this, TabLabels);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabLabels.__proto__ || Object.getPrototypeOf(TabLabels)).call(this, props));

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

      dispatch(_actions2.default.editNoteLabels(note.id, _this.state.labels));
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

  (0, _createClass3.default)(TabLabels, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._focusBtClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var onClose = this.props.onClose,
          labels = this.state.labels;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(
          'div',
          { style: S.LABELS },
          _react2.default.createElement(_LabelList2.default, {
            labels: labels,
            onRemove: this._onRemoveLabel
          }),
          _react2.default.createElement(_InputText2.default, {
            ref: this._refInputLabel,
            onBlur: this._onBlurLabel
          }),
          _react2.default.createElement(_FlatButton2.default, {
            clCaption: _CL2.default.CARD_BT,
            rootStyle: S.BT_ADD,
            caption: 'AddLabel',
            title: 'Click to add a new label',
            timeout: 400,
            onClick: this._onAddLabel
          })
        ),
        _react2.default.createElement(_PaneColors2.default, {
          ref: this._refInputColor
        }),
        _react2.default.createElement(_DialogButtons2.default, {
          ref: this._refButtons,
          className: _CL2.default.MD_ACTIONS,
          onSave: this._saveLabels,
          onClose: onClose
        })
      );
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      if (this.props !== prevProps && this.props.isSelected) {
        this._focusBtClose();
      }
    }
  }]);
  return TabLabels;
}(_react.Component);

exports.default = TabLabels;
//# sourceMappingURL=TabLabels.js.map