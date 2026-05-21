import {
  useDispatch,
  useSelector
} from '../uiApi';
import { selectDrawerItems } from '../../flux/selectors';
import { removeDrawerMsg } from '../../flux/drawerMsg/reducer';

const CL_UL = 'drawer__msg-ul'
, CL_LI = 'drawer__msg-li'
, CL_LI_BT = 'drawer__msg-bt';

const DrawerMsgList = () => {
  const items = useSelector(selectDrawerItems)
  , dispatch = useDispatch()
  , _hRemoveMsg = (id) => {
     dispatch(removeDrawerMsg({ id }))
  };

  return (
    <ul className={CL_UL}>
      {
         items.map(item => (
            <li
              key={item.id}
              className={CL_LI}
            >
              <button
                type="button"
                className={CL_LI_BT}
                onClick={() => _hRemoveMsg(item.id)}
              >
                {item.msg}
              </button>
            </li>
         ))
      }
    </ul>
  );
};

export default DrawerMsgList
