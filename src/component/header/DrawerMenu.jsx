import React from 'react'
import FlatButton  from '../zhn-m/FlatButton'
import DrawerMsgList from './DrawerMsgList'

const TITLE = "Web App Notes v0.1.0";

const CL = {
  HEADER: 'header__title',
  ROOT: 'drawer__list',
  BT: 'drawer__list-bt'
};

const S = {
  HEADER: {
    marginLeft: 16,
    paddingTop: 16,
    paddingBottom: 8
  },
  UL: {
    listStyleType: 'none'
  }  
};

const DrawerMenu = ({
  saveBoard,
  cleanStorage
}) => (
  <div className={CL.ROOT}>
    <div
      className={CL.HEADER}
      style={S.HEADER}
    >
      {TITLE}
    </div>
    <ul style={S.UL}>
      <li>
        <FlatButton
          className={CL.BT}
          caption="Save Boards"
          title="Click to save boards to localStorage"
          onClick={saveBoard}
        />
      </li>
      <li>
        <FlatButton
          className={CL.BT}
          caption="Clean Storage"
          title="Click to remove boards from localStorage"
          onClick={cleanStorage}
        />
      </li>
    </ul>
    <DrawerMsgList />
  </div>
);

export default DrawerMenu
