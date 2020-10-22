import { NavLink } from 'react-router-dom'

import AppHeader from '../zhn-ch/Header'
import TopicDrawer from './TopicDrawer'
import FlatButton from '../zhn-m/FlatButton'
import HeaderDrawer from '../header/HeaderDrawer'

import CL from '../style/CL'

// @flow

const Header = ({
  addColumn /*: TopicAction.addColumn */
}) => (
  <AppHeader
    className={CL.HEADER}
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
        className={`${CL.NAV_LINK} ${CL.ML_8}`}
      >
         ToBoards
      </NavLink>
    </nav>
    <HeaderDrawer />
  </AppHeader>
);

export default Header
