import React from 'react'

import FlatButton from '../zhn-m/FlatButton'
import CL from './CL'

const C  = {
  HIDE: 'hide',
  SHOW: 'show'
};

const S = {
  LI: {
    position: 'relative'
  }
};

const Badge = ({ isHide }) => (
  <span className={CL.BADGE}>
    {isHide ? 'H' : 'S' }
  </span>
);

const _crTitle = (is) => {
  return `Click to ${is ? C.SHOW : C.HIDE} topic`;
};

const TopicItem = ({ topic, onClick }) => {
  const { isHide, title } = topic
  , _title = _crTitle(isHide);
  return (
    <li style={S.LI}>
      <FlatButton
        className={CL.BT}
        caption={title}
        title={_title}
        timeout={0}
        onClick={onClick}
      />
      <Badge isHide={isHide} />
    </li>
  );
};

TopicItem.defaultProps = {
  topic: {}
}


export default TopicItem
