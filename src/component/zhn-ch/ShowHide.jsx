import {
  S_BLOCK,
  S_NONE,
  crCn,
  crStyle
} from '../styleFn';

const CL_SHOW_POPUP = 'show-popup';

const ShowHide = ({
  isShow,
  className,
  style,
  children
}) => {
  const _cl = crCn(className, [isShow, CL_SHOW_POPUP])
  , _style = crStyle(style, isShow ? S_BLOCK : S_NONE);

  return (
    <div
      className={_cl}
      style={_style}
    >
      {children}
    </div>
  );
};

export default ShowHide
