
import Notification from './NotificationDialog'
import Settings from './SettingsDialog'

export const MD = {
  NOTIF: 'NOTIF',
  SETTINGS: 'SETTINGS'
};

const _r = {
  DF: Notification,
  [MD.NOTIF]: Notification,
  [MD.SETTINGS]: Settings
}

const modalRouter = {
  getDialog(type) {
    return _r[type] || _r.DF;
  }
};

export default modalRouter
