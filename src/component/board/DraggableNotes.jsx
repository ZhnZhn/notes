import React, { Fragment } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import Note from './Note'

const _crNote = (provided, snap, note, columnId) => (
  <Note
    draggableProps={provided.draggableProps}
    innerRef={provided.innerRef}
    isDragging={snap.isDragging}
    dragHandleProps={provided.dragHandleProps}
    note={note}
    columnId={columnId}
  />
);

const DraggableNotes = ({ id, notes, ids }) => {
  return (
    <Fragment>
      {
        ids.map((nId, index) => {
          return (
            <Draggable key={nId} draggableId={nId} index={index}>
              { (provided, snap) => _crNote(provided, snap, notes[nId], id) }
            </Draggable>
          );
        })
      }
    </Fragment>
  );
};

export default DraggableNotes
