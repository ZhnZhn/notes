import { useCallback } from '../uiApi';

import { DragDropContext } from 'react-beautiful-dnd'
import { connect } from 'react-redux'

import s from '../../flux/selectors'
import {
  moveNote,
  addNote
} from '../../flux/note/actions'

import {
   addColumn
 } from '../../flux/column/actions'

import isNotDnD from '../zhn-dnd/isNotDnD'

import Header from '../board-header/Header'
import Main from '../zhn-ch/Main'
import Topic from './Topic'

const ColumnStack = ({
  boardId,
  columnIds,
  columns,
  notes,
  addNote
}) => (columnIds||[]).map(cId => {
   const column = columns[cId];
   return (
    <Topic
       key={column.id}
       boardId={boardId}
       column={column}
       notes={notes}
       addNote={addNote}
    />
   );
});

const PageBoard = ({
  board,
  notes,
  columns,
  addNote,
  moveNote,
  addColumn
}) => {
  const { id, columnIds } = board;
  /*eslint-disable react-hooks/exhaustive-deps */
  const _hDragEnd = useCallback(result => {
    if (!isNotDnD(result)) {
      moveNote(result)
    }
  }, [])
  //moveNote
  , _hAddColumn = useCallback(() => {
    addColumn({ boardId: id })
  }, [])
  //addColumn, id
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
            addNote={addNote}
          />
        </Main>
      </DragDropContext>
    </>
  );
};

const mapStateToProps = (state) => ({
  board: s.board.currentBoard(state),
  notes: s.note.notes(state),
  columns: s.column.columns(state)
});
const mapDispatchToProps = {
  moveNote,
  addNote,
  addColumn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageBoard)
