import React from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Comp.Style'

import ModalPane from '../zhn-ch/ModalPane'
import FlatButton from '../zhn-m/FlatButton'
import CL from '../style/CL'

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
      <div>
        <FlatButton
          caption="Hide Topic"
          title="Click to hide Topic"
          onClick={onHideTopic}
        />
      </div>
      <div>
        <FlatButton
          caption="Add Note"
          title="Click to add new Note"
          timeout={100}
          onClick={onAddNote}
        />
      </div>
    </ModalPane>
  );
};

export default withTheme(TopicMenuMore)
