import React from 'react'

import SvgClose from '../zhn/SvgClose'

const CL = {
  HEADER: 'dialog__header',
  CAPTION: 'dialog__caption not-selected',
  CLOSE: 'dialog__svg-close'
};

const DialogCaption = ({ rootStyle, svgStyle, caption, children, onClose }) => (
  <div
    className={CL.HEADER}
    style={rootStyle}
  >
    <span className={CL.CAPTION}>
       {caption}
    </span>
    {children}
    <SvgClose
      className={CL.CLOSE}      
      onClose={onClose}
    />
  </div>
);

export default DialogCaption
