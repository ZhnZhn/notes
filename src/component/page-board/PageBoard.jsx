import {
  useSelector,
  useDispatch,
  useCallback
} from '../uiApi';

import {
  DragDropContext
} from 'react-beautiful-dnd';

import {
  selectBoard,
  selectNotes,
  selectColumns
} from '../../flux/selectors';

import {
  moveNote
} from '../../flux/note/actions';
import {
  addColumn
} from '../../flux/column/actions';

import { safeMap } from '../uiApi';

import isNotDnD from '../zhn-dnd/isNotDnD';

import Header from '../board-header/Header';
import Main from '../zhn-ch/Main';
import Topic from './Topic';

const ColumnStack = ({
  boardId,
  columnIds,
  columns,
  notes
}) => safeMap(columnIds, cId => {
   const column = columns[cId];
   return (
    <Topic
       key={column.id}
       boardId={boardId}
       column={column}
       notes={notes}
    />
   );
});

const PageBoard = () => {
  const board = useSelector(selectBoard)
  , notes = useSelector(selectNotes)
  , columns = useSelector(selectColumns)
  , dispatch = useDispatch();

  const { id, columnIds } = board;
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hDragEnd = useCallback(result => {
    if (!isNotDnD(result)) {
      dispatch(moveNote(result))
    }
  }, [])
  //moveNote
  , _hAddColumn = useCallback(() => {
    dispatch(addColumn({ boardId: id }))
  }, [])
  //addColumn, id, dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <>
      <Header
        addColumn={_hAddColumn}
      />
      <DragDropContext
        onDragEnd={_hDragEnd}
      >
        <Main>
          <ColumnStack
            boardId={id}
            columnIds={columnIds}
            columns={columns}
            notes={notes}
          />
        </Main>
      </DragDropContext>
    </>
  );
};

export default PageBoard
