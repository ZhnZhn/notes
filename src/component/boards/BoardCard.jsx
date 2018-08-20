import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  editBoardTitle,
  setBoardCurrent,
  removeBoard
} from '../../flux/board/actions'
import { sBoard, sColumn } from '../../flux/selectors'

import CL from '../style/cl'

import isArrEmpty from '../../utils/isArrEmpty'

import Card from '../zhn-card/Card'
import CardColumnList from './CardColumnList'
import FlatButton from '../zhn-m/FlatButton'

const S  = {
  LINK: {
    display: 'block',
    paddingLeft: 8,
    paddingTop: 8,
    paddingBottom: 8
  }
}

class BoardCard extends Component {
  /*
  constructor(){
    super()
    this._hBlurTitle = this._hBlurTitle.bind(this)
  }
  */

  _hBlurTitle = (evt) => {
    const { board, editBoardTitle } = this.props;
    editBoardTitle(board.id, evt.target.value)
  }

  _hSetCurrent = () => {
    const { board, setBoardCurrent } = this.props
    setBoardCurrent(board.id)
  }

  _hRemove = () => {
    const { board, removeBoard } = this.props
    removeBoard(board.id)
  }

  _hToNotes = () => {
    const { board, setBoardCurrent } = this.props;
    setBoardCurrent(board.id)
  }

  _renderColumnInfo = (columnIds, columns) => {
    if (columnIds.length === 0) {
      return null;
    }
    return (
      <ul style={S.UL}>
        { columnIds.map(id => (
            <li key={id}>
              <span>
                {columns[id].title}
              </span>
              <Card.Counter
                 value={columns[id].noteIds.length}
              />
            </li>
        ))}
      </ul>
    );
  }

  render(){
    const { board, columns } = this.props
        , { columnIds } = board;

    return (
      <Card.Item>
        <Card.Title
          value={board.title}
          onBlur={this._hBlurTitle}
        />
        <Card.Counter
          value={columnIds.length}
        />
        <CardColumnList
          columnIds={columnIds}
          columns={columns}
        />
        <NavLink
          to={`/boards/${board.id}`}
          style={S.LINK}
          onClick={this._hToNotes}
        >
          ToNotes
        </NavLink>
        <div>
        {
          isArrEmpty(columnIds) &&
            <FlatButton
              clCaption={CL.CARD_BT}
              caption="Remove Board"
              onClick={this._hRemove}
            />
        }
        </div>
     </Card.Item>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  board: sBoard.board(state, ownProps.id),
  columns: sColumn.columns(state)
});

const mapDispatchToProps = {
  editBoardTitle,
  setBoardCurrent,
  removeBoard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardCard)
