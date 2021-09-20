"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _jsxRuntime = require("react/jsx-runtime");

var S_UL = {
  listStyle: 'outside none none',
  marginTop: 4,
  marginLeft: 12,
  marginRight: 5,
  marginBottom: 8,
  textAlign: 'left'
},
    S_TABS = {
  width: "100%",
  height: "100%"
},
    S_TAB_SELECTED = {
  display: 'block',
  width: "100%",
  height: "100%"
},
    S_NONE = {
  display: 'none'
};

var _renderTabs = function _renderTabs(children, selectedTabIndex, hClickTab) {
  return children.map(function (tab, index) {
    return /*#__PURE__*/(0, _react.cloneElement)(tab, {
      key: index,
      id: index,
      onClick: function onClick() {
        return hClickTab(index);
      },
      isSelected: index === selectedTabIndex
    });
  });
};

var _renderComponents = function _renderComponents(children, selectedTabIndex) {
  return children.map(function (tab, index) {
    var _isSelected = index === selectedTabIndex,
        _divStyle = _isSelected ? S_TAB_SELECTED : S_NONE;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: _divStyle,
      role: "tabpanel",
      id: "tabpanel-" + index,
      "aria-labelledby": "tab-" + index,
      children: /*#__PURE__*/(0, _react.cloneElement)(tab.props.children, {
        key: 'comp' + index,
        isSelected: _isSelected
      })
    }, 'a' + index);
  });
};

var TabPane = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var width = _ref.width,
      height = _ref.height,
      tabsStyle = _ref.tabsStyle,
      children = _ref.children;

  var _useState = (0, _react.useState)(0),
      selectedTabIndex = _useState[0],
      setSelectedTabIndex = _useState[1];

  (0, _react.useImperativeHandle)(ref, function () {
    return {
      getSelectedTabIndex: function getSelectedTabIndex() {
        return selectedTabIndex;
      }
    };
  }, [selectedTabIndex]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      width: width,
      height: height
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      style: (0, _extends2["default"])({}, S_UL, tabsStyle),
      children: _renderTabs(children, selectedTabIndex, setSelectedTabIndex)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_TABS,
      children: _renderComponents(children, selectedTabIndex)
    })]
  });
});
var _default = TabPane;
exports["default"] = _default;
//# sourceMappingURL=TabPane.js.map