import {
  useSelector,
  safeMap
} from '../uiApi';

import { selectAppBoardIds } from '../../flux/selectors';

import BoardCard from './BoardCard';

const BoardList = () => {
  const boardIds = useSelector(selectAppBoardIds);
  return safeMap(boardIds, id => (
    <BoardCard
      key={id}
      id={id}
    />
  ));
};

export default BoardList
