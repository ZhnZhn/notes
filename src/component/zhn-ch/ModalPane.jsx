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

  _isEventTargetOutside = (event) => this.rootNode
     && this.rootNode.contains
     && !this.rootNode.contains(event.target)

  _hClickOutside = (event) => {
    const { onClose } = this.props;
    if (this._isEventTargetOutside(event)) {
      event.stopPropagation()
      onClose(event)
    }
  }

  _addOutsideListener = () => {
    document.addEventListener('click', this._hClickOutside, true)
  }
  _removeOutsideListener = () => {
    document.removeEventListener('click', this._hClickOutside, true)
  }

  _initShowMode = () => {
    this._addOutsideListener()
    if (this.rootNode) {
      this.rootNode.focus()
    }
  }

  componentDidMount() {
    if (this.props.isShow) {
      this._initShowMode()
    }
  }
  componentWillUnmount() {
    this._removeOutsideListener()
  }


  componentDidUpdate(prevProps) {
    if (this.props !== prevProps ){
      if (this.props.isShow){
        this._initShowMode()
      } else {
        this._removeOutsideListener()
      }
    }
  }

  _hKeyDown = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault()
      this.props.onClose(evt)
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
        tabIndex="0"
        //role="dialog"
        //aria-modal={true}
        onKeyDown={this._hKeyDown}
      >
        {children}
      </div>
    );
  }
}

export default ModalPane
