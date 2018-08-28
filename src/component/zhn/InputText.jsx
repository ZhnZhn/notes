import React, { Component } from 'react'

import CL from '../style/CL'

const K = {
  ENTER: 'Enter',
  ENTER_CODE: 13,
  DELETE: 'Delete',
  DELETE_CODE: 46
};

const _isKeyEnter = (evt) => evt.key === K.ENTER
  || evt.keyCode === K.ENTER_CODE;
const _isKeyDelete = (evt) => evt.key === K.DELETE
  || evt.keyCode === K.DELETE_CODE;

const _getState = (props) => ({
  value: props.value
})

class InputText extends Component {
  /*
  static propTypes = {
    className: React.PropsType.string,
    style: React.PropsType.obj,
    value: React.PropsType.string,
    onBlur: React.PropsType.func
  }
  */

  static defaultProps = {
    maxLength: 40
  }

  state = _getState(this.props)

  _hChange = (evt) => {
    const value = evt.target.value;
    if (value.length <= this.props.maxLength) {
      this.setState({ value })
    }
  }

  _hKeyDown = (evt) => {
    if (_isKeyEnter(evt)) {
      const el = document.activeElement;
      if (el && typeof el.blur === 'function' ) {
        el.blur()
      }
    } else if (_isKeyDelete(evt)) {
      this.setState({ value: '' })
    }
  }

  render(){
    const {
      className,
      style,
      onBlur
    } = this.props
    , _className = className
        ? `${CL.INPUT} ${className}`
        : CL.INPUT
    , { value } = this.state;
    return (
      <input
        type="text"
        className={_className}
        style={style}
        value={value}
        onChange={this._hChange}
        onBlur={onBlur}
        onKeyDown={this._hKeyDown}
      />
    );
  }
}

export default InputText
