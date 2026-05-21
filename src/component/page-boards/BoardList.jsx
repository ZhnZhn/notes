import { useSelector } from '../uiApi';
import { selectBoardIds } from '../../flux/selectors';

import BoardCard from './BoardCard';

const BoardList = () => {
  const boardIds = useSelector(selectBoardIds);
  return boardIds.map(id => (
    <BoardCard
      key={id}
      id={id}
    />
  ));
};

export default BoardList
