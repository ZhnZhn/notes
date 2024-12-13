"use strict";

exports.__esModule = true;
exports.default = void 0;
var _uiApi = require("../uiApi");
var _jsxRuntime = require("react/jsx-runtime");
const S_UL = {
    listStyle: "outside none none",
    marginTop: 4,
    marginLeft: 12,
    marginRight: 5,
    marginBottom: 8,
    textAlign: "left"
  },
  S_TABS = {
    width: "100%",
    height: "100%"
  },
  S_TAB_SELECTED = {
    display: "block",
    width: "100%",
    height: "100%"
  },
  S_NONE = {
    display: "none"
  };
const _renderTabs = (children, selectedTabIndex, hClickTab) => children.map((ElementTab, index) => (0, _uiApi.cloneUiElement)(ElementTab, {
  id: index,
  onClick: () => hClickTab(index),
  isSelected: index === selectedTabIndex
}, index));
const _renderComponents = (children, selectedTabIndex) => children.map((ElementTab, index) => {
  const _isSelected = index === selectedTabIndex,
    _divStyle = _isSelected ? S_TAB_SELECTED : S_NONE;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    style: _divStyle,
    role: "tabpanel",
    id: `tabpanel-${index}`,
    "aria-labelledby": `tab-${index}`,
    children: (0, _uiApi.cloneUiElement)(ElementTab.props.children, {
      isSelected: _isSelected
    }, "comp" + index)
  }, "a" + index);
});
const TabPane = _ref => {
  let {
    width,
    height,
    tabsStyle,
    children
  } = _ref;
  const [selectedTabIndex, setSelectedTabIndex] = (0, _uiApi.useState)(0);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    style: {
      width,
      height
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("ul", {
      style: {
        ...S_UL,
        ...tabsStyle
      },
      children: _renderTabs(children, selectedTabIndex, setSelectedTabIndex)
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      style: S_TABS,
      children: _renderComponents(children, selectedTabIndex)
    })]
  });
};
var _default = exports.default = TabPane;
//# sourceMappingURL=TabPane.js.map