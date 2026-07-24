import { isObj } from '../../utils/isTypeFn';

const isNotDnD = (result) => {
  if (!isObj(result)) {
    return false;
  }
  const { destination, source } = result;
  return !destination || !source || (
    destination.droppableId === source.droppableId
    && destination.index === source.index
  )
};

export default isNotDnD
