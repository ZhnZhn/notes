import {
  useSelector,
  safeMap
} from '../uiApi';

import { selectBoardIds } from '../../flux/selectors';

import BoardCard from './BoardCard';

const BoardList = () => {
  const boardIds = useSelector(selectBoardIds);
  return safeMap(boardIds, id => (
    <BoardCard
      key={id}
      id={id}
    />
  ));
};

export default BoardList
