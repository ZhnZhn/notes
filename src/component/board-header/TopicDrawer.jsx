import DrawerLeft from '../zhn-ch/DrawerLeft';
import Caption from './HeaderCaption';
import DrawerMenu from './TopicDrawerMenu';

const _captionEl = <Caption />

const TopicDrawer = () => (
  <DrawerLeft captionEl={_captionEl}>
    <DrawerMenu />
  </DrawerLeft>
);

export default TopicDrawer
