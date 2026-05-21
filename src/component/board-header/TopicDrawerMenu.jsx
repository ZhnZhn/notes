import {
  useSelector,
  useDispatch,
  useCallback
} from '../uiApi';
import {
  selectBoard,
  selectColumns
} from '../../flux/selectors';
import { toggleColumn } from '../../flux/column/reducer';

import { CL_DRAWER_LIST } from './CL';
import TopicDrawerCaption from './TopicDrawerCaption';
import TopicList from './TopicList';
import DrawerMsgList from '../header/DrawerMsgList';

const TopicDrawerMenu = () => {
  const board = useSelector(selectBoard)
  , columns = useSelector(selectColumns)
  , dispatch = useDispatch()
  , _hToggleColumn = useCallback(cId => {
    dispatch(toggleColumn({ columnId: cId }))
  });

  return (
    <div className={CL_DRAWER_LIST}>
      <TopicDrawerCaption
        board={board}
      />
      <TopicList
        board={board}
        columns={columns}
        toggleColumn={_hToggleColumn}
      />
      <DrawerMsgList />
    </div>
  );
};

export default TopicDrawerMenu
