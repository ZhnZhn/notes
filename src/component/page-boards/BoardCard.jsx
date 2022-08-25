import {
  NavLink,
  useMemo
} from '../uiApi';

import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  setCurrentBoard,
  removeBoard
} from '../../flux/board/actions';
import {
  editBoardTitle
} from '../../flux/board/reducer';
import {
  sBoard,
  sColumn
} from '../../flux/selectors';

import isArrEmpty from '../../utils/isArrEmpty';
import {
  CL_NAV_LINK,
  CL_CARD_BT
} from '../style/CL';

import Card from '../zhn-card/Card';
import DnDTopicList from './DnDTopicList';
import FlatButton from '../zhn-m/FlatButton';

const S_LINK = {
  margin: '8px 8px 4px 0'
};

const BoardCard = ({
  id: boardId
}) => {
  const dispatch = useDispatch()
  , [
    _hBlurTitle,
    _hRemove,
    _hToNotes,
    _selectBoard
  ] = useMemo(() => [
    (evt) => dispatch(editBoardTitle({
        boardId,
        title: evt.target.value
    })),
    () => dispatch(removeBoard({ boardId })),
    () => dispatch(setCurrentBoard({ boardId })),
    state => sBoard.board(state, boardId)
  ], [boardId, dispatch])
  , board = useSelector(_selectBoard)
  , columns = useSelector(sColumn.columns)
  , { columnIds} = board;

  return (
    <Card.Item>
      <Card.Header>
         <Card.Title
           initialValue={board.title}
           onBlur={_hBlurTitle}
         />
         <Card.Counter
           value={columnIds.length}
         />
      </Card.Header>
      <DnDTopicList
        id={boardId}
        columnIds={columnIds}
        columns={columns}
      />
      <NavLink
        to={`/boards/${boardId}`}
        className={CL_NAV_LINK}
        style={S_LINK}
        onClick={_hToNotes}
      >
        ToNotes
      </NavLink>
      <div>
      {
        isArrEmpty(columnIds) &&
          <FlatButton
            clCaption={CL_CARD_BT}
            caption="Remove Board"
            onClick={_hRemove}
          />
      }
      </div>
   </Card.Item>
  );
}

export default BoardCard
