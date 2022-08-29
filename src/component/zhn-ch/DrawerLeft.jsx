import useToggle from '../hooks/useToggle';
import useTheme from '../hooks/useTheme';

import styleConfig from '../style/Comp.Style';

const CL_DRAWER_BT = 'drawer-bt'
, CL_DRAWER = 'drawer-left'
, CL_DRAWER_MODAL = 'drawer-modal'
, S_BT_DRAWER = {
  width: 'auto',
  height: 'auto'
},
S_DRAWER_OFF = {
  transform: 'translateX(-264px)',
  pointerEvents: 'none'
}
, S_DRAWER_ON = {
  transform: 'translate(0px, 0px)'
}
, S_MODAL_OFF = {
  opacity: 0,
  zIndex: -1,
  transition: 'opacity 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
}
, S_MODAL_ON = {
  opacity: 1,
  zIndex: 1000,
  transition: 'opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
};

const DrawerLeft = ({
  btStyle,
  captionEl,
  children
}) => {
  const [
    isOpen,
    toggleIsOpen
  ] = useToggle(false)
  , TS = useTheme(styleConfig)
  , [
    _drawerStyle,
    _drawerModalStyle,
    _onClickWrapper
  ] = isOpen
    ? [
      S_DRAWER_ON,
      S_MODAL_ON,
      toggleIsOpen
    ] : [
      S_DRAWER_OFF,
      S_MODAL_OFF
    ];

  return [
      <button
        key="bt-drawer"
        className={CL_DRAWER_BT}
        style={{...S_BT_DRAWER, ...btStyle}}
        aria-label="Open Drawer"
        onClick={toggleIsOpen}
      >
        {captionEl}
      </button>,
      <div
        role="presentation"
        key="wrapper"
        aria-hidden={!isOpen}
        className={CL_DRAWER_MODAL}
        style={_drawerModalStyle}
        onClick={_onClickWrapper}
      />,
      <aside
        key="aside"
        className={CL_DRAWER}
        style={{..._drawerStyle, ...TS.COMP}}
       >
        {children}
      </aside>
    ];
};

export default DrawerLeft
