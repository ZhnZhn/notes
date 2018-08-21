import { ACTION } from '../drawerMsg/actions'
import crId from './crId'
import CONF from '../appConf'

const drawerMsgMiddleware = store => next => action => {
  if (action.type === ACTION.ADD_DRAWER_MSG) {
    action = {
      ...action,
      id: crId(CONF.DMSG_PREFIX)
    }
  }
  return next(action);
}

export default drawerMsgMiddleware
