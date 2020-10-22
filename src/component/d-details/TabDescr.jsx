import { Component } from 'react'

import na from '../../flux/note/actions'

import InputTextArea from '../zhn/InputTextArea'
import DialogButtons from './DialogButtons'

import getNoteDescr from '../page-board/getNoteDescr'

const CL = {
  DESCR: 'md-details__descr',
  ACTIONS: 'md__actions'
};

class TabDescr extends Component {

  _focusBtClose = () => {
    if (this.props.isSelected
      && this._buttons) {
      this._buttons.focusBtClose()
    }
  }

  componentDidMount(){
    this._focusBtClose()
  }

  _editDescr = () => {
    const { note, dispatch } = this.props
    , _descr = this._inputDescr.getValue();
    dispatch(na.editNoteDescr(note.id, _descr))
  }

  _refInputDescr = (node) => this._inputDescr = node
  _refButtons = (node) => this._buttons = node

  render(){
    const {
      note,
      onClose
    } = this.props
    , _initDescr = getNoteDescr(note);

    return (
      <>
        <InputTextArea
          ref={this._refInputDescr}
          key={note.id}
          className={CL.DESCR}
          maxLength={250}
          initValue={_initDescr}
        />
        <DialogButtons
          ref={this._refButtons}
          className={CL.ACTIONS}
          onSave={this._editDescr}
          onClose={onClose}
        />
      </>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps
    && this.props.isSelected) {
      this._focusBtClose()
    }
  }
}

export default TabDescr
