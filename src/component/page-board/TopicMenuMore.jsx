import useTheme from '../hooks/useTheme';
import styleConfig from '../style/Comp.Style';

import ModalPane from '../zhn-ch/ModalPane';
import FlatButton from '../zhn-m/FlatButton';
import {
  CL_MODAL_PANE
} from '../style/CL';

const S_BT = {
  paddingLeft: 8,
  width: '100%',
  textAlign: 'left'
};

const TopicMenuMore = ({
  style,
  isShow,
  onHideTopic,
  onAddNote,
  onClose
}) => {
  const TS = useTheme(styleConfig);
  return (
    <ModalPane
      className={CL_MODAL_PANE}
      style={{...style, ...TS.COMP}}
      isShow={isShow}
      onClose={onClose}
    >
        <FlatButton
          style={S_BT}
          caption="Hide Topic"
          title="Click to hide Topic"
          onClick={onHideTopic}
        />
        <FlatButton
          style={S_BT}
          caption="Add Note"
          title="Click to add new Note"
          timeout={100}
          onClick={onAddNote}
        />
    </ModalPane>
  );
};

export default TopicMenuMore
