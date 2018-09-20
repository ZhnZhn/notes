import React, { Component, Fragment } from 'react'

import FlatButton from '../zhn-m/FlatButton'

const CL = {
  ACTIONS: 'md__actions'
};

const S = {
  LABELS: {
    paddingTop: 4,
    paddingLeft: 12
  }
};

class DetailsTabLabels extends Component {

  _focusBtClose = () => {
    if (this.props.isSelected
      && this._btClose
      && this._btClose.focus ) {
       this._btClose.focus()
    }
  }

  componentDidMount(){
    this._focusBtClose()
  }

  _refBtClose = (node) => this._btClose = node

  render(){
    const {
      note,
      onClose
    } = this.props

    return (
      <Fragment>
        <div style={S.LABELS}>
          {note.title}
        </div>
        <div className={CL.ACTIONS}>
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

export default DetailsTabLabels
