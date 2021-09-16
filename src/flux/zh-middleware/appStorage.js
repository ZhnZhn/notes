import { saveBoard, cleanStorage } from '../app/actions'
import { addDrawerMsg } from '../drawerMsg/reducer'
import CONF from '../appConf'

const appStorage = ({ getState, dispatch }) => next => action => {
  switch(action.type){
    case saveBoard.type: {
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
          addDrawerMsg({ msg: CONF.MSG_SAVED })
        )
        return true;
      } catch(e) {
        dispatch(
          addDrawerMsg({ msg: CONF.MSG_SAVE_FAIL })
        )
        console.log(e.msg)
        return false;
      }
    }
    case cleanStorage.type: {
      try {
        window.localStorage.removeItem(CONF.STORAGE_KEY)
        dispatch(
          addDrawerMsg({ msg: CONF.MSG_CLEANED })
        )
        return true;
      } catch(e){
        dispatch(
          addDrawerMsg({ msg: CONF.MSG_CLEAN_FAIL })
        )
        console.log(e.msg)
        return false;
      }
    }
    default: return next(action);
  }
};

export default appStorage
