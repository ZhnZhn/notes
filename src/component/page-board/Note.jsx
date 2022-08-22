//import PropsType from 'prop-types'
import {
  useRef,
  useCallback,
  getRefValue
} from '../uiApi';

import useBool from '../hooks/useBool';
import useToggle from '../hooks/useToggle';

import { useDispatch } from 'react-redux';

import { deleteNote } from '../../flux/note/actions';
import { editNoteTitle } from '../../flux/note/reducer';

import { showDetails } from '../../flux/modal/reducer';

import NoteCaption from './NoteCaption';
import NoteDetails from './NoteDetails';

const CL = 'note';

const DnDNote = (
  props
) => {
  const {
    columnId,
    note,
    dragHandleProps
  } = props
  , {
    id:noteId,
    title:noteTitle
  } = note
  , _refTitle = useRef()
  , [
    isMenuMore,
    openMenuMore,
    closeMenuMore
  ] = useBool()
  , [
    isDetails,
    toggleDetails
  ] = useToggle()
  , dispatch = useDispatch()
  /*eslint-disable react-hooks/exhaustive-deps */
  , _deleteNote = useCallback(() => {
    dispatch(deleteNote({
      columnId,
      noteId
    }))
  }, [columnId])
  //dispatch, noteId
  /*eslint-enable react-hooks/exhaustive-deps */
  /*eslint-disable react-hooks/exhaustive-deps */
  , _blurTitle = useCallback((evt) => {
    const title = evt.target.value;
    if (!title) {
      const _titleInst = getRefValue(_refTitle);
      if (_titleInst) {
        _titleInst.setValue(noteTitle)
      }
    } else if (title !== noteTitle) {
      dispatch(editNoteTitle({
        noteId,
        title
      }))
    }
  }, [noteTitle])
  // dispatch, noteId
  /*eslint-enable react-hooks/exhaustive-deps */
  /*eslint-disable react-hooks/exhaustive-deps */
  , _editDetails = useCallback(() => {
     dispatch(showDetails(note))
     closeMenuMore()
  }, [note]);
  // dispatch, closeMenuMore
  /*eslint-enable react-hooks/exhaustive-deps */


  return (
    <div
      className={CL}
      id={noteId}
    >
      <NoteCaption
        dragHandleProps={dragHandleProps}
        isDetails={isDetails}
        onClickHandle={toggleDetails}

        refTitle={_refTitle}
        noteTitle={noteTitle}
        onBlurTitle={_blurTitle}

        isMenuMore={isMenuMore}
        onClickMenuMore={openMenuMore}
        onCloseMenuMore={closeMenuMore}
        onEditDetails={_editDetails}
        onRemoveNote={_deleteNote}
      />
      <NoteDetails
        isShow={isDetails}
        note={note}
        editDetails={_editDetails}
      />
    </div>
  );
}

/*
DnDNote.propTypes = {
  dragHandleProps: PropsType.object,
  note: PropsType.object
  columnId: PropsType.string
}
*/

export default DnDNote
