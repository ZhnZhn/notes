//@flow
const hmToArr = (
  hm /*: {}*/
) /*: []*/ => Object.keys(hm)
  .map(key => hm[key]);

export default hmToArr
