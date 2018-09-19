
const getNodeDescr = (note) => {
  if ( typeof note !== 'object' || note == null ) {
    return '';
  }
  return note.descr || note.title || '';
};

export default getNodeDescr
