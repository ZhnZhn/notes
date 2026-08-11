import crCn from '../zhn-utils/crCn';

export const CL_TAB = 'tab not-selected'
, CL_TAB_SELECTED = 'tab--selected'
, crTabCn = (isSelected) => crCn(
  CL_TAB,
  [isSelected, CL_TAB_SELECTED]
)
, crTabId = (
  tabPaneId,
  index
) => `tab-${tabPaneId}-${index}`
, crTabPanelId = (
  tabPaneId,
  index
) => `tabpanel-${tabPaneId}-${index}`
