import { connect } from '../uiApi';
import { sBoard } from '../../flux/selectors';

import BoardCard from './BoardCard';

const BoardList = ({
  boardIds,
  boards
}) => boardIds.map(id => (
  <BoardCard
    key={id}
    id={id}
  />
));


const mapStateToProps = state => ({
  boardIds: sBoard.boardIds(state),
  boards: sBoard.boards(state)
});

export default connect(
  mapStateToProps
)(BoardList)
