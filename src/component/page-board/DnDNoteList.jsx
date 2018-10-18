import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import DroppableDiv from '../zhn-dnd/DroppableDiv'
import DnDNote from './DnDNote'

const S = {
  ROOT: {
    minHeight: 50
  },
  NOT_DRAGGING_OVER: {
    border: '2px solid #9e9e9e'
  }
};

const _crNoteList = ({
  provided, snapshot,
  noteIds, notes, cId
}) => (
  <DroppableDiv
    {...provided.droppableProps}
    innerRef={provided.innerRef}
    isDraggingOver={snapshot.isDraggingOver}
    style={S.ROOT}
    notDraggingStyle={S.NOT_DRAGGING_OVER}
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

const DnDNoteList = ({ cId, noteIds, notes }) => (
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
