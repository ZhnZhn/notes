import React, { Component } from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Comp.Style'

const CL = {
  DRAWER_BT: 'drawer-bt',
  DRAWER_SPAN: 'drawer-span',
  DRAWER_SVG: 'drawer-svg',
  DRAWER: 'drawer-left',
  DRAWER_MODAL: 'drawer-modal',
};

const S = {
  BT_DRAWER: {
    width: 'auto',
    height: 'auto'
  },
  DRAWER_OFF: {
    transform: 'translateX(-264px)',
    //transform: 'translateX(264px)',
    pointerEvents: 'none'
  },
  DRAWER_ON: {
    transform: 'translate(0px, 0px)',
  },
  MODAL_OFF: {
    opacity: 0,
    zIndex: -1,
    transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  },
  MODAL_ON: {
    opacity: 1,
    zIndex: 1000,
    transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
  }
}

class DrawerLeft extends Component {
  state = { isOpen: false }

  _hToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  render(){
    const {
       btStyle,
       theme,
       captionComp,
       children
     } = this.props
    , { isOpen } = this.state
    , _drawerStyle = isOpen
         ? S.DRAWER_ON
         : S.DRAWER_OFF
    , _drawerModalStyle = isOpen
         ? S.MODAL_ON
         : S.MODAL_OFF
    , _onClickWrapper = isOpen
         ? this._hToggle
         : undefined
    , TS = theme.createStyle(styleConfig);
    return [
        <button
          className={CL.DRAWER_BT}
          style={{ ...S.BT_DRAWER, ...btStyle }}
          aria-label="Open Drawer"
          onClick={this._hToggle}
        >
          {captionComp}
        </button>,
        <div
          aria-hidden={!isOpen}
          className={CL.DRAWER_MODAL}
          style={_drawerModalStyle}
          onClick={_onClickWrapper}
        />,
        <aside
          className={CL.DRAWER}
          style={{ ..._drawerStyle, ...TS.COMP }}
         >
          {children}
        </aside>
      ];
  }
}

export default withTheme(DrawerLeft)
