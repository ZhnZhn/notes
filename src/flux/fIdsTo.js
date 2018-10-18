
const fIdsTo = (propName /*: string */) => (
  state /*: {} */,
  ids /*: Array<string> */) => ({
  ...state,
  [propName]: ids
});

export default fIdsTo
