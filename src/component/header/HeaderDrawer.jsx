import React from 'react'

import Drawer from '../zhn-ch/Drawer'
import DrawerMenu from './DrawerMenu'

const S = {
  DRAWER_BT: {
    color: '#1b2836'
  }
};

const HeaderDrawer = ({ saveBoard, cleanStorage }) => (
  <Drawer
    btStyle={S.DRAWER_BT}
  >
    <DrawerMenu
      saveBoard={saveBoard}
      cleanStorage={cleanStorage}
    />
  </Drawer>
);

export default HeaderDrawer
