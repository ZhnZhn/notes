import { ACTION } from './actions'
import initState from '../initialState'
import fns from './fns'

const {
  crMsg,
  filterByProp
} = fns;

const reducer = function(state=initState.drawerMsg, action){
  switch(action.type){
    case ACTION.ADD_DRAWER_MSG: {
      const { id, msg } = action;
      return [
        crMsg(id, msg),
        ...state
      ];
    }
    case ACTION.REMOVE_DRAWER_MSG: {
      const { id } = action;
      return filterByProp(state, id);
    }
    default: return state;
  }
}

export default reducer
