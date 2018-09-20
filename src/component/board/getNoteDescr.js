
const getNodeDescr = (note) => {
  if ( typeof note !== 'object' || note == null ) {
    return 'This note is not exist.';
  }
  return note.descr || 'Edit description...';
};

export default getNodeDescr
