import FlatButton from '../zhn-m/FlatButton'

const DialogButtons = ({
  refBtClose,
  className,
  onSave,
  onClose
}) => (
  <div className={className}>
    <FlatButton
      caption="Save"
      timeout={100}
      onClick={onSave}
    />
    <FlatButton
      ref={refBtClose}
      caption="Close"
      timeout={0}
      onClick={onClose}
    />
  </div>
);


export default DialogButtons
