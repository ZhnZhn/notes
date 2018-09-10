
const crTitle = (board, prefix='Notes') => {
  if (typeof board !== 'object') {
    return `${prefix}: Not Exist`;
  }
  const title = board.title || ''
  , count = Array.isArray(board.columnIds)
     ? board.columnIds.length
     : 0;
  return `${prefix}: ${title} (${count})`;
}

export default crTitle
