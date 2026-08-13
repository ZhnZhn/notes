import { crCn } from '../styleFn';

import ModalPane from '../zhn-ch/ModalPane';
import FlatButton from '../zhn-m/FlatButton';
import { CL_MODAL_PANE } from '../style/CL';

const S_BT = {
  paddingLeft: 8,
  width: '100%',
  textAlign: 'left'
};

const NoteMenuMore = ({
  isShow,
  className,
  style,
  onClose,
  onEdit,
  onRemove
}) => (
  <ModalPane
    isShow={isShow}
    className={crCn(CL_MODAL_PANE, className)}
    style={style}
    onClose={onClose}
  >
    <FlatButton
      style={S_BT}
      caption="Edit Details"
      onClick={onEdit}
    />
    <FlatButton
      style={S_BT}
      caption="Remove Note"
      onClick={onRemove}
    />
  </ModalPane>
);

export default NoteMenuMore
