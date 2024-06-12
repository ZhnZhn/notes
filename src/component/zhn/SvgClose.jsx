import crCn from '../zhn-utils/crCn';
import Svg from './Svg';

const CL_BT_SVG_CLOSE = "bt-svg-close";

const SvgClose = ({
  className,
  style,
  tabIndex,
  onClose
}) => (
   <button
      tabIndex={tabIndex}
      className={crCn(CL_BT_SVG_CLOSE, className)}
      style={style}
      onClick={onClose}
   >
     <Svg
        w="12"
        width="100%"
        height="100%"
      >
        <path d="M 0,0 L 12,12"/>
        <path d="M 12,0 L 0,12"/>
     </Svg>
   </button>
);

export default SvgClose
