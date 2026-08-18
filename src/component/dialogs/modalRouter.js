
import { crObjHm } from '../../utils/objFn';

import Notification from './NotificationDialog'
import Settings from './SettingsDialog'
import Details from '../d-details/DetailsDialog'

export const MD_NOTIF = 'NOTIF'
export const MD_SETTINGS = 'SETTINGS'
export const MD_DETAILS = 'DETAILS'

const _r = crObjHm({
  DF: Notification,
  [MD_NOTIF]: Notification,
  [MD_SETTINGS]: Settings,
  [MD_DETAILS]: Details
})

export const getModalDialog = (
  type
) => _r[type] || _r.DF
