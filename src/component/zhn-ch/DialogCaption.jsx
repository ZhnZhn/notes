import SvgClose from '../zhn/SvgClose';

const CL_HEADER = 'dialog__header'
, CL_CAPTION = 'dialog__caption not-selected'
, CL_CLOSE = 'dialog__svg-close';

const DialogCaption = ({
  rootStyle,
  svgStyle,
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
    <SvgClose
      className={CL_CLOSE}
      onClose={onClose}
    />
  </div>
);

export default DialogCaption
