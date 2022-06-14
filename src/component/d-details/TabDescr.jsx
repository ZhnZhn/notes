import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi'
import useBtFocus from './useBtFocus';

import { editNoteDescr } from '../../flux/note/reducer'

import InputTextArea from '../zhn/InputTextArea'
import DialogButtons from './DialogButtons'

import getNoteDescr from '../page-board/getNoteDescr'

const CL_DESCR = 'md-details__descr'
, CL_ACTIONS = 'md__actions';

const TabDescr = (props) => {
  const {
    isSelected,
    note,
    dispatch,
    onClose
  } = props
  , { id } = note
  , _refBtClose = useRef(null)
  , _refInputDescr = useRef(null)
  , _editDescr = useCallback(() => {
    dispatch(editNoteDescr({
      noteId: id,
      descr: getRefValue(_refInputDescr).getValue()
    }))
  }, [id])
  //dispatch

  useBtFocus(_refBtClose, isSelected, props)

  const _initialDescr = getNoteDescr(note);

  return (
    <>
      <InputTextArea
        key={id}
        ref={_refInputDescr}
        className={CL_DESCR}
        maxLength={250}
        initialValue={_initialDescr}
      />
      <DialogButtons
        refBtClose={_refBtClose}
        className={CL_ACTIONS}
        onSave={_editDescr}
        onClose={onClose}
      />
    </>
  );
}

export default TabDescr
