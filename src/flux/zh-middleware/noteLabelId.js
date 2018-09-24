import { ACTION as NA } from '../note/actions'
import { sNoteLabel } from '../selectors'
import hmToArr from '../../utils/hmToArr'
import crId from './crId'
import CONF from '../appConf'

const _fIsLabel = (item) => _ =>
  _.title === item.title
  && _.color === item.color;

const _crLabels = (hmLabel, labels) => {
   const labelsTo = []
      , newLabels = [];

   if (!hmLabel
     || typeof hmLabel !== 'object'
     || !Array.isArray(labels)) {
     return { labelsTo, newLabels };
   }

   const _arrLabels = hmToArr(hmLabel);
   labels.forEach(item => {
      if (item.id) {
        labelsTo.push(item)
      } else {
        const _label = _arrLabels
          .find(_fIsLabel(item));
        if (!_label) {
          item.id = crId(CONF.NLABELS_PREFIX)
          labelsTo.push(item)
          newLabels.push(item)
        } else {
          item.id = _label.id
          labelsTo.push(item)
        }
      }
   })
   return {
     labelsTo,
     newLabels
   };
};

const noteLabelIdMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type === NA.EDIT_NOTE_LABELS) {
    const hmLabels = sNoteLabel.labels(getState());    
    action = {
      ...action,
      ..._crLabels(hmLabels, action.labels)
    }
  }
  return next(action);
}

export default noteLabelIdMiddleware
