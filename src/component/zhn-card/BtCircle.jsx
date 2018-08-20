import React from 'react'

import CL from '../style/CL'

/*
const S = {
  BT: {
    display: 'inline-block',
    padding: 8,
    width: 36,
    height: 36,
    color: '#9e9e9e',
    backgroundColor: '#1b2836',
    borderRadius: '50%',
    textAlign: 'center',
    fontWeight: 600,
    cursor: 'pointer'
  }
};
*/

const BtCircle = ({
  style,
  caption,
  title,
  tabIndex="-1",
  onClick
}) => (
  <button
    className={CL.BT_CIRCLE}
    style={style}
    tabIndex={tabIndex}
    title={title}
    onClick={onClick}
  >
    {caption}
  </button>
);

export default BtCircle
