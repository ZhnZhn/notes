import React, { Component } from 'react'
//import { PropTypes } from 'react'

import DialogCaption from './DialogCaption'
import FlatButton from '../zhn-m/FlatButton'

const CL = {
  DIALOG: 'modal-dialog',
  ACTIONS: 'md__actions',
  SHOWING: 'show-popup',
  HIDING: 'hide-popup'
};

const S = {
  SHOW: {
    display: 'block'
  },
  HIDE: {
    display: 'none'
  },
  HIDE_POPUP: {
    opacity: 0,
    transform: 'scaleY(0)'
  },
};

class ModalDialog extends Component {
  /*
   static propTypes = {
     style: PropTypes.object,
     caption: PropTypes.string,
     isShow: PropTypes.bool,
     isWithButton: PropTypes.bool,
     isNotUpdate: PropTypes.bool,
     withoutClose: PropTypes.bool,
     isFocusClose: PropTypes.bool,
     commandButtons: PropTypes.arrayOf(PropTypes.element),
     timeout: PropTypes.number,
     onClose: PropTypes.func
   }
   */
   static defaultProps = {
     className: '',
     isWithButton: true,
     isNotUpdate: false,
     isFocusClose: true,
     timeout: 450
   }

   constructor(props){
     super()
     this.wasClosing = false
   }

   shouldComponentUpdate(nextProps, nextState){
     if (nextProps !== this.props){
       if (nextProps.isNotUpdate){
         return false;
       }
     }
     return true;
   }

   focusBtClose(){
     if (this.props.isFocusClose && this._btClose) {
       this._btClose.focus()
     }
   }

   componentDidMount(){
     this.focusBtClose()
   }

   componentDidUpdate(prevProps, prevState){
    const { timeout, isShow } = this.props
     if (this.wasClosing){
       setTimeout(
         () => { this.setState({}) },
         timeout
       )
     }
     if (prevProps.isShow === false && isShow) {
       this.focusBtClose()
     }
   }


  _hClickDialog = (event) => {
     event.stopPropagation()
   }

  _refBtClose = n => this._btClose = n

  _renderCommandButton = () => {
    const {
            commandButtons,
            withoutClose,
            onClose
          } = this.props;
    return (
      <div className={CL.ACTIONS}>
        {commandButtons}
        { !withoutClose &&
           <FlatButton
             ref={this._refBtClose}
             caption="Close"
             timeout={0}
             onClick={onClose}
           />
        }
      </div>
    );
  }

  render(){
    const {
            className,
            style,
            isShow, isWithButton,
            caption, captionStyle,
            children,
            onClose
          } = this.props;

    let _className, _style;

    if (this.wasClosing){
      _style = S.HIDE
      this.wasClosing = false
    } else {
      _className = isShow
          ? `${CL.DIALOG} ${className} ${CL.SHOWING}`
          : `${CL.DIALOG} ${className} ${CL.HIDING}`
      _style = isShow
          ? S.SHOW
          : S.HIDE_POPUP
      if (!isShow){
        this.wasClosing = true
      }
    }

    return (
         <div
            role="dialog"
            className={_className}
            style={{...style, ..._style}}
            onClick={this._hClickDialog}
         >
            <DialogCaption
               rootStyle={captionStyle}
               caption={caption}
               onClose={onClose}
            />
            <div>
              {children}
            </div>
            { isWithButton && this._renderCommandButton() }
        </div>
    );
  }
}

export default ModalDialog
