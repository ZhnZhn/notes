// @flow

const filterBy = /*:: <T: string | number> */(
  arr /*: Array<T> */,
  id /*: T */
) /*: Array<T> */ => Array
 .isArray(arr)
   ? arr.filter(str => str !== id)
   : arr;

const filterByProp = (
  arr /*: Array<{}> */,
  prValue /*: mixed */,
  prName /*: string */='id'
) /*: Array<{}>*/ => Array
  .isArray(arr)
    ? arr.filter(obj => obj[prName] !== prValue)
    : arr;

const removeProp = (
  obj /*: {} */,
  key /*: string */
) /*: {} */ => {
  const _r = {};
  Object.keys(obj).forEach(k => {
    if (k !== key) {
      _r[k] = obj[k]
    }
  })
  return _r;
};

const setInObj = (
  state /*: {} */,
  key /*: string */,
  obj /*: {} */,
) /*: {} */ => ({
  ...state,
  [key]: obj
});

export default {
  filterBy,
  filterByProp,
  removeProp,
  setInObj
}
