
const isArrEmpty = (arr) => {
  return !Array.isArray(arr) || arr.length === 0
    ? true
    : false;
};

export default isArrEmpty
