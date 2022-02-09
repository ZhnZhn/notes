import { Component } from 'react';

import crCn from '../zhn-utils/crCn';
import CL from '../style/CL';

const K_ENTER = 'Enter'
, K_ENTER_CODE = 13
, K_DELETE = 'Delete'
, K_DELETE_CODE = 46

const _isKeyEnter = (evt) => evt.key === K_ENTER
  || evt.keyCode === K_ENTER_CODE;
const _isKeyDelete = (evt) => evt.key === K_DELETE
  || evt.keyCode === K_DELETE_CODE;

const _getState = (props) => ({
  value: props.value
})

class InputText extends Component {
  /*
  static propTypes = {
    className: PropsType.string,
    style: PropsType.obj,
    value: PropsType.string,
    onBlur: PropsType.func
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
    , _className = crCn(CL.INPUT, className)
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

  setValue(value) {
    this.setState({ value })
  }
}

export default InputText
