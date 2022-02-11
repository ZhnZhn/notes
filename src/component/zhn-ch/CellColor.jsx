
const FN_NOOP = () => {}

const CellColor = ({
  tabIndex='-1',
  style,
  color,
  onClick=FN_NOOP,
  children
}) => {
    const _styleColor = color
       ? { backgroundColor: color }
       : void 0
    , _onClick = () => onClick(color);

    return (
      <button
         tabIndex={tabIndex}
         style={{ ...style, ..._styleColor}}
         onClick={_onClick}
      >
         {children}
      </button>
    );
};

export default CellColor
