import React, { Component } from 'react'

class ModalPane extends Component {
  static defaultProps = {
    onClose: () => {}
  }

  componentWillReceiveProps(nextProps){
    if (this.props !== nextProps ){
      if (nextProps.isShow){
        document.addEventListener('click', this._hClickOutside, true)
      } else {
        document.removeEventListener('click', this._hClickOutside, true)
      }
    }
  }

  _hClickOutside = (event) => {
    const { onClose } = this.props;
    if (this.rootNode
    && !this.rootNode.contains(event.target)) {
      onClose(event)
    }
  }

  _refRootNode = n => this.rootNode = n

  render(){
    const {
      style,
      children
    } = this.props;
    return (
      <div
        style={style}
        ref={this._refRootNode}
      >
        {children}
      </div>
    );
  }
}

export default ModalPane
