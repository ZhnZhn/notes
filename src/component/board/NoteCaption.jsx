import React from 'react'

import InputText from '../zhn/InputText'
import SvgMore from '../zhn/SvgMore'
import MenuMore from './MenuMore'
import NoteHandle from './NoteHandle'

const CL = {
  CAPTION: 'note__caption',
  BT_MORE: 'note__bt-more',
  MENU_MORE: 'note__menu-more'
};

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
      className={CL.CAPTION}
      value={noteTitle}
      onBlur={onBlurTitle}
    />
    <SvgMore
      className={CL.BT_MORE}
      title="Click to open note menu"
      onClick={onClickMenuMore}
    />
    {
      isMenuMore && <MenuMore
        isShow={isMenuMore}
        className={CL.MENU_MORE}
        onClose={onCloseMenuMore}
        onEdit={onEditDetails}
        onRemove={onRemoveNote}
      />
    }
  </div>
);

export default NoteCaption
