import { useState, useRef, useEffect, useCallback } from 'react'

import { editNoteLabels } from '../../flux/note/actions'

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

const _getCurrent = ref => ref.current;

const TabLabels = (props) => {
  const {
    isSelected,
    note,
    dispatch,
    onClose
  } = props
  , { id } = note
  , [ labels, setLabels] = useState(() => note.labels || [])
  , _refBtClose = useRef(null)
  , _refLabel = useRef('')
  , _refInputLabel = useRef(null)
  , _refInputColor = useRef(null)
  , _onBlurLabel = useCallback(evt => {
     _refLabel.current = evt.target.value
  }, [])
  , _onAddLabel = useCallback(() => {
    setLabels(prevState => addLabel(
      prevState,
      toTitle(_getCurrent(_refLabel)),
      _refInputColor.current.getColor()
    ), _refInputLabel.current.setValue(''))
  }, [])
  , _onRemoveLabel = useCallback(label => {
     setLabels(prevState => removeLabel(
       prevState,
       label
     ))
  }, [])
  , _saveLabels = useCallback(() => {
    dispatch(editNoteLabels({ noteId: id, labels }))
  }, [id, labels]);
  //dispatch

  useEffect(() => {
    const _btClose = _refBtClose.current;
    if (isSelected && _btClose) {
       _btClose.focus()
    }
  }, [props])
  //isSelected

  return (
      <>
        <div style={S.LABELS}>
          <LabelList
            labels={labels}
            onRemove={_onRemoveLabel}
          />
          <InputText
            ref={_refInputLabel}
            onBlur={_onBlurLabel}
          />
          <FlatButton
            clCaption={CL.CARD_BT}
            rootStyle={S.BT_ADD}
            caption="AddLabel"
            title="Click to add a new label"
            timeout={400}
            onClick={_onAddLabel}
          />
        </div>
        <PaneColors
          ref={_refInputColor}
        />
        <DialogButtons
          refBtClose={_refBtClose}
          className={CL.MD_ACTIONS}
          onSave={_saveLabels}
          onClose={onClose}
        />
      </>
  );
}


export default TabLabels
