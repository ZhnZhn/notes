import { NavLink } from '../uiApi';

import AppHeader from '../zhn-ch/Header';
import TopicDrawer from './TopicDrawer';
import FlatButton from '../zhn-m/FlatButton';
import HeaderDrawer from '../header/HeaderDrawer';

import {
  CL_HEADER,
  CL_NAV_LINK,
  CL_ML_8
} from '../style/CL';

// @flow
const _CL_NAV_LINK = `${CL_NAV_LINK} ${CL_ML_8}`;

const Header = ({
  addColumn /*: TopicAction.addColumn */
}) => (
  <AppHeader
    className={CL_HEADER}
  >
    <TopicDrawer />
    <FlatButton
       caption="Add Topic"
       title="Click to add topic to board"
       accessKey="a"
       timeout={500}
       onClick={addColumn}
    />
    <nav>
      <NavLink
        to="/boards"
        className={_CL_NAV_LINK}
      >
         ToBoards
      </NavLink>
    </nav>
    <HeaderDrawer />
  </AppHeader>
);

export default Header
