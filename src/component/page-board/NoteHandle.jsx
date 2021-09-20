import crCn from '../zhn-utils/crCn';

const CL_HANDLE = 'note__handle'
, CL_OPEN = 'note__handle--open';

const NoteHandle = ({ isDetails, ...rest }) => {
  const _cl = crCn(CL_HANDLE, [isDetails, CL_OPEN]);
  return (
   <span
      className={_cl}
      {...rest}
   />
  );
};

export default NoteHandle
