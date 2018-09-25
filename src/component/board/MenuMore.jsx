import React from 'react'

import withTheme from '../hoc/withTheme'
import styleConfig from '../style/Comp.Style'

import ModalPane from '../zhn-ch/ModalPane'
import FlatButton from '../zhn-m/FlatButton'
import CL from '../style/CL'

const MenuMore = ({
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
      <div>
        <FlatButton
          caption="Edit Details"
          onClick={onEdit}
        />
      </div>
      <div>
        <FlatButton
          caption="Remove Note"
          onClick={onRemove}
        />
      </div>
    </ModalPane>
  );
};

export default withTheme(MenuMore)
