import fns from '../reducerFns'

// @flow

const { filterByProp } = fns;

const crMsg = (
  id /*: string */,
  msg /*: string */
) /*: DrawerMsg */ => ({
  id,
  msg
});

export default {
  crMsg,
  filterByProp
}
