import React, { Component } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { connect } from 'react-redux'
import {
  editColumnTitle,
  removeColumn
 } from '../../flux/column/actions'

import isArrEmpty from '../../utils/isArrEmpty'

import Card from '../zhn-card/Card'
import FlatButton from '../zhn-m/FlatButton'

import CL from '../style/cl'

import crDnDNotes from './crDnDNotes'


class Column extends Component {
  constructor(props){
    super()
    this._hBlurTitle = this._hBlurTitle.bind(this)
  }

  _hAddNewTask = () => {
    const { column, addNote } = this.props
    addNote(column.id)
  }

  _hBlurTitle = (evt) => {
     const { column, editColumnTitle } = this.props;
     editColumnTitle(column.id, evt.target.value)
  }

  _hRemoveColumn = () => {
    const { boardId, column, removeColumn } = this.props
    removeColumn(boardId, column.id)
  }

  render(){
    const {
            column, notes,
          } = this.props
        , { id, title, withAdd, noteIds } = column;

    return (
      <Card.Item>
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
        <Droppable droppableId={id}>
          {
            (provided, snapshot) => crDnDNotes(id, notes, noteIds, provided, snapshot)
          }
        </Droppable>
        <div>
          {
            isArrEmpty(noteIds) &&
              <FlatButton
                clCaption={CL.CARD_BT}
                caption="Remove Column"
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
  removeColumn
};

export default connect(
  null,
  mapDispatchToProps
)(Column)
