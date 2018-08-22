import React, { Component } from 'react'

import ModalDialog from '../zhn-ch/ModalDialog'

const CL = {
  ROW: 'd-notif__row',
  CAPTION: 'd-notif__caption',
  DESCR: 'd-notif__descr'
};

class NotificationDialog extends Component {

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps !== this.props && nextProps.isShow === this.props.isShow) {
      return false;
    }
    return true;
  }

  render(){
    const { isShow, data={}, onClose } = this.props
        , { caption='', descr='' } = data;
    return (
      <ModalDialog
        caption="Notification"
        isShow={isShow}
        onClose={onClose}
      >
         { caption &&
           <div className={CL.ROW}>
              <p className={CL.CAPTION}>
                {caption}
              </p>
           </div>
         }
         <div className={CL.ROW}>
            <p className={CL.DESCR}>
              {descr}
            </p>
         </div>
      </ModalDialog>
    );
  }
}

export default NotificationDialog
