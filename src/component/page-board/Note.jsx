import { Component } from 'react'
//import PropsType from 'prop-types'

import { connect } from 'react-redux'

import { deleteNote } from '../../flux/note/actions'
import { editNoteTitle } from '../../flux/note/reducer'

import { showDetails } from '../../flux/modal/reducer'

import NoteCaption from './NoteCaption'
import NoteDetails from './NoteDetails'

const CL = 'note';

const _getState = (props) => ({
  noteTitle: props.note.title,
  isMenuMore: false,
  isDetails: false
});

class DnDNote extends Component {
  /*
  static propTypes = {
    dragHandleProps: PropsType.object,
    note: PropsType.object
    columnId: PropsType.string
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
    deleteNote({ columnId, noteId: note.id})
  }

  _blurTitle = (evt) => {
    const newTitle = evt.target.value
    , { note, editNoteTitle } = this.props;
    if (newTitle !== note.title) {
      editNoteTitle({ noteId: note.id, title: newTitle })
    }
  }

  _toggleDetails = () => {
    this.setState(prevState => ({
      isDetails: !prevState.isDetails
    }))
  }

  _editDetails = () => {
    const { note, editDetails } = this.props;
    editDetails(note)
    this._closeMenuMore()
  }

  render(){
    const {
      dragHandleProps,
      note
    } = this.props
    , {
      noteTitle,
      isMenuMore,
      isDetails
    } = this.state;

    return (
      <div
        className={CL}
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
          onEditDetails={this._editDetails}
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
  editDetails: showDetails
};

export default connect(
  null,
  mapDispatchToProps
)(DnDNote)
