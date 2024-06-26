import {
  useRef,
  useState,
  useCallback,
  getRefValue
} from '../uiApi'
import useBtFocus from './useBtFocus'

import { editNoteLabels } from '../../flux/note/actions'

import LabelList from './LabelList'
import InputText from '../zhn/InputText'
import PaneColors from '../zhn-m/PaneColors'
import FlatButton from '../zhn-m/FlatButton'
import DialogButtons from './DialogButtons'

import {
  toTitle,
  addLabel,
  removeLabel
} from './TabLabelsFn';

import {
  CL_CARD_BT,
  CL_MD_ACTIONS
} from '../style/CL';

const S_LABELS = { padding: '4px 0 8px 12px' }
, S_BT_ADD = { marginLeft: 16 };

const TabLabels = (props) => {
  const {
    isSelected,
    note,
    dispatch,
    onClose
  } = props
  , { id } = note
  , [
    labels,
    setLabels
  ] = useState(() => note.labels || [])
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
      toTitle(getRefValue(_refLabel)),
      getRefValue(_refInputColor).getColor()
    ), getRefValue(_refInputLabel).setValue(''))
  }, [])
  , _onRemoveLabel = useCallback(label => {
     setLabels(prevState => removeLabel(
       prevState,
       label
     ))
  }, [])
  /*eslint-disable react-hooks/exhaustive-deps */
  , _saveLabels = useCallback(() => {
    dispatch(editNoteLabels({ noteId: id, labels }))
  }, [id, labels]);
  //dispatch
  /*eslint-enable react-hooks/exhaustive-deps */

  useBtFocus(_refBtClose, isSelected, props)

  return (
      <>
        <div style={S_LABELS}>
          <LabelList
            labels={labels}
            onRemove={_onRemoveLabel}
          />
          <InputText
            refEl={_refInputLabel}
            onBlur={_onBlurLabel}
          />
          <FlatButton
            clCaption={CL_CARD_BT}
            style={S_BT_ADD}
            caption="AddLabel"
            title="Click to add a new label"
            timeout={400}
            onClick={_onAddLabel}
          />
        </div>
        <PaneColors
          refEl={_refInputColor}
        />
        <DialogButtons
          refBtClose={_refBtClose}
          className={CL_MD_ACTIONS}
          onSave={_saveLabels}
          onClose={onClose}
        />
      </>
  );
}

export default TabLabels
