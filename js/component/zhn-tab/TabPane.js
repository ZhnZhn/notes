'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S = {
  UL: {
    listStyle: 'outside none none',
    marginTop: 4,
    marginLeft: 12,
    marginRight: 5,
    marginBottom: 8,
    textAlign: 'left'
  },
  TABS: {
    width: "100%",
    height: "100%"
  },
  TAB_SELECTED: {
    display: 'block',
    width: "100%",
    height: "100%"
  },
  NONE: {
    display: 'none'
  }
};

var toArray = _react2.default.Children.toArray;
var cloneElement = _react2.default.cloneElement;

var TabPane = (_temp = _class = function (_Component) {
  (0, _inherits3.default)(TabPane, _Component);

  function TabPane(props) {
    (0, _classCallCheck3.default)(this, TabPane);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TabPane.__proto__ || Object.getPrototypeOf(TabPane)).call(this, props));

    _initialiseProps.call(_this);

    var components = toArray(props.children).map(function (tab, index) {
      return cloneElement(tab.props.children, {
        key: 'comp' + index
      });
    });

    _this.state = {
      selectedTabIndex: 0,
      components: components
    };
    return _this;
  }

  (0, _createClass3.default)(TabPane, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          width = _props.width,
          height = _props.height,
          tabsStyle = _props.tabsStyle,
          children = _props.children,
          _tabs = toArray(children);

      return _react2.default.createElement(
        'div',
        { style: { width: width, height: height } },
        _react2.default.createElement(
          'ul',
          { style: (0, _extends3.default)({}, S.UL, tabsStyle) },
          this._renderTabs(_tabs)
        ),
        _react2.default.createElement(
          'div',
          { style: S.TABS },
          this._renderComponents()
        )
      );
    }
  }, {
    key: 'getSelectedTabIndex',
    value: function getSelectedTabIndex() {
      return this.state.selectedTabIndex;
    }
  }]);
  return TabPane;
}(_react.Component), _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this._hClickTab = function (index, tabEl) {
    _this2.setState({ selectedTabIndex: index });
    if (typeof tabEl.props.onClick === 'function') {
      tabEl.props.onClick();
    }
  };

  this._renderTabs = function (children) {
    var selectedTabIndex = _this2.state.selectedTabIndex;

    return children.map(function (tab, index) {
      var isSelected = index === selectedTabIndex ? true : false;
      return cloneElement(tab, {
        key: index,
        onClick: _this2._hClickTab.bind(_this2, index, tab),
        isSelected: isSelected
      });
    });
  };

  this._renderComponents = function () {
    var _state = _this2.state,
        selectedTabIndex = _state.selectedTabIndex,
        components = _state.components;

    return components.map(function (comp, index) {
      var isSelected = index === selectedTabIndex;
      var divStyle = isSelected ? S.TAB_SELECTED : S.NONE;
      return _react2.default.createElement(
        'div',
        { style: divStyle, key: 'a' + index },
        _react2.default.cloneElement(comp, { isSelected: isSelected })
      );
    });
  };
}, _temp);
exports.default = TabPane;
//# sourceMappingURL=TabPane.js.map