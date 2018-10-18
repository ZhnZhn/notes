import React from 'react'

const CL = {
  HANDLE: 'note__handle',
  OPEN: 'note__handle--open'
};

const NoteHandle = ({ isDetails, ...rest }) => {
  const _cl = isDetails
    ? `${CL.HANDLE} ${CL.OPEN}`
    : CL.HANDLE;
  return (
   <span
      className={_cl}
      {...rest}
   />
  );
};

export default NoteHandle
