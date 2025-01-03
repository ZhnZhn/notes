import {
  useState,
  cloneUiElement
} from "../uiApi";

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

const _renderTabs = (
  children,
  selectedTabIndex,
  hClickTab
) => children
 .map((ElementTab, index) => cloneUiElement(ElementTab, {
    id: index,
    onClick: () => hClickTab(index),
    isSelected: index === selectedTabIndex
 }, index));

 const _renderComponents = (
   children,
   selectedTabIndex
 ) => children
  .map((ElementTab, index) => {
     const _isSelected = (index === selectedTabIndex)
     , _divStyle = _isSelected
         ? S_TAB_SELECTED
         : S_NONE;
     return (
        <div
          key={"a"+index}
          style={_divStyle}
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
        >
           {cloneUiElement(ElementTab.props.children, {
             isSelected: _isSelected
           }, "comp"+index)}
        </div>
     );
 });


const TabPane = ({
  width,
  height,
  tabsStyle,
  children
}) => {
  const [
    selectedTabIndex,
    setSelectedTabIndex
  ] = useState(0)

  return (
    <div style={{width, height}}>
      <ul style={{...S_UL, ...tabsStyle}}>
         {_renderTabs(children, selectedTabIndex, setSelectedTabIndex)}
      </ul>
      <div style={S_TABS}>
         {_renderComponents(children, selectedTabIndex)}
      </div>
    </div>
  );
};

export default TabPane
