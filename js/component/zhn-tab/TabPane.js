"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

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
var toArray = _react.Children.toArray;

var TabPane = /*#__PURE__*/function (_Component) {
  (0, _inheritsLoose2["default"])(TabPane, _Component);

  function TabPane(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this._hClickTab = function (index, tabEl) {
      _this.setState({
        selectedTabIndex: index
      });

      if (typeof tabEl.props.onClick === 'function') {
        tabEl.props.onClick();
      }
    };

    _this._renderTabs = function (children) {
      var selectedTabIndex = _this.state.selectedTabIndex;
      return children.map(function (tab, index) {
        var isSelected = index === selectedTabIndex ? true : false;
        return /*#__PURE__*/(0, _react.cloneElement)(tab, {
          key: index,
          onClick: _this._hClickTab.bind((0, _assertThisInitialized2["default"])(_this), index, tab),
          isSelected: isSelected
        });
      });
    };

    _this._renderComponents = function () {
      var _this$state = _this.state,
          selectedTabIndex = _this$state.selectedTabIndex,
          components = _this$state.components;
      return components.map(function (comp, index) {
        var isSelected = index === selectedTabIndex;
        var divStyle = isSelected ? S.TAB_SELECTED : S.NONE;
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          style: divStyle,
          children: /*#__PURE__*/(0, _react.cloneElement)(comp, {
            isSelected: isSelected
          })
        }, 'a' + index);
      });
    };

    var _components = toArray(props.children).map(function (tab, index) {
      return /*#__PURE__*/(0, _react.cloneElement)(tab.props.children, {
        key: 'comp' + index
      });
    });

    _this.state = {
      selectedTabIndex: 0,
      components: _components
    };
    return _this;
  }

  var _proto = TabPane.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        width = _this$props.width,
        height = _this$props.height,
        tabsStyle = _this$props.tabsStyle,
        children = _this$props.children,
        _tabs = toArray(children);

    return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      style: {
        width: width,
        height: height
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
        style: (0, _extends2["default"])({}, S.UL, tabsStyle),
        children: this._renderTabs(_tabs)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
        style: S.TABS,
        children: this._renderComponents()
      })]
    });
  };

  _proto.getSelectedTabIndex = function getSelectedTabIndex() {
    return this.state.selectedTabIndex;
  };

  return TabPane;
}(_react.Component);

var _default = TabPane;
exports["default"] = _default;
//# sourceMappingURL=TabPane.js.map