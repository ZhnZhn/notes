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

var _FlatButton = require('../zhn-m/FlatButton');

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _getNoteDescr = require('../board/getNoteDescr');

var _getNoteDescr2 = _interopRequireDefault(_getNoteDescr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  DESCR: 'md-details__descr',
  ACTIONS: 'md__actions'
};

var DetailsTabDescr = function (_Component) {
  (0, _inherits3.default)(DetailsTabDescr, _Component);

  function DetailsTabDescr() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DetailsTabDescr);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DetailsTabDescr.__proto__ || Object.getPrototypeOf(DetailsTabDescr)).call.apply(_ref, [this].concat(args))), _this), _this._focusBtClose = function () {
      if (_this.props.isSelected && _this._btClose && _this._btClose.focus) {
        _this._btClose.focus();
      }
    }, _this._editDescr = function () {
      var _this$props = _this.props,
          note = _this$props.note,
          dispatch = _this$props.dispatch,
          _descr = _this._inputDescr.getValue();

      dispatch(_actions2.default.editNoteDescr(note.id, _descr));
    }, _this._refInputDescr = function (node) {
      return _this._inputDescr = node;
    }, _this._refBtClose = function (node) {
      return _this._btClose = node;
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DetailsTabDescr, [{
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
        _react2.default.createElement(
          'div',
          { className: CL.ACTIONS },
          _react2.default.createElement(_FlatButton2.default, {
            caption: 'Save',
            timeout: 100,
            onClick: this._editDescr
          }),
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
  return DetailsTabDescr;
}(_react.Component);

exports.default = DetailsTabDescr;
//# sourceMappingURL=DetailsTabDescr.js.map