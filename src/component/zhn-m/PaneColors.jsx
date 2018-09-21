import React, { Component } from 'react'

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

const S = {
  ROOT: {
    paddingBottom: 4
  },
  ROW2: {
    paddingLeft: 56,
    paddingTop: 4
  },
  TO_CELL: {
    marginLeft: 12,
    marginRight: 12,
  },
  CELL: {
  marginRight: 4,
  position: 'relative',
  display: 'inline-block',
  height: 32,
  width: 32,
  borderRadius: 2,
  verticalAlign: 'bottom',
  boxShadow: '0 2px 2px 0 rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.1)'
  }
};

const _initColor = (props) => props.initColor || C_DF;

class PaneColors extends Component {
  constructor(props){
    super()
    this.state = {
      color: _initColor(props)
    }
  }

  componentDidMount() {
    const { onReg } = this.props;
    if (typeof onReg === 'function'){
      onReg(this)
    }
  }

  _hInit = () => {
    this.setState({
      color: _initColor(this.props)
    })
  }

  _hClick = (color) => {
     if (color) {
       this.setState({ color })
     }
  }

  _renderColors = (colors, isLong) => {
    return colors.map(c => (
      <CellColor
        key={c}
        color={c}
        style={S.CELL}
        onClick={this._hClick}
      />
    ));
   }
  
  render(){
    const { color } = this.state;
    return (
      <div style={S.ROOT}>
        <div>
          <CellColor
            color={color}
            style={{ ...S.CELL, ...S.TO_CELL }}
            onClick={this._hInit}
          />
          {this._renderColors(COLORS1)}
        </div>
        <div style={S.ROW2}>
          {this._renderColors(COLORS2)}
        </div>
      </div>
    );
  }

  getColor(){
    return this.state.color;
  }
}

export default PaneColors
