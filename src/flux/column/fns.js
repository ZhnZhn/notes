// @flow
import fDnDMoveFns from '../fDnDMoveFns'

const crColumn = (
  columnId /*: string */,
  withAdd /*: boolean */ = true
) /*: Topic */ => ({
  id: columnId,
  title: 'New Topic',
  noteIds: [],
  withAdd: withAdd
});

const {
  moveInternal,
  moveExternal
} = fDnDMoveFns('noteIds');

export default {
  crColumn,
  moveExternal,
  moveInternal
}
