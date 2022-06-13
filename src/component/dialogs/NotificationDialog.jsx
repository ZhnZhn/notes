import memoIsShow from '../hoc/memoIsShow';

import ModalDialog from '../zhn-ch/ModalDialog';

const CL_ROW = 'd-notif__row'
, CL_CAPTION = 'd-notif__caption'
, CL_DESCR = 'd-notif__descr';

const NotificationDialog = memoIsShow(({
  isShow,
  data,
  TS,
  onClose
}) => {
   const {
      caption='',
      descr=''
   } = data || {};

    return (
      <ModalDialog
        style={TS.DIALOG}
        caption="Notification"
        isShow={isShow}
        onClose={onClose}
      >
         { caption &&
           <div className={CL_ROW}>
              <p className={CL_CAPTION}>
                {caption}
              </p>
           </div>
         }
         <div className={CL_ROW}>
            <p className={CL_DESCR}>
              {descr}
            </p>
         </div>
      </ModalDialog>
    );
})

export default NotificationDialog
