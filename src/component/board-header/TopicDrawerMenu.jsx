import { connect } from 'react-redux';
import s from '../../flux/selectors';
import { toggleColumn } from '../../flux/column/reducer';

import { CL_DRAWER_LIST } from './CL';
import TopicDrawerCaption from './TopicDrawerCaption';
import TopicList from './TopicList';
import DrawerMsgList from '../header/DrawerMsgList';

const TopicDrawerMenu = ({
  board,
  columns,
  toggleColumn
}) => (
  <div className={CL_DRAWER_LIST}>
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
  toggleColumn
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicDrawerMenu)
