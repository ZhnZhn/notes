
const filterBy = (arr, id) => Array
 .isArray(arr)
   ? arr.filter(str => str !== id)
   : arr;

const removeProp = (obj, key) => {
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
  removeProp
}
