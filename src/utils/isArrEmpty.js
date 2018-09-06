// @flow
const isArrEmpty = (arr /*: mixed*/) /*: boolean*/ => {
  return !Array.isArray(arr) || arr.length === 0
    ? true
    : false;
};

export default isArrEmpty
