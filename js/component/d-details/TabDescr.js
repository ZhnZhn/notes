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

var _InputTextArea = require('../zhn/InputTextArea');

var _InputTextArea2 = _interopRequireDefault(_InputTextArea);

var _DialogButtons = require('./DialogButtons');

var _DialogButtons2 = _interopRequireDefault(_DialogButtons);

var _getNoteDescr = require('../board/getNoteDescr');

var _getNoteDescr2 = _interopRequireDefault(_getNoteDescr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  DESCR: 'md-details__descr',
  ACTIONS: 'md__actions'
};

var TabDescr = function (_Component) {
  (0, _inherits3.default)(TabDescr, _Component);

  function TabDescr() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, TabDescr);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = TabDescr.__proto__ || Object.getPrototypeOf(TabDescr)).call.apply(_ref, [this].concat(args))), _this), _this._focusBtClose = function () {
      if (_this.props.isSelected && _this._buttons) {
        _this._buttons.focusBtClose();
      }
    }, _this._editDescr = function () {
      var _this$props = _this.props,
          note = _this$props.note,
          dispatch = _this$props.dispatch,
          _descr = _this._inputDescr.getValue();

      dispatch(_actions2.default.editNoteDescr(note.id, _descr));
    }, _this._refInputDescr = function (node) {
      return _this._inputDescr = node;
    }, _this._refButtons = function (node) {
      return _this._buttons = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(TabDescr, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._focusBtClose();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          note = _props.note,
          onClose = _props.onClose,
          _initDescr = (0, _getNoteDescr2.default)(note);

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_InputTextArea2.default, {
          ref: this._refInputDescr,
          key: note.id,
          className: CL.DESCR,
          maxLength: 250,
          initValue: _initDescr
        }),
        _react2.default.createElement(_DialogButtons2.default, {
          ref: this._refButtons,
          className: CL.ACTIONS,
          onSave: this._editDescr,
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
  return TabDescr;
}(_react.Component);

exports.default = TabDescr;
//# sourceMappingURL=TabDescr.js.map