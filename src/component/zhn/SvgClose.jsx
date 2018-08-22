import React from 'react'

const CL_ROOT = "bt-svg-close";

const SvgClose = ({
  className='',
  style,
  tabIndex,
  onClose
}) => (
   <button
      tabIndex={tabIndex}
      className={`${CL_ROOT} ${className}`}
      style={style}
      onClick={onClose}
   >
     <svg
        viewBox="0 0 12 12" width="100%" height="100%"
        preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M 0,0 L 12,12"/>
        <path d="M 12,0 L 0,12"/>
     </svg>
   </button>
);

export default SvgClose
