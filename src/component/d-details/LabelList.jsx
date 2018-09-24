import React from 'react'

import Label from './LabelNote'
import CL from '../style/CL'

const S = {
  ROOT: {
    paddingBottom: 4
  }
};

const LabelList = ({
  labels,
  onRemove
}) => (
  <div style={S.ROOT}>
    {
      labels.map(item => (
        <Label
          key={item.id || item.title}
          className={CL.NOTE_LABEL}
          clClose={CL.NOTE_LABEL_CLOSE}
          item={item}
          onRemove={onRemove
            ? onRemove.bind(null, item)
            : undefined
          }
        />
      ))
    }
  </div>
);
LabelList.defaultProps = {
  labels: []
}

export default LabelList
