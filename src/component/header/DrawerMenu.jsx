import React from 'react'
import FlatButton  from '../zhn-m/FlatButton'

const TITLE = "Web App Notes v0.1.0";

const CL = {
  HEADER: 'header__title'
};

const S = {
  ROOT: {
    height: '100%',
    backgroundColor: '#4d4d4d',
    borderLeft: '1px solid darkcyan'
  },
  HEADER: {
    marginLeft: 16,
    paddingTop: 16,
    paddingBottom: 8
  },
  UL: {
    listStyleType: 'none'
  },
  BT: {
    width: '100%',
    textAlign: 'left',
    paddingLeft: 16
  }
};

const DrawerMenu = ({
  saveBoard,
  cleanStorage
}) => (
  <div style={S.ROOT}>
    <div
      className={CL.HEADER}
      style={S.HEADER}
    >
      {TITLE}
    </div>
    <ul style={S.UL}>
      <li>
        <FlatButton
          rootStyle={S.BT}
          caption="Save Boards"
          title="Click to save boards to localStorage"
          onClick={saveBoard}
        />
      </li>
      <li>
        <FlatButton
          rootStyle={S.BT}
          caption="Clean Storage"
          title="Click to remove boards from localStorage"
          onClick={cleanStorage}
        />
      </li>
    </ul>
  </div>
);

export default DrawerMenu
