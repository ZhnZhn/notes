import React, { Component } from 'react';
//import PropTypes from 'prop-types'

const CL = {
  INIT: 'modal-root',
  SHOWING: 'modal-root show-modal',
  HIDING: 'modal-root hide-modal'
};

const S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  },
  HIDE_BACKGROUND : {
    backgroundColor: 'rgba(0,0,0, 0)'
  }
}

class WrapperModalDialog extends Component {
  /*
  static propTypes = {
    isShow: PropTypes.bool,
    timeout: PropTypes.number,
    onClose: PropTypes.func
  }
  */
  static defaultProps = {
    timeout: 450
  }

  constructor(props){
    super();
    this.wasClosing = true;
  }

  shouldComponentUpdate(nextProps, nextState){
    if (!this.wasClosing
      && !nextProps.isShow
      && !this.props.isShow) {
      return false;
    }
    return true;
  }

  componentDidUpdate(prevProps, prevState){
    if (prevProps.isShow && !this.props.isShow) {
      setTimeout(
        this._hideModal,
        this.props.timeout
      )
    }
  }

  _hideModal = () => {
    this.wasClosing = true
    this.setState({})
  }

  render(){
    const { isShow, children, onClose } = this.props;
    let _className, _style, _isHidden;
    if (!isShow && this.wasClosing){
       _className = CL.INIT;
       _style = S.HIDE;
       _isHidden = true;
       this.wasClosing = false;
    } else {
      _className = isShow
          ? CL.SHOWING
          : CL.HIDING;
      _style = isShow
          ? S.SHOW
          : S.HIDE_BACKGROUND;
      _isHidden = false
    }
    return (
      <div
        className={_className}
        style={_style}
        aria-hidden={_isHidden}
        onClick={onClose}
      >
        {children}
      </div>
    );
  }
}

export default WrapperModalDialog
