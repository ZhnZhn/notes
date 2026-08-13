import ModalPane from '../zhn-ch/ModalPane';
import FlatButton from '../zhn-m/FlatButton';
import { CL_MODAL_PANE } from '../style/CL';

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
}) => (
  <ModalPane
    isShow={isShow}
    className={CL_MODAL_PANE}
    style={style}
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


export default TopicMenuMore
