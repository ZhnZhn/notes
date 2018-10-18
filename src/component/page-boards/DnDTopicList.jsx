import React from 'react'

import { Droppable, Draggable } from 'react-beautiful-dnd'

import DroppableDiv from '../zhn-dnd/DroppableDiv'
import DnDTopic from './DnDTopic'

const _crTopicProps = (topic) => ({
  title: topic.title,
  count: topic.noteIds.length
});

const _crTopicList = ({
  provided, snapshot,
  columnIds, columns
}) => (
  <DroppableDiv
     {...provided.droppableProps}
     innerRef={provided.innerRef}
     isDraggingOver={snapshot.isDraggingOver}
  >
    {columnIds.map((tId, index) => (
        <Draggable key={tId} draggableId={tId} index={index}>
        {
          (provided, snap) => (
            <DnDTopic
              draggableProps={provided.draggableProps}
              innerRef={provided.innerRef}
              isDragging={snap.isDragging}
              dragHandleProps={provided.dragHandleProps}
              {..._crTopicProps(columns[tId])}
            />
          )
        }
       </Draggable>
    ))}
    {provided.placeholder}
  </DroppableDiv>
);

const DnDTopicList = ({ id, columnIds, columns }) => (
  <Droppable droppableId={id}>
  {
    (provided, snapshot) => _crTopicList({
      provided, snapshot,
      columnIds, columns,
    })
  }
  </Droppable>
);


export default DnDTopicList
