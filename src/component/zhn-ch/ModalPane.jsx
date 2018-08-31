import React, { Component } from 'react'

class ModalPane extends Component {
  /*
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    isShow: PropTypes.bool,
    onClose: PropTypes.func
  }
  */

  static defaultProps = {
    onClose: () => {}
  }

  _hClickOutside = (event) => {
    const { onClose } = this.props;
    if (this.rootNode
      && this.rootNode.contains
      && !this.rootNode.contains(event.target)) {
       onClose(event)
    }
  }

  _addOutsideListener = () => {
    document.addEventListener('click', this._hClickOutside, true)
  }
  _removeOutsideListener = () => {
    document.removeEventListener('click', this._hClickOutside, true)
  }

  componentDidMount() {
    if (this.props.isShow) {
      this._addOutsideListener()
    }
  }
  componentWillUnmount() {
    this._removeOutsideListener()
  }


  componentDidUpdate(prevProps) {
    if (this.props !== prevProps ){
      if (this.props.isShow){
        this._addOutsideListener()
      } else {
        this._removeOutsideListener()
      }
    }
  }
  
  _refRootNode = n => this.rootNode = n

  render(){
    const {
      className,
      style,
      children
    } = this.props;
    return (
      <div
        ref={this._refRootNode}
        className={className}
        style={style}
      >
        {children}
      </div>
    );
  }
}

export default ModalPane
