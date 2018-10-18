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

var _reactRedux = require('react-redux');

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _actions = require('../../flux/column/actions');

var _isNotDnD = require('../zhn-dnd/isNotDnD');

var _isNotDnD2 = _interopRequireDefault(_isNotDnD);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Main = require('../zhn-ch/Main');

var _Main2 = _interopRequireDefault(_Main);

var _BoardList = require('./BoardList');

var _BoardList2 = _interopRequireDefault(_BoardList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageBoards = function (_Component) {
  (0, _inherits3.default)(PageBoards, _Component);

  function PageBoards() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, PageBoards);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = PageBoards.__proto__ || Object.getPrototypeOf(PageBoards)).call.apply(_ref, [this].concat(args))), _this), _this._hDragEnd = function (result) {
      if ((0, _isNotDnD2.default)(result)) {
        return;
      }
      _this.props.moveColumn(result);
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(PageBoards, [{
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(_Header2.default, null), _react2.default.createElement(
        _reactBeautifulDnd.DragDropContext,
        {
          onDragEnd: this._hDragEnd
        },
        _react2.default.createElement(
          _Main2.default,
          null,
          _react2.default.createElement(_BoardList2.default, null)
        )
      )];
    }
  }]);
  return PageBoards;
}(_react.Component);

var mapDispatchToProps = {
  moveColumn: _actions.moveColumn
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(PageBoards);
//# sourceMappingURL=PageBoards.js.map