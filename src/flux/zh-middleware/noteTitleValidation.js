import { ACTION } from '../note/actions'

const _isEmpty = str => typeof str !== 'string'
   || !str.trim();

const noteTitleValidation = store => next => action => {
  if (action.type === ACTION.EDIT_NOTE_TITLE
      && _isEmpty(action.title)) {
    next({...action, title: 'New Note'})
    return false;
  }
  return next(action);
};

export default noteTitleValidation
