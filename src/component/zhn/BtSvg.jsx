import { crCn } from '../styleFn';
import Svg from './Svg';

const BtSvg = (
  props
) => (
  <button
    type="button"
    className={props.className}
    style={props.style}
    title={props.title}
    onClick={props.onClick}
  >
    <Svg
      w={props.w}
      h={props.h}
      width={props.width}
      height={props.height}
    >
      {props.children}
    </Svg>
  </button>
);

const CL_BT_SVG_CLOSE = "bt-svg-close";
export const BtSvgClose = (
  props
) => (
  <BtSvg
    className={crCn(CL_BT_SVG_CLOSE, props.className)}
    onClick={props.onClick}
    w="12"
    width="100%"
    height="100%"
  >
    <path d="M 0,0 L 12,12"/>
    <path d="M 12,0 L 0,12"/>
  </BtSvg>
)

const CL_BT_SVG_MORE = "bt-svg-more";
export const BtSvgMore = (
  props
) => (
  <BtSvg    
    className={crCn(CL_BT_SVG_MORE, props.className)}
    style={props.style}
    title={props.title}
    onClick={props.onClick}
    w="6"
    h="22"
  >
    <circle cx="3" cy="4" r="2" />
    <circle cx="3" cy="11" r="2" />
    <circle cx="3" cy="18" r="2" />
  </BtSvg>
)
