import { Component } from 'react'

import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'

import { moveColumn } from '../../flux/column/actions'

import isNotDnD from '../zhn-dnd/isNotDnD'

import Header from './Header'
import Main from '../zhn-ch/Main'
import BoardList from './BoardList'

class PageBoards extends Component {
  _hDragEnd = (result) => {
    if (isNotDnD(result)){
      return;
    }
    this.props.moveColumn(result)
  }

  render() {
    return [
      <Header key="header" />,
      <DragDropContext
         key="ddc"
         onDragEnd={this._hDragEnd}
      >
        <Main>
          <BoardList />
        </Main>
      </DragDropContext>
    ];
  }
}

const mapDispatchToProps = {
  moveColumn
};

export default connect(
  null,
  mapDispatchToProps
)(PageBoards)
