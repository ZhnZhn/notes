// @flow

const filterBy = (
  arr /*: Array<string | number>*/,
  id /*: string | number*/
) /*: Array<string | number>*/ => Array
 .isArray(arr)
   ? arr.filter(str => str !== id)
   : arr;

const filterByProp = (
  arr /*: Array<{}>*/,
  prValue /*: mixed*/,
  prName /*: string*/='id'
) /*: Array<{}>*/ => Array
  .isArray(arr)
    ? arr.filter(obj => obj[prName] !== prValue)
    : arr;

const removeProp = (
  obj /*: {}*/,
  key /*: string*/
) /*: {}*/ => {
  const _r = {};
  Object.keys(obj).forEach(k => {
    if (k !== key) {
      _r[k] = obj[k]
    }
  })
  return _r;
};

export default {
  filterBy,
  filterByProp,
  removeProp
}
