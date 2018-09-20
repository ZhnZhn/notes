import React, { Component, Fragment } from 'react'

import na from '../../flux/note/actions'

import InputTextArea from '../zhn/InputTextArea'
import FlatButton from '../zhn-m/FlatButton'

import getNoteDescr from '../board/getNoteDescr'

const CL = {
  DESCR: 'md-details__descr',
  ACTIONS: 'md__actions'
};

class DetailsTabDescr extends Component {

  _focusBtClose = () => {
    if (this.props.isSelected
      && this._btClose
      && this._btClose.focus) {
      this._btClose.focus()
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
  _refBtClose = (node) => this._btClose = node

  render(){
    const {
      note,
      onClose
    } = this.props
    , _initDescr = getNoteDescr(note);

    return (
      <Fragment>
        <InputTextArea
          ref={this._refInputDescr}
          key={note.id}
          className={CL.DESCR}
          maxLength={250}
          initValue={_initDescr}
        />
        <div className={CL.ACTIONS}>
          <FlatButton
            caption="Save"
            timeout={100}
            onClick={this._editDescr}
          />
          <FlatButton
            ref={this._refBtClose}
            caption="Close"
            timeout={0}
            onClick={onClose}
          />
        </div>
      </Fragment>
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps
    && this.props.isSelected) {
      this._focusBtClose()
    }
  }
}

export default DetailsTabDescr
