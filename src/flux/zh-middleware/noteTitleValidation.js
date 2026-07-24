import { isStr } from '../../utils/isTypeFn';
import { editNoteTitle } from '../note/reducer';

const _isEmpty = str => !isStr(str)
   || !str.trim();

const noteTitleValidation = () => next => action => {
  if (action.type === editNoteTitle.type
      && _isEmpty(action.payload.title)) {
    action.payload.title = 'New Note'
    next(action)
    return false;
  }
  return next(action);
};

export default noteTitleValidation
