import { isFn } from '../../utils/isTypeFn';

const _crTopicStyle = (
  is,
  dragBg = '#1e90ff',
  notDragBg = 'transparent',
  marginRight,
  marginBottom
) => ({
  backgroundColor: is
    ? dragBg
    : notDragBg,
  marginRight: is
    ? void 0
    : marginRight,
  marginBottom: is
    ? void 0
    : marginBottom
});

const _hocDnDImpl = (
  ItemComp,
  options
) => (props) => {
  const {
    draggableProps,
    innerRef,
    isDragging,
    dragHandleProps,
    ...restProps
  } = props
  , {
    dragBg,
    notDragBg,
    isDragHanlerProps,
    marginRight,
    marginBottom
  } = options || {}
  , {
    style,
    ...draggablePropsRest
  } = draggableProps
  , _style = _crTopicStyle(
      isDragging,
      dragBg,
      notDragBg,
      marginRight,
      marginBottom
    )
  , _dragHandleProps = isDragHanlerProps
       ? void 0
       : dragHandleProps;
  console.log(marginBottom)     
  return (
    <div
      ref={innerRef}
      style={{...style, ..._style}}
      {...draggablePropsRest}
      {..._dragHandleProps}
    >
      <ItemComp
         dragHandleProps={isDragHanlerProps
           ? dragHandleProps
           : undefined
         }
         {...restProps}
      />
    </div>
  );
}

const hocDnD = (
  optionsOrComp,
  options
) => isFn(optionsOrComp)
  ? _hocDnDImpl(optionsOrComp, options)
  : (ItemComp) => {
     /*
     if (!_isComp(ItemComp)) {
       throw new Error('HocDnd expected argument to be react element');
     }
     */
     return _hocDnDImpl(ItemComp, optionsOrComp);
  };

export default hocDnD
