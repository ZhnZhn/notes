import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Comp.Style'

import ModalPane from '../zhn-ch/ModalPane'
import FlatButton from '../zhn-m/FlatButton'
import CL from '../style/CL'

const S = {
  BT: {
    paddingLeft: 8,
    width: '100%',
    textAlign: 'left'
  }
}

const NoteMenuMore = ({
  theme,
  className,
  style,
  isShow,
  onClose,
  onEdit,
  onRemove
}) => {
  const TS = theme.createStyle(styleConfig);
  return (
    <ModalPane
      className={`${CL.MODAL_PANE} ${className || ''}`}
      style={{...style, ...TS.COMP}}
      isShow={isShow}
      onClose={onClose}
    >
        <FlatButton
          rootStyle={S.BT}
          caption="Edit Details"
          onClick={onEdit}
        />
        <FlatButton
          rootStyle={S.BT}
          caption="Remove Note"
          onClick={onRemove}
        />
    </ModalPane>
  );
};

export default withTheme(NoteMenuMore)
