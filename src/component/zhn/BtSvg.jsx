import crCn from '../zhn-utils/crCn';
import Svg from './Svg';

const BtSvg = ({
  className,
  style,
  title,
  onClick,
  w,
  h,
  width,
  height,
  children
}) => (
  <button
    type="button"
    className={className}
    style={style}
    title={title}
    onClick={onClick}
  >
    <Svg
      w={w}
      h={h}
      width={width}
      height={height}
    >
      {children}
    </Svg>
  </button>
);

const CL_BT_SVG_CLOSE = "bt-svg-close";
export const BtSvgClose = ({
  className,
  onClick
}) => (
  <BtSvg
    className={crCn(CL_BT_SVG_CLOSE, className)}
    onClick={onClick}
    w="12"
    width="100%"
    height="100%"
  >
    <path d="M 0,0 L 12,12"/>
    <path d="M 12,0 L 0,12"/>
  </BtSvg>
)

const CL_BT_SVG_MORE = "bt-svg-more";
export const BtSvgMore = ({
  className,
  style,
  title,
  onClick
}) => (
  <BtSvg
    className={crCn(CL_BT_SVG_MORE, className)}
    style={style}
    title={title}
    onClick={onClick}
    w="6"
    h="22"
  >
    <circle cx="3" cy="4" r="2" />
    <circle cx="3" cy="11" r="2" />
    <circle cx="3" cy="18" r="2" />
  </BtSvg>
)
