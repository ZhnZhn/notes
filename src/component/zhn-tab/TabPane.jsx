import {
  forwardRef,
  useState, useImperativeHandle,
  cloneElement
} from 'react';

const S_UL = {
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

const _renderTabs = (children, selectedTabIndex, hClickTab) => children
 .map((tab, index) => cloneElement(tab, {
    key: index,
    id: index,
    onClick: () => hClickTab(index),
    isSelected: index === selectedTabIndex
 }));

 const _renderComponents = (children, selectedTabIndex) => children
  .map((tab, index) => {
     const _isSelected = (index === selectedTabIndex)
     , _divStyle = _isSelected ? S_TAB_SELECTED : S_NONE;
     return (
        <div
          key={'a'+index}
          style={_divStyle}
          role="tabpanel"
          id={`tabpanel-${index}`}
          aria-labelledby={`tab-${index}`}
        >
           {cloneElement(tab.props.children, {
             key: 'comp'+index,
             isSelected: _isSelected
           })}
        </div>
     );
 });


const TabPane = forwardRef(({
  width,
  height,
  tabsStyle,
  children
}, ref) => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)

  useImperativeHandle(ref, () => ({
    getSelectedTabIndex: () => selectedTabIndex
  }), [selectedTabIndex])

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
});

export default TabPane
