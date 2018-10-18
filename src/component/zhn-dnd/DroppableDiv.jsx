import React from 'react'

const S = {
  ROOT: {
    minHeight: 100
  },
  DRAGGING_OVER: {
    border: '2px dashed lightgreen'
  },
  NOT_DRAGGING_OVER: {
    border: '2px dashed transparent'
  }
};

const _crRootStyle = (is, notDraggingStyle) => is
  ? S.DRAGGING_OVER
  : notDraggingStyle || S.NOT_DRAGGING_OVER;

const DroppableDiv = (props) => {
  const {
    className,
    style,
    innerRef,
    isDraggingOver,
    notDraggingStyle,
    children,
    ...rest
  } = props
  , _style = _crRootStyle(isDraggingOver, notDraggingStyle);
  return (
    <div
      {...rest}
      ref={innerRef}
      className={className}
      style={{ ...S.ROOT, ...style, ..._style }}
    >
      {children}
    </div>
  );
}

export default DroppableDiv
