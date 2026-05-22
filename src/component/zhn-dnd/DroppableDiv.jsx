const S_DIV = {
  minHeight: 100
}
, S_DRAGGING_OVER_ON = {
  border: '2px dashed lightgreen'
}
, S_DRAGGING_OVER_OFF = {
  border: '2px dashed transparent'
};

const DroppableDiv = (props) => {
  const {
    className,
    style,
    innerRef,
    isDraggingOver,
    draggingOverOffStyle,
    children,
    ...restProps
  } = props
  , _style = isDraggingOver
    ? S_DRAGGING_OVER_ON
    : draggingOverOffStyle || S_DRAGGING_OVER_OFF;
  return (
    <div
      {...restProps}
      ref={innerRef}
      className={className}
      style={{ ...S_DIV, ...style, ..._style }}
    >
      {children}
    </div>
  );
};

export default DroppableDiv
