"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.crTabPanelId = exports.crTabId = exports.crTabCn = exports.CL_TAB_SELECTED = exports.CL_TAB = void 0;
var _crCn = _interopRequireDefault(require("../zhn-utils/crCn"));
const CL_TAB = exports.CL_TAB = 'tab not-selected',
  CL_TAB_SELECTED = exports.CL_TAB_SELECTED = 'tab--selected',
  crTabCn = isSelected => (0, _crCn.default)(CL_TAB, [isSelected, CL_TAB_SELECTED]),
  crTabId = (tabPaneId, index) => `tab-${tabPaneId}-${index}`,
  crTabPanelId = (tabPaneId, index) => `tabpanel-${tabPaneId}-${index}`;
exports.crTabPanelId = crTabPanelId;
exports.crTabId = crTabId;
exports.crTabCn = crTabCn;
//# sourceMappingURL=tabPaneFn.js.map