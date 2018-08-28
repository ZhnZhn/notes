import { ACTION } from '../app/actions'
import dma from '../drawerMsg/actions'
import CONF from '../appConf'

const appStorage = ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case ACTION.SAVE_BOARD: {
      try {
        window.localStorage.setItem(
          CONF.STORAGE_KEY,
          JSON.stringify({
            ...getState(),
            drawerMsg: [],
            modal: { id: null, data: null }
          })
        )
        dispatch(
          dma.addDrawerMsg(CONF.MSG_SAVED)
        )
        return true;
      } catch(e) {
        dispatch(
          dma.addDrawerMsg(CONF.MSG_SAVE_FAIL)
        )
        console.log(e.msg)
        return false;
      }
    }
    case ACTION.CLEAN_STORAGE: {
      try {
        window.localStorage.removeItem(CONF.STORAGE_KEY)
        dispatch(
          dma.addDrawerMsg(CONF.MSG_CLEANED)
        )
        return true;
      } catch(e){
        dispatch(
          dma.addDrawerMsg(CONF.MSG_CLEAN_FAIL)
        )
        console.log(e.msg)
        return false;
      }
    }
    default: return next(action);
  }
};

export default appStorage
