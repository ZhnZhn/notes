import {
  isArrEmpty
} from '../../utils/isTypeFn';

import {
  setCurrentBoard,
  removeBoard
} from '../../flux/board/actions';
import {
  editBoardTitle
} from '../../flux/board/reducer';
import {
  selectBoardById,
  selectColumns
} from '../../flux/selectors';

import {
  NavLink,
  useDispatch,
  useSelector,
  useMemo
} from '../uiApi';

import {
  CL_NAV_LINK,
  CL_CARD_BT
} from '../styleFn';

import CardItem from '../zhn-card/CardItem';
import CardHeader from '../zhn-card/CardHeader';
import CardTitle from '../zhn-card/CardTitle';
import CardCounter from '../zhn-card/CardCounter';

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
    _hEditTitle,
    _hRemove,
    _hToNotes,
    _selectBoard
  ] = useMemo(() => [
    (evt) => {
      const title = evt.target.value;
      if (title) {
        dispatch(editBoardTitle({
          boardId,
          title: evt.target.value
        }))
      }
    },
    () => dispatch(removeBoard({ boardId })),
    () => dispatch(setCurrentBoard({ boardId })),
    state => selectBoardById(state, boardId)
  ], [boardId, dispatch])
  , board = useSelector(_selectBoard)
  , columns = useSelector(selectColumns)
  , { columnIds } = board;

  return (
    <CardItem>
      <CardHeader>
         <CardTitle
           initialValue={board.title}
           onBlur={_hEditTitle}
         />
         <CardCounter
           value={columnIds.length}
         />
      </CardHeader>
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
   </CardItem>
  );
}

export default BoardCard
