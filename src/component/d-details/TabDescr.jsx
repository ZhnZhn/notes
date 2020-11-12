import { useRef, useCallback, useEffect } from 'react'

import na from '../../flux/note/actions'

import InputTextArea from '../zhn/InputTextArea'
import DialogButtons from './DialogButtons'

import getNoteDescr from '../page-board/getNoteDescr'

const CL = {
  DESCR: 'md-details__descr',
  ACTIONS: 'md__actions'
};

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
    const _descr = _refInputDescr.current.getValue();
    dispatch(na.editNoteDescr(id, _descr))
  }, [id])
  //dispatch

  useEffect(() => {
    const _btClose = _refBtClose.current;
    if (isSelected && _btClose) {
      _btClose.focus()
    }
  }, [props])
  //isSelected

  const _initDescr = getNoteDescr(note);

  return (
    <>
      <InputTextArea
        key={id}
        ref={_refInputDescr}
        className={CL.DESCR}
        maxLength={250}
        initValue={_initDescr}
      />
      <DialogButtons
        refBtClose={_refBtClose}
        className={CL.ACTIONS}
        onSave={_editDescr}
        onClose={onClose}
      />
    </>
  );
}

export default TabDescr
