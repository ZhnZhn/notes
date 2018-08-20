import React from 'react'

import { connect } from 'react-redux'
import { addBoard } from '../../flux/board/actions'
import {
  saveBoard,
  cleanStorage
} from '../../flux/app/actions'

import Logo from '../zhn/Logo'
import FlatButton from '../zhn-m/FlatButton'
import HeaderDrawer from '../header/HeaderDrawer'

import CL from '../style/cl'

const Header = ({
  style,
  addBoard,
  saveBoard,
  cleanStorage
}) => (
  <header className={CL.HEADER} style={style}>
    <Logo />
    <span className={CL.TITLE_GAP} />
    <span className={CL.HEADER_TITLE}>
      Notes: Boards
    </span>
    <FlatButton
      caption="Add Board"
      title="Click to add new board"
      accessKey="a"
      timeout={200}
      onClick={addBoard}
    />
    <HeaderDrawer
      saveBoard={saveBoard}
      cleanStorage={cleanStorage}
    />
  </header>
);

const mapDispatchToProps = {
  addBoard,
  saveBoard,
  cleanStorage
};

export default connect(
  null,
  mapDispatchToProps
)(Header)
