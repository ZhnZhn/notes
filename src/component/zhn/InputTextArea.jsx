import { Component } from 'react'

import isKeyDelete from './isKeyDelete';

class InputTextArea extends Component {
  /*
  static propTypes = {
    className: PropsType.string
    style: PropsType.object,
    initValue: PropsType.string
  }
  */

  static defaultProps = {
    initValue: ''
  }

  constructor(props){
    super(props)
    this.state = {
      value: props.initValue
    }
  }

  _hChange = (evt) => {
    this.setState({
      value: evt.target.value
    })
  }
  _hKeyDown = (evt) => {
    if (isKeyDelete(evt)) {
      this.setState({ value: '' })
    }
  }

  _refInputNode = (node) => this._inputNode = node

  render(){
    const {
      className,
      style,
      maxLength
    } = this.props;
    const { value } = this.state;
    return (
      <textarea
        ref={this._refInputNode}
        className={className}
        style={style}
        value={value}
        maxLength={maxLength}
        onChange={this._hChange}
        onKeyDown={this._hKeyDown}
      />
    );
  }

  getValue() {
    return this.state.value;
  }
  focus(){
    if (this._inputNode
      && this._inputNode.focus) {
     this._inputNode.focus()
    }
  }

}

export default InputTextArea
