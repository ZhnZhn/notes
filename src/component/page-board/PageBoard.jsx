import React, { Component } from 'react'

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

class PageBoard extends Component {
  _hDragEnd = (result) => {
    if (isNotDnD(result)) {
      return;
    }
    this.props.moveNote(result)
  }

  _renderColumns = (board, columns, notes, addNote) => {
    return board.columnIds.map(cId => {
       const column = columns[cId];
       return (
         <Topic
            key={column.id}
            boardId={board.id}
            column={column}
            notes={notes}
            addNote={addNote}
         />
       );
    })
  }

  _hAddColumn = () => {
    const {
      addColumn,
      board
    } = this.props;
    addColumn(board.id)
  }

  render(){
    const {
      board,
      notes,
      columns,
      addNote
    } = this.props;
    return [
      <Header
        addColumn={this._hAddColumn}
      />,
      <DragDropContext
        onDragEnd={this._hDragEnd}
      >
        <Main>
          { this._renderColumns(board, columns, notes, addNote) }
        </Main>
      </DragDropContext>
    ];
  }
}


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
