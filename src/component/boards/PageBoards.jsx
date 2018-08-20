import React from 'react'

import Header from './Header'
import Main from '../zhn-ch/Main'
import BoardList from './BoardList'

const PageBoards = () => [
  <Header />,
  <Main>
    <BoardList />
  </Main>  
];

export default PageBoards
