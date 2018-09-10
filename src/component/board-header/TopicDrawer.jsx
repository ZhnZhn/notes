import React from 'react'

import DrawerLeft from '../zhn-ch/DrawerLeft'
import Caption from './HeaderCaption'
import DrawerMenu from './TopicDrawerMenu'

const TopicDrawer = () => (
  <DrawerLeft
    captionComp={<Caption />}
  >
    <DrawerMenu />
  </DrawerLeft>
);

export default TopicDrawer
