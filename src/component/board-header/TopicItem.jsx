import FlatButton from '../zhn-m/FlatButton';
import CL from './CL';

const HIDE = 'hide'
, SHOW = 'show';

const Badge = ({ isHide }) => (
  <span className={CL.BADGE}>
    {isHide ? 'H' : 'S' }
  </span>
);

const _crTitle = is =>
  `Click to ${is ? SHOW : HIDE} topic`;

const TopicItem = ({
  topic,
  onClick
}) => {
  if (!topic) { return null; }
  const { isHide, title } = topic
  , _title = _crTitle(isHide);
  return (
    <>
      <FlatButton
        className={CL.BT}
        caption={title}
        title={_title}
        timeout={0}
        onClick={onClick}
      />
      <Badge isHide={isHide} />
    </>
  );
};

export default TopicItem
