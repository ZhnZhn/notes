import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Comp.Style'
import crCn from '../zhn-utils/crCn'

import ModalPane from '../zhn-ch/ModalPane'
import FlatButton from '../zhn-m/FlatButton'
import CL from '../style/CL'

const S_BT = {
  paddingLeft: 8,
  width: '100%',
  textAlign: 'left'
};

const NoteMenuMore = ({
  theme,
  className,
  style,
  isShow,
  onClose,
  onEdit,
  onRemove
}) => {
  const TS = theme.createStyle(styleConfig)
  , _className = crCn(CL.MODAL_PANE, className);
  return (
    <ModalPane
      className={_className}
      style={{...style, ...TS.COMP}}
      isShow={isShow}
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
};

export default withTheme(NoteMenuMore)
