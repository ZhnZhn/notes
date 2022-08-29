// @flow

const _isArr = Array.isArray;

const _crTitle = (
  board /*: ?Board */
) => {
  const title = board.title || ''
  , { columnIds } = board
  , count = _isArr(columnIds)
     ? columnIds.length
     : 0;
  return `${title} (${count})`;
};

const crTitle = (
  board /*: ?Board */,
  prefix /*: string */
) /*: string */ => {  
  const _title = board == null
    ? 'Not Exist'
    : _crTitle(board);

  return `${prefix || 'Notes'}: ${_title}`;
}

export default crTitle
