import { ACTION as NA } from '../note/actions'
import initialState from '../initialState'

const reducer = function(
  state = initialState.noteLabel,
  action
) {
  switch(action.type){
    case NA.EDIT_NOTE_LABELS: {
      const { newLabels } = action;
      newLabels.forEach(item => {
        state[item.id] = item
      })
      return { ...state };
    }
    default: return state;
  }
}

export default reducer
