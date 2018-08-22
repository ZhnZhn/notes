
import Notification from './NotificationDialog'

export const MD = {
  NOTIF: 'NOTIF'
};

const _r = {
  DF: Notification,
  [MD.NOTIF]: Notification
}

const modalRouter = {
  getDialog(type) {
    return _r[type] || _r.DF;
  }
};

export default modalRouter
