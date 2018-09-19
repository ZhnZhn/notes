import React, { Component } from 'react'

import na from '../../flux/note/actions'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Dialog.Style'

import ModalDialog from '../zhn-ch/ModalDialog'
import FlatButton from '../zhn-m/FlatButton'
import InputTextArea from '../zhn/InputTextArea'

import getNoteDescr from '../board/getNoteDescr'

const CL = {
  DIALOG: 'md-details',
  DESCR: 'md-details__descr'
};

class DetailsDialog extends Component {

  constructor(props){
    super(props)
    this._commandButtons = [
      <FlatButton
         caption="Save"
         onClick={this._editDescr}
      />
    ]
  }

  _editDescr = () => {
    const { data, dispatch } = this.props
    , _descr = this._inputDescr.getValue();
    dispatch(na.editNoteDescr(data.id, _descr))
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props
      && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  _refInputDescr = (node) => this._inputDescr = node

  render(){
    const {
      isShow,
      theme,
      data,
      onClose
    } = this.props
    , _initDescr = getNoteDescr(data)
    , TS = theme.createStyle(styleConfig);

    return (
      <ModalDialog
        className={CL.DIALOG}
        style={TS.DIALOG}
        caption="Note Details"
        isShow={isShow}
        commandButtons={this._commandButtons}
        onClose={onClose}
      >
        <InputTextArea
          ref={this._refInputDescr}
          key={_initDescr}
          className={CL.DESCR}
          maxLength={250}
          initValue={_initDescr}
        />
      </ModalDialog>
    );
  }
}

export default withTheme(DetailsDialog)
