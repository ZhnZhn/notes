import crCn from '../zhn-utils/crCn';

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
      className={crCn(CL_SVG_MORE, className)}
      style={style}
      title={title}
      onClick={onClick}
    >
      <svg
        style={svgStyle}
        width="6px"
        height="22px"
        viewBox="0 0 6 22"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="4" r="2" />
        <circle cx="3" cy="11" r="2" />
        <circle cx="3" cy="18" r="2" />
      </svg>
    </button>
  );
};

export default SvgMore
