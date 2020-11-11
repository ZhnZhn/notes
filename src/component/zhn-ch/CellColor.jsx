//import PropTypes from 'prop-types'

const CellColor = ({
  tabIndex='-1',
  style,
  color,
  onClick,
  children
}) => {
    const _styleColor = color
       ? { backgroundColor: color }
       : void 0
    , _onClick = onClick
       ? onClick.bind(null, color)
       : void 0;

    return (
      <button
         tabIndex={tabIndex}
         style={{ ...style, ..._styleColor}}
         onClick={_onClick}
      >
         {children}
      </button>
    );
}

/*
CellColor.propTypes = {
  tabIndex: PropTypes.string,
  style: PropTypes.object,
  color: PropTypes.string,
  onClick: PropTypes.func,  
}
*/


export default CellColor
