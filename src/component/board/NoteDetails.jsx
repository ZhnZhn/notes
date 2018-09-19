import React from 'react'

import ShowHide from '../zhn-ch/ShowHide'

import getNoteDescr from './getNoteDescr'


const CL = 'note__details'

const NoteDetails = ({
  isShow,
  note,
  editDetails
}) => {
  const _descr = getNoteDescr(note);
  return (
    <ShowHide
      className={CL}
      isShow={isShow}
    >
       <div onClick={editDetails}>
         {_descr}
       </div>
    </ShowHide>
  );
};

export default NoteDetails
