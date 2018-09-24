
import Notification from './NotificationDialog'
import Settings from './SettingsDialog'
import Details from '../d-details/DetailsDialog'

export const MD = {
  NOTIF: 'NOTIF',
  SETTINGS: 'SETTINGS',
  DETAILS: 'DETAILS'
};

const _r = {
  DF: Notification,
  [MD.NOTIF]: Notification,
  [MD.SETTINGS]: Settings,
  [MD.DETAILS]: Details
}

const modalRouter = {
  getDialog(type) {
    return _r[type] || _r.DF;
  }
};

export default modalRouter
