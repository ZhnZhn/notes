import InputText from '../zhn/InputText'
import SvgMore from '../zhn/SvgMore'
import NoteHandle from './NoteHandle'
import MenuMore from './NoteMenuMore'

const CL_CAPTION = 'note__caption'
, CL_BT_MORE = 'note__bt-more'
, CL_MENU_MORE = 'note__menu-more';

const NoteCaption = ({
  dragHandleProps,
  isDetails,
  onClickHandle,

  noteTitle,
  onBlurTitle,

  isMenuMore,
  onClickMenuMore,
  onCloseMenuMore,
  onEditDetails,
  onRemoveNote
}) => (
  <div>
    <NoteHandle
      {...dragHandleProps}
      isDetails={isDetails}
      onClick={onClickHandle}
    />
    <InputText
      className={CL_CAPTION}
      value={noteTitle}
      onBlur={onBlurTitle}
    />
    <SvgMore
      className={CL_BT_MORE}
      title="Click to open note menu"
      onClick={onClickMenuMore}
    />
    {
      isMenuMore && <MenuMore
        isShow={isMenuMore}
        className={CL_MENU_MORE}
        onClose={onCloseMenuMore}
        onEdit={onEditDetails}
        onRemove={onRemoveNote}
      />
    }
  </div>
);

export default NoteCaption
