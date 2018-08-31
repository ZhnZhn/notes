import React, { Component } from 'react'
//import PropsType from 'prop-types'

import { connect } from 'react-redux'
import {
  deleteNote,
  editNoteTitle
} from '../../flux/note/actions'

//import withTheme from '../hoc/withTheme'
//import styleConfig from '../style/Modal.Style'

import InputText from '../zhn/InputText'
import SvgMore from '../zhn/SvgMore'
import MenuMore from './MenuMore'
//import ModalPane from '../zhn-ch/ModalPane'
//import FlatButton from '../zhn-m/FlatButton'

/*
const CL = {
  MODAL_PANE: 'modal-pane'
};
*/

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
    top: 8,
    right: 8
  },
  MENU_MORE: {
    position: 'absolute',
    //bottom: -8,
    right: 4,
    width: 150
  }
};

const Handle = (props) => (
  <span
    style={S.HANDLE}
    {...props}
  />
);


const _getState = (props) => ({
  noteTitle: props.note.title,
  isMenuMore: false
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
    this._closeMenuMore = this._closeMenuMore.bind(this)
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
    , {
      noteTitle,
      isMenuMore
    } = this.state;



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
        <SvgMore
          style={S.BT_DELETE}
          title="Click to delete note"
          onClick={this._openMenuMore}
        />
        {
          isMenuMore && <MenuMore
            isShow={isMenuMore}
            style={S.MENU_MORE}
            onClose={this._closeMenuMore}
            onRemove={this._hDelete}
          />
        }
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
