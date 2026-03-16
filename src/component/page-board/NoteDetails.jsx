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
    {
     /*eslint-disable jsx-a11y/no-static-element-interactions*/
     /*eslint-disable jsx-a11y/click-events-have-key-events*/
    }
       <div onClick={editDetails}>
         <LabelList
           labels={note.labels}
         />
         <div>
           {_descr}
         </div>
       </div>
    {
      /*eslint-enable jsx-a11y/no-static-element-interactions*/
      /*eslint-enable jsx-a11y/click-events-have-key-events*/
    }
    </ShowHide>
  );
};

export default NoteDetails
