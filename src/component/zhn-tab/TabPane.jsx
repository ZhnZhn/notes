import { Component, Children, cloneElement } from 'react';

const S = {
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

const toArray = Children.toArray;


class TabPane extends Component {

  constructor(props){
    super(props);
    const components = toArray(props.children)
      .map((tab, index) => {
        return cloneElement(tab.props.children, {
           key: 'comp' + index
        });
    })

    this.state = {
      selectedTabIndex: 0,
      components
    }
  }

  _hClickTab = (index, tabEl) => {
    this.setState({ selectedTabIndex: index });
    if (typeof tabEl.props.onClick === 'function'){
      tabEl.props.onClick();
    }
  }

  _renderTabs = (children) => {
       const { selectedTabIndex } = this.state;
       return children.map((tab, index) => {
          const isSelected = (index === selectedTabIndex)
                   ? true : false;
          return cloneElement(tab, {
             key: index,
             onClick: this._hClickTab.bind(this, index, tab),
             isSelected
           }
         );
       });
  }

  _renderComponents = () => {
      const { selectedTabIndex, components } = this.state;
      return components.map((comp, index) => {
         const isSelected = index === selectedTabIndex;
         const divStyle = isSelected
                    ? S.TAB_SELECTED
                    : S.NONE;
          return (
             <div style={divStyle} key={'a'+index}>
                {cloneElement(comp, { isSelected })}
             </div>
           );
      });
  }

  render(){
    const {
      width, height,
      tabsStyle,
      children
    } = this.props
    , _tabs = toArray(children);
    return (
      <div style={{ width, height }}>
        <ul style={{...S.UL, ...tabsStyle }}>
           {this._renderTabs(_tabs)}
        </ul>
        <div style={S.TABS}>
           {this._renderComponents()}
        </div>
      </div>
    );
  }

  getSelectedTabIndex() {
    return this.state.selectedTabIndex;
  }
}

export default TabPane
