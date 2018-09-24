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

var _withTheme = require('../hoc/withTheme');

var _withTheme2 = _interopRequireDefault(_withTheme);

var _Dialog = require('../style/Dialog.Style');

var _Dialog2 = _interopRequireDefault(_Dialog);

var _ModalDialog = require('../zhn-ch/ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _TabPane = require('../zhn-tab/TabPane');

var _TabPane2 = _interopRequireDefault(_TabPane);

var _Tab = require('../zhn-tab/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

var _TabDescr = require('./TabDescr');

var _TabDescr2 = _interopRequireDefault(_TabDescr);

var _TabLabels = require('./TabLabels');

var _TabLabels2 = _interopRequireDefault(_TabLabels);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CL = {
  DIALOG: 'md-details'
};

var S = {
  CAPTION: {
    marginBottom: 0
  }
};

var _crCaption = function _crCaption(note) {
  var _note$title = note.title,
      title = _note$title === undefined ? '' : _note$title,
      _title = title.substring(0, 12),
      _sufix = title.length > _title.length ? '...' : '';

  return 'Details: ' + _title + _sufix;
};

var DetailsDialog = function (_Component) {
  (0, _inherits3.default)(DetailsDialog, _Component);

  function DetailsDialog() {
    (0, _classCallCheck3.default)(this, DetailsDialog);
    return (0, _possibleConstructorReturn3.default)(this, (DetailsDialog.__proto__ || Object.getPrototypeOf(DetailsDialog)).apply(this, arguments));
  }

  (0, _createClass3.default)(DetailsDialog, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
        return false;
      }
      return true;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          isShow = _props.isShow,
          theme = _props.theme,
          data = _props.data,
          dispatch = _props.dispatch,
          onClose = _props.onClose,
          _caption = _crCaption(data),
          TS = theme.createStyle(_Dialog2.default);

      return _react2.default.createElement(
        _ModalDialog2.default,
        {
          className: CL.DIALOG,
          style: TS.DIALOG,
          captionStyle: S.CAPTION,
          caption: _caption,
          isShow: isShow,
          withoutClose: true,
          onClose: onClose
        },
        _react2.default.createElement(
          _TabPane2.default,
          { width: '100%', key: data.id },
          _react2.default.createElement(
            _Tab2.default,
            { title: 'Descr' },
            _react2.default.createElement(_TabDescr2.default, {
              note: data,
              dispatch: dispatch,
              onClose: onClose
            })
          ),
          _react2.default.createElement(
            _Tab2.default,
            { title: 'Labels' },
            _react2.default.createElement(_TabLabels2.default, {
              note: data,
              dispatch: dispatch,
              onClose: onClose
            })
          )
        )
      );
    }
  }]);
  return DetailsDialog;
}(_react.Component);

exports.default = (0, _withTheme2.default)(DetailsDialog);
//# sourceMappingURL=DetailsDialog.js.map