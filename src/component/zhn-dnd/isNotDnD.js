
const isNotDnD = (result) => {
  if (!result || typeof result !== 'object') {
    return false;
  }
  const { destination, source } = result;
  return !destination || !source || (
    destination.droppableId === source.droppableId
    && destination.index === source.index
  )
};

export default isNotDnD
