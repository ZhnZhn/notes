import React from 'react'

import TopicItem from './TopicItem'

const S = {
  UL: {
    listStyleType: 'none'
  }
};

const _renderTopics = ({
  board,
  columns,
  toggleColumn
}) => {
  const { columnIds=[] } = board;
  return columnIds.map(cId => (
    <TopicItem
      key={cId}
      topic={columns[cId]}
      onClick={toggleColumn.bind(null, cId)}
    />
  ));
}

const TopicList = (props) => (
  <ul style={S.UL}>
    {_renderTopics(props)}
  </ul>
);

TopicList.defaultProps = {
  toggleColumn: () => {}
}

export default TopicList
