import TopicItem from './TopicItem'

const S = {
  UL: {
    listStyleType: 'none'
  }
};

const _fnNoop = () => {};

const _renderTopics = ({
  board,
  columns,
  toggleColumn=_fnNoop
}) => {
  const { columnIds } = board;
  return (columnIds || []).map(cId => (
    <TopicItem
      key={cId}
      topic={columns[cId]}
      onClick={() => toggleColumn({ columnId: cId })}
    />
  ));
}

const TopicList = (props) => (
  <ul style={S.UL}>
    {_renderTopics(props)}
  </ul>
);

export default TopicList
