import React from 'react'

const S = {
  COUNTER: {
    display: 'inline-block',
    fontWeight: 600,
    paddingLeft: 12
  }
};

const Counter = ({ style, value }) => (
  <span style={{ ...S.COUNTER, ...style}}>
    {value}
  </span>
);

export default Counter
