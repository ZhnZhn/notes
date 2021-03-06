import { Component } from 'react'

import { connect } from 'react-redux'
import {
  editColumnTitle,
  removeColumn,
  toggleColumn
 } from '../../flux/column/actions'

import isArrEmpty from '../../utils/isArrEmpty'

import SvgMore from '../zhn/SvgMore'
import TopicMenuMore from './TopicMenuMore'
import Card from '../zhn-card/Card'
import FlatButton from '../zhn-m/FlatButton'
import DnDNoteList from './DnDNoteList'

import CL from '../style/CL'

const S = {
  SVG_MORE: {
    marginRight: 8
  },
  MENU_MORE: {
    position: 'absolute',
    width: 150
  }
};

class Topic extends Component {
  state = {
    isMenuMore: false
  }

  _openMenuMore = () => {
    if (!this.state.isMenuMore) {
      this.setState({
        isMenuMore: true
      })
    }
  }

  _closeMenuMore = () => {
    this.setState({
      isMenuMore: false
    })
  }

  _hHideTopic = () => {
    const { toggleColumn, column } = this.props;
    toggleColumn(column.id)
  }

  _hAddNewTask = () => {
    const { column, addNote } = this.props;
    addNote(column.id)
  }

  _hBlurTitle = (evt) => {
     const { column, editColumnTitle } = this.props;
     editColumnTitle(column.id, evt.target.value)
  }

  _hRemoveColumn = () => {
    const { boardId, column, removeColumn } = this.props;
    removeColumn(boardId, column.id)
  }

  render() {
    const {
      isMenuMore
    } = this.state
    , {
      column,
      notes
    } = this.props
    , {
      id,
      isHide,
      title,
      withAdd,
      noteIds
    } = column;

    return (
      <Card.Item isHide={isHide}>
        <SvgMore
          style={S.SVG_MORE}
          title="Click to open topic menu"
          onClick={this._openMenuMore}
        />
        { isMenuMore && <TopicMenuMore
          style={S.MENU_MORE}
          isShow={isMenuMore}
          onAddNote={this._hAddNewTask}
          onHideTopic={this._hHideTopic}
          onClose={this._closeMenuMore}
        />}
        <Card.Title
          value={title}
          onBlur={this._hBlurTitle}
        />
        <Card.Counter value={noteIds.length} />
        {
          withAdd &&
          <FlatButton
            clCaption={CL.CARD_BT}
            caption="AddNote"
            title="Click to add a new note"
            timeout={1000}
            onClick={this._hAddNewTask}
          />
        }
        <DnDNoteList
          cId={id}
          noteIds={noteIds}
          notes={notes}
        />
        <div>
          {
            isArrEmpty(noteIds) &&
              <FlatButton
                clCaption={CL.CARD_BT}
                caption="Remove Topic"
                onClick={this._hRemoveColumn}
              />
          }
        </div>
      </Card.Item>
    );
  }
}

const mapDispatchToProps = {
  editColumnTitle,
  removeColumn,
  toggleColumn
};

export default connect(
  null,
  mapDispatchToProps
)(Topic)
