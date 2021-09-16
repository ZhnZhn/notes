import { addDrawerMsg } from '../drawerMsg/reducer'
import crId from './crId'
import CONF from '../appConf'

const _formatTime = n => n < 10 ? `0${n}` : `${n}`;
const _crMsg = msg => {
  const d = new Date();
  return `${_formatTime(d.getHours())}:${_formatTime(d.getMinutes())} ${msg}`;
};

const drawerMsgMiddleware = store => next => action => {
  if (action.type === addDrawerMsg.type) {
    const { payload } = action
    , id = crId(CONF.DMSG_PREFIX);
    payload.id = id
    payload.msg = _crMsg(payload.msg)
    next(action)
    return id;
  }
  return next(action);
}

export default drawerMsgMiddleware
