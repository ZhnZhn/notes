//@flow
const _getObjetcKeys = Object.keys;

const crArrFormHm = (
  hm /*: {}*/
) /*: []*/ => _getObjetcKeys(hm)
  .map(key => hm[key]);

export default crArrFormHm
