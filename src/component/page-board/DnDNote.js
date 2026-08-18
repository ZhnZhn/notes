import hocDnD from '../zhn-dnd/hocDnD'
import Note from './Note'

const DnDNote = hocDnD({
  notDragBg: '#9e9e9e',
  isDragHanlerProps: true,
  marginRight: '-2px',
  marginBottom: '-2px'
})(Note);

DnDNote.displayName = 'DnDNote'

export default DnDNote
