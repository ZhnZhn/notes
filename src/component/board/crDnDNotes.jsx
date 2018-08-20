import React from 'react'

import NoteList from './NoteList'
import DraggableNotes from './DraggableNotes'

const crDnDNotes = (id, notes, ids, provided, snapshot) => {
  return (
    <NoteList
      {...provided.droppableProps}
      innerRef={provided.innerRef}
      isDraggingOver={snapshot.isDraggingOver}
    >
      <DraggableNotes
        id={id}
        notes={notes}
        ids={ids}
      />
      {provided.placeholder}
    </NoteList>
  );
};

export default crDnDNotes
