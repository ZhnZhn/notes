import {
  isArr,
  isObj
} from '../../utils/isTypeFn';
import {
  joinByBlank,
  joinByColon
} from '../../utils/arrFn';

// @flow

const _crTitle = (
  board /*: Board */
) => {
  const columnIds = board.columnIds;
  return joinByBlank(
    board.title || '',
    isArr(columnIds)
       ? '' + columnIds.length
       : '0'
  );
};

const crTitle = (
  board /*: ?Board */,
  prefix /*: string */
) /*: string */ => joinByColon(
  prefix || 'Notes',
  isObj()
    ? _crTitle(board)
    : 'Not Exist'
);

export default crTitle
