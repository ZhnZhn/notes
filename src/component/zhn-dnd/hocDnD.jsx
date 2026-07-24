import { isFn } from '../../utils/isTypeFn';

const _crTopicStyle = (is,
  dragBg = '#1e90ff',
  notDragBg = 'transparent'
) => ({
  backgroundColor: is
     ? dragBg
     : notDragBg
});

const _hocDnDImpl = (ItemComp, options) => (props) => {
  const {
    draggableProps,
    innerRef,
    isDragging,
    dragHandleProps,
    ...rest
  } = props
  , {
    dragBg,
    notDragBg,
    isDragHanlerProps
  } = options || {}
  , { style, ...draggablePropsRest } = draggableProps
  , _style = _crTopicStyle(isDragging, dragBg, notDragBg)
  , _dragHandleProps = isDragHanlerProps
       ? void 0
       : dragHandleProps;

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
         {...rest}
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
