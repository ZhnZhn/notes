import React from 'react'

const C = {
  DRAGGING_OVER: 'lightgreen',
  NOT_DRAGGING_OVER: 'transparent'
};

const S = {
  ROOT: {
    padding: 8,
    transition: 'background-color 0.2s easy',
    minHeight: 100
  }
}

const _crRootStyle = (is) => {
  const _color = is
    ? C.DRAGGING_OVER
    : C.NOT_DRAGGING_OVER
  return {
    backgroundColor: _color
  };
};

const NoteList = (props) => {
  const {
    innerRef,
    children,
    ...rest
  } = props
  , _style = _crRootStyle(rest.isDraggingOver);
  return (
    <div
      {...rest}
      ref={innerRef}
      style={{ ...S.ROOT, ..._style }}
    >
      {children}
    </div>
  );
}

export default NoteList
