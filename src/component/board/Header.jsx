import React from 'react'
import { NavLink } from 'react-router-dom'

import ZhHeader from '../zhn-ch/Header'
import Logo from '../zhn/Logo'
import FlatButton from '../zhn-m/FlatButton'
import HeaderDrawer from '../header/HeaderDrawer'

import CL from '../style/CL'

const S = {
  BT: {
    position: 'relative',
    marginLeft: 16
  },
  NAV: {
    display: 'inline-block'
  },
  NAV_LINK: {
    marginLeft: 8
  }
};

const Header = ({
  style,
  titleStyle,
  board,
  addColumn
}) => (
  <ZhHeader
    className={CL.HEADER}
    style={style}
  >
    <Logo />
    <span className={CL.TITLE_GAP} />
    <span
      className={`${CL.HEADER_TITLE} ${CL.TITLE_BOARD}`}
      style={titleStyle}>
      {`Notes: ${board.title}`}
    </span>
    <FlatButton
       style={S.BT}
       caption="Add Column"
       title="Click to add column to board"
       accessKey="a"
       timeout={500}
       onClick={addColumn}
    />
    <nav style={S.NAV}>
      <NavLink
        to="/boards"
        className={CL.NAV_LINK}
        style={S.NAV_LINK}
      >
         ToBoards
      </NavLink>
    </nav>
    <HeaderDrawer />
  </ZhHeader>
);

export default Header
