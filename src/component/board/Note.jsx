import React, { Component } from 'react'
//import PropsType from 'prop-types'

import { connect } from 'react-redux'
import {
  deleteNote,
  editNoteTitle
} from '../../flux/note/actions'
import ma from '../../flux/modal/actions'

import NoteCaption from './NoteCaption'
import NoteDetails from './NoteDetails'

const CL = 'note';

const C = {
  DRAGGING: '#1e90ff', //dodgerblue
  NOT_DRAGGING: '#9e9e9e'
};

const _getState = (props) => ({
  noteTitle: props.note.title,
  isMenuMore: false,
  isDetails: false
});

const _crRootStyle = (isDragging) => {
  return {
    backgroundColor: isDragging
      ? C.DRAGGING
      : C.NOT_DRAGGING
  };
};

class Note extends Component {
  /*
  static propTypes = {
    provided: PropsType.object,
    snap: PropsType.object,
    note: PropsType.object
  }
  */

  constructor(props){
    super(props)
    this.state = _getState(props)
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

  _deleteNote = () => {
    const { deleteNote, columnId, note } = this.props
    deleteNote(columnId, note.id)
  }

  _blurTitle = (evt) => {
    const newTitle = evt.target.value
    , { note, editNoteTitle } = this.props;
    if (newTitle !== note.title) {
      editNoteTitle(note.id, newTitle)
    }
  }

  _toggleDetails = () => {
    this.setState(prevState => ({
      isDetails: !prevState.isDetails
    }))
  }

  _editDetails = () => {
    const { note, editDetails } = this.props
    editDetails(note)
  }

  render(){
    const {
      draggableProps,
      isDragging,
      innerRef,
      dragHandleProps,
      note,
    } = this.props
    , { style, ...draggablePropsRest } = draggableProps
    , _style = _crRootStyle(isDragging)
    , {
      noteTitle,
      isMenuMore,
      isDetails
    } = this.state;

    return (
      <div
        className={CL}
        style={{..._style, ...style}}
        {...draggablePropsRest}
        ref={innerRef}
        id={note.id}
      >
        <NoteCaption
          dragHandleProps={dragHandleProps}
          isDetails={isDetails}
          onClickHandle={this._toggleDetails}

          noteTitle={noteTitle}
          onBlurTitle={this._blurTitle}

          isMenuMore={isMenuMore}
          onClickMenuMore={this._openMenuMore}
          onCloseMenuMore={this._closeMenuMore}
          onRemoveNote={this._deleteNote}
        />
        <NoteDetails
          isShow={isDetails}
          note={note}
          editDetails={this._editDetails}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteNote,
  editNoteTitle,
  editDetails: ma.showDetails
};

export default connect(
  null,
  mapDispatchToProps
)(Note)
