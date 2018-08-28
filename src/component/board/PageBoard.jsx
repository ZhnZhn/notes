import React, { Component } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import { connect } from 'react-redux'

import Header from './Header'
import Main from '../zhn-ch/Main'

import s from '../../flux/selectors'
import {
  moveNote,
  addNote
} from '../../flux/note/actions'
import {
   addColumn
 } from '../../flux/column/actions'

import Column from './Column'

class PageBoard extends Component {
  _hDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    this.props.moveNote(draggableId, source, destination)
  }

  _renderColumns = (board, columns, notes, addNote) => {
    return board.columnIds.map(cId => {
       const column = columns[cId];
       return (
         <Column
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
    const {addColumn, board} = this.props;
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
        board={board}
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
