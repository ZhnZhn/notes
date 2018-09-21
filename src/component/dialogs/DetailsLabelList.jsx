import React from 'react'

const S = {
  ROOT: {
    paddingBottom: 4
  },
  LABEL: {
    display: 'inline-block',
    color: 'white',
    fontWeight: 600,
    paddingTop: 2,
    paddingLeft: 6,
    paddingRight: 4,
    paddingBottom: 2,
    marginRight: 4,
    marginBottom: 4,
    borderRadius: 2
  },
  CLOSE: {
    display: 'inline-block',
    color: '#1b2836',
    paddingLeft: 6,
    paddingRight: 4,
    fontWeight: 600
  }
};

const Label = ({ item, onRemove }) => (
  <button
    key={item.title}
    style={{
      ...S.LABEL,
      backgroundColor: item.color
    }}
    onClick={onRemove}
  >
    {item.title}
    <span style={S.CLOSE}>x</span>
  </button>
);

const DetailsLabelList = ({
  labels,
  onRemove
}) => (
  <div style={S.ROOT}>
    {
      labels.map(item => (
        <Label
          key={item.title}
          item={item}
          onRemove={onRemove.bind(null, item)}
        />
      ))
    }
  </div>
);

export default DetailsLabelList
