import ShowHide from '../zhn-ch/ShowHide'
import LabelList from '../d-details/LabelList'

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
         <LabelList
           labels={note.labels}
         />
         <div>
           {_descr}
         </div>
       </div>
    </ShowHide>
  );
};

export default NoteDetails
