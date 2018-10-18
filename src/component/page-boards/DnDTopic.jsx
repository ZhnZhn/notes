import React from 'react'

import Card from '../zhn-card/Card'

const S = {
  TOPIC: {
    paddingLeft: 12,
    lineHeight: 2
  },
  COUNTER: {
    float: 'right',
    paddingRight: 12
  }
};

const _crTopicStyle = is => ({
  backgroundColor: is
     ? '#1e90ff'
     : 'transparent'
});

const DnDTopic = (props) => {
  const {
    draggableProps,
    innerRef,
    isDragging,
    dragHandleProps,
    title,
    count
  } = props
  , { style, ...draggablePropsRest } = draggableProps
  , _style = _crTopicStyle(isDragging)
  return (
    <div
      ref={innerRef}
      style={{ ...S.TOPIC, ...style, ..._style}}
      {...draggablePropsRest}
      {...dragHandleProps}
    >
      <span>
        {title}
      </span>
      <Card.Counter
         style={S.COUNTER}
         value={count}
      />
    </div>
  );
};

export default DnDTopic
