import crCn from '../zhn-utils/crCn';
import Svg from './Svg';

const CL_SVG_MORE = "bt-svg-more";

const SvgMore = ({
  className,
  style,
  svgStyle,
  title,
  onClick
}) => {
  return (
    <button
      type="button"
      className={crCn(CL_SVG_MORE, className)}
      style={style}
      title={title}
      onClick={onClick}
    >
      <Svg
        style={svgStyle}
        width="6px"
        height="22px"
        viewBox="0 0 6 22"        
      >
        <circle cx="3" cy="4" r="2" />
        <circle cx="3" cy="11" r="2" />
        <circle cx="3" cy="18" r="2" />
      </Svg>
    </button>
  );
};

export default SvgMore
