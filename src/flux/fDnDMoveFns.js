// @flow
import fIdsTo from './fIdsTo'

const _crMoveInternal = (propName, idsTo) => (
  state /*: {} */,
  id /*: string */,
  source /*: { index: number } */,
  destination /*: { index: number } */,
  from /*: { id: string } */
) => {
  const newIds = [...from[propName]];
  newIds.splice(source.index, 1)
  newIds.splice(destination.index, 0, id)
  state[from.id] = idsTo(from, newIds)
};

const _crMoveExternal = (propName, idsTo) => (
  state /*: {} */,
  id /*: string */,
  source /*: { index: number } */,
  destination /*: { index: number } */,
  from /*: { id: string } */,
  to /*: { id: string } */
) /*: {} */ => {
  const newFromIds = [...from[propName]];
  newFromIds.splice(source.index, 1)
  const newToIds = [...to[propName]];
  newToIds.splice(destination.index, 0, id)
  state[from.id] = idsTo(from, newFromIds)
  state[to.id] = idsTo(to, newToIds)
};


const fDnDMoveFns = (
  propName /*: string */
) /*: {} */ => {
  const _idsTo = fIdsTo(propName);
  return {
    idsTo: _idsTo,
    moveInternal: _crMoveInternal(propName, _idsTo),
    moveExternal: _crMoveExternal(propName, _idsTo)
  };
};

export default fDnDMoveFns
