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

const TopicMenuMore = ({
  style,
  theme,
  isShow,
  onHideTopic,
  onAddNote,
  onClose
}) => {
  const TS = theme.createStyle(styleConfig);
  return (
    <ModalPane
      className={CL.MODAL_PANE}
      style={{...style, ...TS.COMP}}
      isShow={isShow}
      onClose={onClose}
    >
        <FlatButton
          style={S.BT}
          caption="Hide Topic"
          title="Click to hide Topic"
          onClick={onHideTopic}
        />
        <FlatButton
          style={S.BT}
          caption="Add Note"
          title="Click to add new Note"
          timeout={100}
          onClick={onAddNote}
        />
    </ModalPane>
  );
};

export default withTheme(TopicMenuMore)
