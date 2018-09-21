import React, { Component, Fragment } from 'react'

import LabelList from './DetailsLabelList'
import InputText from '../zhn/InputText'
import PaneColors from '../zhn-m/PaneColors'
import FlatButton from '../zhn-m/FlatButton'

import CL from '../style/CL'

const S = {
  LABELS: {
    paddingTop: 4,
    paddingLeft: 12,
    paddingBottom: 8
  },
  BT_ADD: {
    marginLeft: 16
  }
};

class DetailsTabLabels extends Component {

  state = {
    labels: []
  }

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

  _onBlurLabel = (evt) => {
    this._label = evt.target.value
  }
  _onAddLabel = () => {
    const _c = this._inputColor.getColor()
    this._inputLabel.setValue('')
    this.setState(prevState => ({
      labels: [ ...prevState.labels, {
        title: this._label,
        color: _c
      }]
    }))
  }
  _onRemoveLabel = (label) => {
    this.setState(prevState => ({
      labels: prevState.labels
        .filter(item => item.title !== label.title)
    }))
  }

  _refInputLabel = (node) => this._inputLabel = node
  _refInputColor = (node) => this._inputColor = node
  _refBtClose = (node) => this._btClose = node

  render(){
    const {
      //note,
      onClose
    } = this.props
    , { labels } = this.state;

    return (
      <Fragment>
        <div style={S.LABELS}>
          <LabelList
            labels={labels}
            onRemove={this._onRemoveLabel}
          />
          <InputText
            ref={this._refInputLabel}
            onBlur={this._onBlurLabel}
          />
          <FlatButton
            clCaption={CL.CARD_BT}
            rootStyle={S.BT_ADD}
            caption="AddLabel"
            title="Click to add a new label"
            timeout={400}
            onClick={this._onAddLabel}
          />
        </div>
        <PaneColors
          ref={this._refInputColor}
        />
        <div className={CL.MD_ACTIONS}>
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
