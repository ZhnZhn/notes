import crCn from '../zhn-utils/crCn';
import crStyle from '../zhn-utils/crStyle';

const CL_SHOW_POPUP = 'show-popup'
, S_SHOW = { display: 'block' }
, S_HIDE = { display: 'none' };

const ShowHide = ({
  isShow,
  className,
  style,
  children
}) => {
  const _cl = crCn(className, [isShow, CL_SHOW_POPUP])
  , _style = crStyle(style, isShow ? S_SHOW : S_HIDE);

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
