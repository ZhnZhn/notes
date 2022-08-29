// @flow
const _isArr = Array.isArray;

const isArrEmpty = (
  arr /*: mixed*/
) /*: boolean*/ => !_isArr(arr)
  || arr.length === 0;

export default isArrEmpty
