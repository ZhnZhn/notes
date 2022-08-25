import { connect } from '../uiApi';
import {
  saveBoard,
  cleanStorage
} from '../../flux/app/actions';
import { showSettings } from '../../flux/modal/reducer';

import FlatButton  from '../zhn-m/FlatButton';
import DrawerMsgList from './DrawerMsgList';

import { APP_TITLE } from '../titles';


const CL_HEADER = 'header__title'
, CL_DRAWER_LIST = 'drawer__list'
, CL_DRAWER_BT = 'drawer__list-bt'
, S_HEADER = {
  padding: '16px 0 8px 0',
  marginLeft: 16,
}
, S_UL = { listStyleType: 'none' }

const DrawerMenu = ({
  showSettings,
  saveBoard,
  cleanStorage
}) => (
  <div className={CL_DRAWER_LIST}>
    <div
      className={CL_HEADER}
      style={S_HEADER}
    >
      {APP_TITLE}
    </div>
    <ul style={S_UL}>
      <li>
        <FlatButton
          className={CL_DRAWER_BT}
          caption="User Settings"
          title="Click to open user settings dialog"
          onClick={showSettings}
        />
      </li>
      <li>
        <FlatButton
          className={CL_DRAWER_BT}
          caption="Save Boards"
          title="Click to save boards to localStorage"
          onClick={saveBoard}
        />
      </li>
      <li>
        <FlatButton
          className={CL_DRAWER_BT}
          caption="Clean Storage"
          title="Click to remove boards from localStorage"
          onClick={cleanStorage}
        />
      </li>
    </ul>
    <DrawerMsgList />
  </div>
);

const mapDispatchToProps = {
  showSettings,
  saveBoard,
  cleanStorage
};

export default connect(
  null,
  mapDispatchToProps
)(DrawerMenu)
