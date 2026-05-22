import { safeMap } from '../uiApi';
import TopicItem from './TopicItem';

const S_UL = { listStyleType: 'none' }
, S_LI = { position: 'relative' }
, FN_NOOP = () => {};

const TopicList = ({
  board,
  columns,
  toggleColumn=FN_NOOP
}) => {
  const { columnIds } = board;
  return (
    <ul style={S_UL}>
      {safeMap(columnIds, cId => (
        <li style={S_LI} key={cId}>
          <TopicItem
            topic={columns[cId]}
            onClick={() => toggleColumn(cId)}
          />
        </li>
      ))}
    </ul>
  );
}

export default TopicList
