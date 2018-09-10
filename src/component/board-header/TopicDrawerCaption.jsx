import React from 'react'

import CL from './CL'
import crTitle from './crTitle'

const TOPICS = 'Topics';

const TopicDrawerCaption = ({ board }) => (
  <div className={CL.DRAWER_TITLE}>
    {crTitle(board, TOPICS)}
  </div>
);

export default TopicDrawerCaption
