import { memo } from 'react'

import ModalDialog from '../zhn-ch/ModalDialog'

const CL = {
  ROW: 'd-notif__row',
  CAPTION: 'd-notif__caption',
  DESCR: 'd-notif__descr'
};

const NotificationDialog = ({
  isShow,
  data={},
  TS,
  onClose
}) => {
   const {
      caption='',
      descr=''
   } = data;

    return (
      <ModalDialog
        style={TS.DIALOG}
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

const _areEqualProps = (prevProps, nextProps) =>
  prevProps.isShow === nextProps.isShow

export default memo(NotificationDialog, _areEqualProps)
