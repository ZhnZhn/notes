import CL from './CL'
import crTitle from './crTitle'

// @flow

const TOPICS = 'Topics';

const TopicDrawerCaption = ({ board /*: ?Board */ }) => (
  <div className={CL.DRAWER_TITLE}>
    {crTitle(board, TOPICS)}
  </div>
);

export default TopicDrawerCaption
