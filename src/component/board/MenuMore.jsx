import React from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Comp.Style'

import ModalPane from '../zhn-ch/ModalPane'
import FlatButton from '../zhn-m/FlatButton'

const CL = {
  MODAL_PANE: 'modal-pane'
};

const MenuMore = ({
  theme,
  style,
  isShow,
  onClose,
  onRemove
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
          caption="Remove"
          onClick={onRemove}
        />
      </div>
    </ModalPane>
  );
};

export default withTheme(MenuMore)
