import React, { Component } from 'react'
//import PropsType from 'prop-types'

import { connect } from 'react-redux'

import {
  deleteNote,
  editNoteTitle
} from '../../flux/note/actions'


import InputText from '../zhn/InputText'
import BtCircle from '../zhn-card/BtCircle'

const C = {
  DRAGGING: '#1e90ff', //dodgerblue
  NOT_DRAGGING: '#9e9e9e'
};

const S = {
  ROOT: {
    //display: 'flex',
    position: 'relative',
    border: '1px solid #009688',
    boderRadius: 2,
    padding: 8,
    marginBottom: 8,
    transition: 'background-color 0.2s easy'
  },
  HANDLE: {
    display: 'inline-block',
    width: 24,
    height: 24,
    marginRight: 8,
    backgroundColor: 'darkcyan',
    borderRadius: '50%'
  },
  CONTENT: {
    display: 'inline-block',
    verticalAlign: 'super'
  },
  BT_DELETE: {
    position: 'absolute',
    top: 4,
    right: 4
  }
};

const Handle = (props) => (
  <span
    style={S.HANDLE}
    {...props}
  />
);


const _getState = (props) => ({
  noteTitle: props.note.title
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
    provided: PropsType.obj,
    snap: PropsType.obj,
    task: PropsType.obj
  }
  */

  constructor(props){
    super(props)
    this._hBlurTitle = this._hBlurTitle.bind(this)
    this.state = _getState(props)
  }

  _hDelete = () => {
    const { deleteNote, columnId, note } = this.props
    deleteNote(columnId, note.id)
  }

  _hBlurTitle = (evt) => {
    const newTitle = evt.target.value
    , { note, editNoteTitle } = this.props;
    if (newTitle !== note.title) {
      editNoteTitle(note.id, newTitle)
    }
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
        , { noteTitle } = this.state;

    return (
      <div
        style={{ ...S.ROOT, ..._style, ...style} }
        {...draggablePropsRest}
        ref={innerRef}
        id={note.id}
      >
        <Handle
          {...dragHandleProps}
        />
        <InputText
          style={S.CONTENT}
          value={noteTitle}
          onBlur={this._hBlurTitle}
        />
        <BtCircle
          style={S.BT_DELETE}
          caption="D"
          title="Click to delete note"
          onClick={this._hDelete}
        />
      </div>
    );
  }
}

const mapDispatchToProps = {
  deleteNote,
  editNoteTitle
};

export default connect(
  null,
  mapDispatchToProps
)(Note)
