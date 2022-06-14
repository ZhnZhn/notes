import { Component } from '../uiApi'

import { connect } from 'react-redux'
import {
  editColumnTitle,
  toggleColumn
} from '../../flux/column/reducer'
 import {
   removeColumn
 } from '../../flux/column/actions'

import isArrEmpty from '../../utils/isArrEmpty'

import SvgMore from '../zhn/SvgMore'
import TopicMenuMore from './TopicMenuMore'
import Card from '../zhn-card/Card'
import FlatButton from '../zhn-m/FlatButton'
import DnDNoteList from './DnDNoteList'

import CL from '../style/CL'

const S_SVG_MORE = { marginRight: 8 }
, S_MENU_MORE = {
    position: 'absolute',
    width: 150
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
    toggleColumn({ columnId: column.id })
  }

  _hAddNewTask = () => {
    const { column, addNote } = this.props;
    addNote({ columnId: column.id })
  }

  _hBlurTitle = (evt) => {
     const { column, editColumnTitle } = this.props;
     editColumnTitle({
       columnId: column.id,
       title: evt.target.value
     })
  }

  _hRemoveColumn = () => {
    const { boardId, column, removeColumn } = this.props;
    removeColumn({
      boardId,
      columnId: column.id
    })
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
        <Card.Header>
          <SvgMore
            style={S_SVG_MORE}
            title="Click to open topic menu"
            onClick={this._openMenuMore}
          />
          { isMenuMore && <TopicMenuMore
            style={S_MENU_MORE}
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
        </Card.Header>
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
