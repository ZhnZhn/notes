import { crCn } from '../styleFn';

const CL_HANDLE = 'note__handle'
, CL_OPEN = 'note__handle--open';

const NoteHandle = ({
  isDetails,
  ...restProps
}) => {
  const _cl = crCn(CL_HANDLE, [isDetails, CL_OPEN]);
  return (
   <span
      className={_cl}
      {...restProps}
   />
  );
};

export default NoteHandle
