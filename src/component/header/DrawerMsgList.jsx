import { connect } from 'react-redux';
import { sDrawer } from '../../flux/selectors';
import { removeDrawerMsg } from '../../flux/drawerMsg/reducer';

const CL_UL = 'drawer__msg-ul'
, CL_LI = 'drawer__msg-li'
, CL_LI_BT = 'drawer__msg-bt';

const DrawerMsgList = ({
  items,
  removeDrawerMsg
}) => (
  <ul className={CL_UL}>
    {
       items.map(item => (
          <li
            key={item.id}
            className={CL_LI}
          >
            <button
              className={CL_LI_BT}
              onClick={() => removeDrawerMsg({id : item.id })}
            >
              {item.msg}
            </button>
          </li>
       ))
    }
  </ul>
);

const mapStateToProps = state => ({
  items: sDrawer.msg(state)
});

const mapDispatchToProps = {
  removeDrawerMsg
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DrawerMsgList)
