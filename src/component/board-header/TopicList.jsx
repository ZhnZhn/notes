import TopicItem from './TopicItem';

const S_UL = { listStyleType: 'none' }
, S_LI = { position: 'relative' };

const _fnNoop = () => {};

const _renderTopics = ({
  board,
  columns,
  toggleColumn=_fnNoop
}) => {
  const { columnIds } = board;
  return (columnIds || []).map(cId => (
    <li style={S_LI}>
      <TopicItem
        key={cId}
        topic={columns[cId]}
        onClick={() => toggleColumn({ columnId: cId })}
      />
    </li>
  ));
}

const TopicList = (props) => (
  <ul style={S_UL}>
    {_renderTopics(props)}
  </ul>
);

export default TopicList
