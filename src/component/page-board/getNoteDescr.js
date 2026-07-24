import { isObj } from '../../utils/isTypeFn';

const getNodeDescr = (
  note
) => isObj(note)
  ? note.descr || 'Edit description...'
  : 'This note is not exist.';

export default getNodeDescr
