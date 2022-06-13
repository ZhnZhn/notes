import { CL_DRAWER_TITLE } from './CL'
import crTitle from './crTitle'

// @flow

const TOPICS = 'Topics';

const TopicDrawerCaption = ({ board /*: ?Board */ }) => (
  <div className={CL_DRAWER_TITLE}>
    {crTitle(board, TOPICS)}
  </div>
);

export default TopicDrawerCaption
