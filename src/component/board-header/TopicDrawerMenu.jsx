import React from 'react'

import { connect } from 'react-redux'
import s from '../../flux/selectors'
import ca from '../../flux/column/actions'

import CL from './CL'
import TopicDrawerCaption from './TopicDrawerCaption'
import TopicList from './TopicList'
import DrawerMsgList from '../header/DrawerMsgList'

/*
const S = {
  HEADER: {
    marginLeft: 16,
    paddingTop: 16,
    paddingBottom: 8
  }
};
*/

/*
const MenuHeader = ({ board }) => (
  <div
    className={CL.HEADER}
    style={S.HEADER}
  >
    {`Topics: ${board.title}`}
  </div>
);
*/

const TopicDrawerMenu = ({
  board,
  columns,
  toggleColumn
}) => (
  <div className={CL.ROOT}>
    <TopicDrawerCaption
      board={board}
    />
    <TopicList
      board={board}
      columns={columns}
      toggleColumn={toggleColumn}
    />
    <DrawerMsgList />
  </div>
);

const mapStateToProps = state => ({
  board: s.board.currentBoard(state),
  columns: s.column.columns(state)
});

const mapDispatchToProps = {
  toggleColumn: ca.toggleColumn
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicDrawerMenu)
