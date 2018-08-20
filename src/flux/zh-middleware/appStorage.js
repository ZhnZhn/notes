import { ACTION } from '../app/actions'
import CONF from '../appConf'

const appStorage = store => next => action => {
  switch(action.type){
    case ACTION.SAVE_BOARD: {
      try {
        window.localStorage.setItem(
          CONF.STORAGE_KEY,
          JSON.stringify(store.getState())
        )
        return true;
      } catch(e) {
        console.log(e.msg)
        return false;
      }
    }
    case ACTION.CLEAN_STORAGE: {
      try {
        window.localStorage.removeItem(CONF.STORAGE_KEY)
        return true;
      } catch(e){
        console.log(e.msg)
        return false;
      }
    }
    default: return next(action)
  }
};

export default appStorage
