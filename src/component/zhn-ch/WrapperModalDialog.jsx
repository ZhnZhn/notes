const CL_INIT = 'modal-root'
, CL_SHOWING = `${CL_INIT} show-modal`
, S_SHOW = { display: 'block' }
, S_HIDE = { display: 'none' };

const WrapperModalDialog = ({
  isShow,
  onClose,
  children
}) => {
  const [
    _className,
    _style
  ] = isShow
    ? [CL_SHOWING, S_SHOW]
    : [CL_INIT, S_HIDE];

  return (
    <div
      role="presentation"
      className={_className}
      style={_style}
      onClick={onClose}
    >
      {children}
    </div>
  );
};

export default WrapperModalDialog
