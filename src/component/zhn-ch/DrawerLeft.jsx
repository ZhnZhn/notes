import useToggle from '../hooks/useToggle'
import useTheme from '../hooks/useTheme'

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

const DrawerLeft = ({
  btStyle,
  captionComp,
  children
}) => {
  const [isOpen, toggleIsOpen] = useToggle(false)
  , TS = useTheme(styleConfig)
  , _drawerStyle = isOpen
       ? S.DRAWER_ON
       : S.DRAWER_OFF
  , _drawerModalStyle = isOpen
       ? S.MODAL_ON
       : S.MODAL_OFF
  , _onClickWrapper = isOpen
       ? toggleIsOpen
       : void 0;

  return [
      <button
        key="bt-drawer"
        className={CL.DRAWER_BT}
        style={{ ...S.BT_DRAWER, ...btStyle }}
        aria-label="Open Drawer"
        onClick={toggleIsOpen}
      >
        {captionComp}
      </button>,
      <div
        key="wrapper"
        aria-hidden={!isOpen}
        className={CL.DRAWER_MODAL}
        style={_drawerModalStyle}
        onClick={_onClickWrapper}
      />,
      <aside
        key="aside"
        className={CL.DRAWER}
        style={{ ..._drawerStyle, ...TS.COMP }}
       >
        {children}
      </aside>
    ];
}

export default DrawerLeft
