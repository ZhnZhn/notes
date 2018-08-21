import fns from '../reducerFns'

const { filterByProp } = fns;

const crMsg = (id, msg) => ({
  id,
  msg
});

export default {
  crMsg,
  filterByProp
}
