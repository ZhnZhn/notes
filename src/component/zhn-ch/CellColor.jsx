import { Component } from 'react'
//import PropTypes from 'prop-types'

class CellColor extends Component {
  /*
  static propTypes = {
    tabIndex: PropTypes.string,
    style: PropTypes.object,
    color: PropTypes.string,
    onClick: PropTypes.func,
    onReg: PropTypes.func
  }
  */
  static defaultProps = {
    tabIndex: '-1'
  }

  componentDidMount(){
     const { onReg } = this.props;
     if (typeof onReg === 'function') {
       onReg(this.cellNode)
     }
  }

  _refCellNode = node => this.cellNode = node

  render(){
    const {
            tabIndex,
            style,
            color,
            onClick,
            children
          } = this.props
        , _styleColor = color
             ? { backgroundColor: color }
             : undefined
        , _onClick = onClick
              ? onClick.bind(null, color)
              : undefined;
    return (
      <button
         ref={this._refCellNode}
         tabIndex={tabIndex}
         style={{ ...style, ..._styleColor}}
         onClick={_onClick}
      >
         {children}
      </button>
    );
  }
}


export default CellColor
