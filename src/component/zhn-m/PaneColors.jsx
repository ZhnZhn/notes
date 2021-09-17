import { forwardRef, useState, useCallback, useImperativeHandle } from 'react'

import CellColor from '../zhn-ch/CellColor'

const C_DF = '#2f7ed8';
const COLORS1 = [
  '#8abb5d','#f7a35c','#795548',
  '#f45b5b','#d2b772', '#dda0dd'
];
const COLORS2 = [
  '#f1d600','#008b8b','#2f7ed8',
  '#000000','#607d8b','#7092be'
];

const S_PANE_COLOR = {
    paddingBottom: 4
  },
  S_ROW_2 = {
    paddingLeft: 56,
    paddingTop: 4
  },
  S_TO_CELL = {
    marginLeft: 12,
    marginRight: 12,
  },
  S_CELL = {
    marginRight: 4,
    position: 'relative',
    display: 'inline-block',
    height: 32,
    width: 32,
    borderRadius: 2,
    verticalAlign: 'bottom',
    boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
  , S_CELL_COLOR = {...S_CELL, ...S_TO_CELL};


const ColorStack = ({
  colors,
  onClick
}) => (
  <>
     {colors.map(c => (
       <CellColor
         key={c}
         color={c}
         style={S_CELL}
         onClick={onClick}
       />
     ))}
  </>
);


const PaneColors = forwardRef(({
  initColor=C_DF
}, ref) => {
  const [color, setColor] = useState(initColor)
  , _hClick = useCallback(color => {
    if (color) {
      setColor(color)
    }
  }, [])
  , _hInit = useCallback(() => setColor(initColor), [initColor]);

  useImperativeHandle(ref, () => ({
    getColor: () => color
  }), [color])

  return (
    <div style={S_PANE_COLOR}>
      <div>
        <CellColor
          style={S_CELL_COLOR}
          color={color}
          onClick={_hInit}
        />
        <ColorStack
          colors={COLORS1}
          onClick={_hClick}
        />
      </div>
      <div style={S_ROW_2}>
        <ColorStack
          colors={COLORS2}
          onClick={_hClick}
        />
      </div>
    </div>
  );
})

export default PaneColors
