import { Component } from '../uiApi';

import crCn from '../zhn-utils/crCn'
//import PropTypes from 'prop-types'

const CL_MODAL_ROOT = 'modal-root'
, CL_SHOW_MODAL = 'show-modal'
, CL_HIDE_MODAL = 'hide-modal'

, S_SHOW = { display: 'block' }
, S_HIDE = { display: 'none' }
, S_HIDE_BACKGROUND = { backgroundColor: 'rgba(0,0,0, 0)' };

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

  wasClosing = true


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
    const {
      isShow,
      children,
      onClose
    } = this.props;
    let _className, _style, _isHidden;
    if (!isShow && this.wasClosing){
       _className = CL_MODAL_ROOT;
       _style = S_HIDE;
       _isHidden = true;
       this.wasClosing = false;
    } else {
      _className = crCn(
        CL_MODAL_ROOT,
        isShow ? CL_SHOW_MODAL : CL_HIDE_MODAL
      )
      _style = isShow
          ? S_SHOW
          : S_HIDE_BACKGROUND;
      _isHidden = false
    }

    return (
      <div
        role="presentation"
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
