import { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import {
  editBoardTitle,
  setBoardCurrent,
  removeBoard
} from '../../flux/board/actions'
import { sBoard, sColumn } from '../../flux/selectors'

import CL from '../style/CL'

import isArrEmpty from '../../utils/isArrEmpty'

import Card from '../zhn-card/Card'
import DnDTopicList from './DnDTopicList'
import FlatButton from '../zhn-m/FlatButton'

const S  = {
  LINK: {
    marginTop: 8,
    marginLeft: 8,
    marginBottom: 4
  }
};

class BoardCard extends Component {

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

  render(){
    const { id, board, columns } = this.props
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
        <DnDTopicList
          id={id}
          columnIds={columnIds}
          columns={columns}
        />
        <NavLink
          to={`/boards/${board.id}`}
          className={CL.NAV_LINK}
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
