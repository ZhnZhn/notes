import { editNoteLabels } from '../note/actions';
import { sNoteLabel } from '../selectors';
import crArrFormHm from '../../utils/crArrFromHm';
import crId from './crId';
import CONF from '../appConf';

const _isArr = Array.isArray
, _isObj = v => v && typeof v === 'object';

const _fIsLabel = (item) => _ =>
  _.title === item.title
  && _.color === item.color;

const _crLabels = (
  hmLabel,
  labels
) => {
   const labelsTo = []
   , newLabels = [];

   if (!_isObj(hmLabel) || !_isArr(labels)) {
     return {
       labelsTo,
       newLabels
     };
   }

   const _arrLabels = crArrFormHm(hmLabel);
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

const noteLabelIdMiddleware = ({
  getState,
  dispatch
}) => next => action => {
  if (action.type === editNoteLabels.type) {
    const hmLabels = sNoteLabel.labels(getState())
    , { payload } = action;
    action.payload = {
      ...payload,
      ..._crLabels(hmLabels, payload.labels)
    }
  }
  return next(action);
}

export default noteLabelIdMiddleware
