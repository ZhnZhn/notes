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

const Topic = ({ title, count }) => (
  <div style={S.TOPIC} >
    <span>
      {title}
    </span>
    <Card.Counter
       style={S.COUNTER}
       value={count}
    />
  </div>
);

export default Topic
