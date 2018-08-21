import React from 'react'
import { connect } from 'react-redux'
import { sDrawer } from '../../flux/selectors'
import { removeDrawerMsg } from '../../flux/drawerMsg/actions'

const CL = {
  UL: 'drawer__msg-ul',
  LI: 'drawer__msg-li',
  LI_BT: 'drawer__msg-bt'
};

const DrawerMsgList = ({ items, removeDrawerMsg }) => (
  <ul className={CL.UL}>
    {
       items.map(item => (
          <li
            key={item.id}
            className={CL.LI}
          >
            <button
              className={CL.LI_BT}
              onClick={removeDrawerMsg.bind(null, item.id)}
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
