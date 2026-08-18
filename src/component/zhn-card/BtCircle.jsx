import { CL_BT_CIRCLE } from '../styleFn';

const BtCircle = ({
  style,
  caption,
  title,
  tabIndex="-1",
  onClick
}) => (
  <button
    type="button"
    className={CL_BT_CIRCLE}
    style={style}
    tabIndex={tabIndex}
    title={title}
    onClick={onClick}
  >
    {caption}
  </button>
);

export default BtCircle
