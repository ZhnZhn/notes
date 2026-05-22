import {
  Droppable,
  Draggable
} from 'react-beautiful-dnd';

import DroppableDiv from '../zhn-dnd/DroppableDiv';
import DnDNote from './DnDNote';

const S_DIV = { minHeight: 50 }
, S_DRAGGING_OVER_OFF = {
  border: '2px solid #9e9e9e'
};

const _crNoteList = ({
  provided,
  snapshot,
  noteIds,
  notes,
  cId
}) => (
  <DroppableDiv
    {...provided.droppableProps}
    innerRef={provided.innerRef}
    isDraggingOver={snapshot.isDraggingOver}
    style={S_DIV}
    draggingOverOffStyle={S_DRAGGING_OVER_OFF}
  >
    {noteIds.map((nId, index) => (
      <Draggable key={nId} draggableId={nId} index={index}>
      {
        (provided, snap) => (
          <DnDNote
            draggableProps={provided.draggableProps}
            innerRef={provided.innerRef}
            isDragging={snap.isDragging}
            dragHandleProps={provided.dragHandleProps}
            note={notes[nId]}
            columnId={cId}
          />
        )
      }
      </Draggable>
    ))}
    {provided.placeholder}
  </DroppableDiv>
);

const DnDNoteList = ({
  cId,
  noteIds,
  notes
}) => (
  <Droppable droppableId={cId}>
    {
      (provided, snapshot) => _crNoteList({
         provided, snapshot,
         noteIds, notes, cId
      })
    }
  </Droppable>
);

export default DnDNoteList
