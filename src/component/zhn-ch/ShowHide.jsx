//import { PropTypes } from 'react'
import crCn from '../zhn-utils/crCn';
import crStyle from '../zhn-utils/crStyle';

const CL = 'show-popup'
, S_SHOW = { display: 'block' }
, S_HIDE = { display : 'none'};

const ShowHide = ({
  isShow,
  className,
  style,
  children
}) => {
    const _cl = crCn(className, [isShow, CL])
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

/*
ShowHide.propTypes = {
  isShow: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.oneOfType[
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]
}
*/

export default ShowHide
