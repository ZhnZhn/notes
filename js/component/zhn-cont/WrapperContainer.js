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

var _modalRouter = require('../dialogs/modalRouter');

var _modalRouter2 = _interopRequireDefault(_modalRouter);

var _WrapperModalDialog = require('../zhn-ch/WrapperModalDialog');

var _WrapperModalDialog2 = _interopRequireDefault(_WrapperModalDialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import PropTypes from 'prop-types'

var WrapperContainer = function (_Component) {
  (0, _inherits3.default)(WrapperContainer, _Component);

  function WrapperContainer() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, WrapperContainer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = WrapperContainer.__proto__ || Object.getPrototypeOf(WrapperContainer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      isShow: false,
      inits: {},
      shows: {},
      data: {},
      dialogs: [],
      currentDialog: null
    }, _this._onStore = function () {
      var store = _this.props.store,
          _store$getState = store.getState(),
          _store$getState$modal = _store$getState.modal,
          modal = _store$getState$modal === undefined ? {} : _store$getState$modal,
          type = modal.id,
          _modal$data = modal.data,
          dialogProps = _modal$data === undefined ? {} : _modal$data;

      if (type && _this.modal !== modal) {
        _this.modal = modal;
        _this.setState(function (prevState) {
          var inits = prevState.inits,
              shows = prevState.shows,
              data = prevState.data,
              dialogs = prevState.dialogs;

          if (!inits[type]) {
            dialogs.push({ type: type, comp: _modalRouter2.default.getDialog(type) });
            inits[type] = true;
            shows[type] = true;
            data[type] = dialogProps;
            return {
              isShow: true,
              currentDialog: type,
              shows: shows,
              data: data,
              dialogs: dialogs
            };
          } else {
            shows[type] = true;
            data[type] = dialogProps;
            return {
              isShow: true,
              currentDialog: type,
              shows: shows,
              data: data
            };
          }
        });
      }
    }, _this._hClose = function (type) {
      _this.setState(function (prevState) {
        prevState.shows[type] = false;
        return {
          isShow: false,
          currentDialog: null,
          shows: prevState.shows
        };
      });
    }, _this._renderDialogs = function () {
      var _this$state = _this.state,
          shows = _this$state.shows,
          data = _this$state.data,
          dialogs = _this$state.dialogs;

      return dialogs.map(function (dialog) {
        var type = dialog.type,
            comp = dialog.comp;

        return _react2.default.createElement(comp, {
          key: type,
          isShow: shows[type],
          data: data[type],
          onClose: _this._hClose.bind(null, type) });
      });
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }
  /*
  static propTypes = {
    store: PropTypes.shape({
      subscribe: PropTypes.func
    })
  }
  */

  (0, _createClass3.default)(WrapperContainer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.unsubscribe = this.props.store.subscribe(this._onStore);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (this.state.currentDialog === nextState.currentDialog) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isShow = _state.isShow,
          currentDialog = _state.currentDialog;

      return _react2.default.createElement(
        _WrapperModalDialog2.default,
        {
          isShow: isShow,
          onClose: this._hClose.bind(null, currentDialog)
        },
        this._renderDialogs()
      );
    }
  }]);
  return WrapperContainer;
}(_react.Component);

exports.default = WrapperContainer;
//# sourceMappingURL=WrapperContainer.js.map