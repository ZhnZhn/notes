import { BtSvgClose } from '../zhn/BtSvg';

const CL_HEADER = 'dialog__header'
, CL_CAPTION = 'dialog__caption not-selected'
, CL_CLOSE = 'dialog__svg-close';

const DialogCaption = ({
  rootStyle,
  caption,
  onClose,
  children,
}) => (
  <div
    className={CL_HEADER}
    style={rootStyle}
  >
    <span className={CL_CAPTION}>
       {caption}
    </span>
    {children}
    <BtSvgClose
      className={CL_CLOSE}
      onClick={onClose}
    />
  </div>
);

export default DialogCaption
