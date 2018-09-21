'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _DetailsLabelList = require('./DetailsLabelList');

var _DetailsLabelList2 = _interopRequireDefault(_DetailsLabelList);

var _InputText = require('../zhn/InputText');

var _InputText2 = _interopRequireDefault(_InputText);

var _PaneColors = require('../zhn-m/PaneColors');

var _PaneColors2 = _interopRequireDefault(_PaneColors);

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _CL = require('../style/CL');

var _CL2 = _interopRequireDefault(_CL);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var DetailsTabLabels = function (_Component) {
  (0, _inherits3.default)(DetailsTabLabels, _Component);

  function DetailsTabLabels() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DetailsTabLabels);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsTabLabels.__proto__ || Object.getPrototypeOf(DetailsTabLabels)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      labels: []
    }, _this._focusBtClose = function () {
      if (_this.props.isSelected && _this._btClose && _this._btClose.focus) {
        _this._btClose.focus();
      }
    }, _this._onBlurLabel = function (evt) {
      _this._label = evt.target.value;
    }, _this._onAddLabel = function () {
      var _c = _this._inputColor.getColor();
      _this._inputLabel.setValue('');
      _this.setState(function (prevState) {
        return {
          labels: [].concat((0, _toConsumableArray3.default)(prevState.labels), [{
            title: _this._label,
            color: _c
          }])
        };
      });
    }, _this._onRemoveLabel = function (label) {
      _this.setState(function (prevState) {
        return {
          labels: prevState.labels.filter(function (item) {
            return item.title !== label.title;
          })
        };
      });
    }, _this._refInputLabel = function (node) {
      return _this._inputLabel = node;
    }, _this._refInputColor = function (node) {
      return _this._inputColor = node;
    }, _this._refBtClose = function (node) {
      return _this._btClose = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DetailsTabLabels, [{
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
          _react2.default.createElement(_DetailsLabelList2.default, {
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
        _react2.default.createElement(
          'div',
          { className: _CL2.default.MD_ACTIONS },
          _react2.default.createElement(_FlatButton2.default, {
            ref: this._refBtClose,
            caption: 'Close',
            timeout: 0,
            onClick: onClose
          })
        )
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
  return DetailsTabLabels;
}(_react.Component);

exports.default = DetailsTabLabels;
//# sourceMappingURL=DetailsTabLabels.js.map