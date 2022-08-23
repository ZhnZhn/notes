import useClickOutside from '../hooks/useClickOutside';
import useKeyEscape from '../hooks/useKeyEscape';

const ModalPane = ({
  isShow,
  className,
  style,
  children,
  onClose
}) => {
  const _refNode = useClickOutside(isShow, onClose)
  , _hKeyEscape = useKeyEscape(onClose)
  , _hKeyDown = isShow
       ? _hKeyEscape
       : void 0;
  return (
    <div
       role="presentation"
       ref={_refNode}
       className={className}
       style={style}
       onKeyDown={_hKeyDown}
    >
      {children}
    </div>
  );
}

export default ModalPane
