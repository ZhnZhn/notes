import { ACTION } from './actions'
import initialState from '../initialState'

/*
const initState = {
 id: null
 data: null
}
*/

const reducer = function(state=initialState.modal, action) {
  switch(action.type){
    case ACTION.SHOW_MODAL: {
      const { id, data } = action;
      return  {
        ...state,
        id,
        data
      };
    }
    default: return state;
  }
};

export default reducer
