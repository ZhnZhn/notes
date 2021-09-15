import { editNoteTitle } from '../note/reducer';

const _isEmpty = str => typeof str !== 'string'
   || !str.trim();

const noteTitleValidation = store => next => action => {
  if (action.type === editNoteTitle.type
      && _isEmpty(action.payload.title)) {
    console.log('New Note Title')    
    action.payload.title = 'New Note'
    next(action)
    return false;
  }
  return next(action);
};

export default noteTitleValidation
