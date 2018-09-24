import React, { Component } from 'react';

import FlatButton from '../zhn-m/FlatButton'

class DialogButtons extends Component {

  _refBtClose = (node) => this._btClose = node

  render(){
    const {
      className,
      onSave,
      onClose
    } = this.props;
    return (
      <div className={className}>
        <FlatButton
          caption="Save"
          timeout={100}
          onClick={onSave}
        />
        <FlatButton
          ref={this._refBtClose}
          caption="Close"
          timeout={0}
          onClick={onClose}
        />
      </div>
    );
  }

  focusBtClose(){
    if (this._btClose
     && this._btClose.focus)  {
      this._btClose.focus()
    }
  }
}

export default DialogButtons
