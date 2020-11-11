import { createRef, Component } from 'react'

import na from '../../flux/note/actions'

import LabelList from './LabelList'
import InputText from '../zhn/InputText'
import PaneColors from '../zhn-m/PaneColors'
import FlatButton from '../zhn-m/FlatButton'
import DialogButtons from './DialogButtons'

import fn from './fnTabLabels'

const {
  toTitle,
  addLabel,
  removeLabel
 } = fn;

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


class TabLabels extends Component {

  constructor(props) {
    super(props)
    this._refBtClose = createRef()
    this.state = {
      labels: props.note.labels || []
    }
  }

  _focusBtClose = () => {
    const _btClose = this._refBtClose.current;
    if (this.props.isSelected && _btClose) {
       _btClose.focus()
    }
  }

  componentDidMount(){
    this._focusBtClose()
  }

  _onBlurLabel = (evt) => {
    this._label = evt.target.value
  }
  _onAddLabel = () => {
    this.setState(prevState => addLabel(
      prevState,
      toTitle(this._label),
      this._inputColor.getColor()
    ), () => this._inputLabel.setValue(''))
  }
  _onRemoveLabel = (label) => {
    this.setState(prevState => removeLabel(
      prevState,
      label
    ))
  }
  _saveLabels = () => {
    const { note, dispatch } = this.props;
    dispatch(na.editNoteLabels(
      note.id, this.state.labels
    ))
  }

  _refInputLabel = (node) => this._inputLabel = node
  _refInputColor = (node) => this._inputColor = node
  //_refButtons = (node) => this._buttons = node

  render(){
    const {
      //note,
      onClose
    } = this.props
    , { labels } = this.state;

    return (
      <>
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
        <DialogButtons
          refBtClose={this._refBtClose}
          //ref={this._refButtons}
          className={CL.MD_ACTIONS}
          onSave={this._saveLabels}
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

export default TabLabels
