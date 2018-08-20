import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch, Route, Redirect
} from 'react-router-dom'

import PageBoard from './board/PageBoard'
import PageBoards from './boards/PageBoards'

class App extends Component {

  render(){
    const { basename } = this.props;
    return (
      <BrowserRouter basename={basename}>
        <Switch>
          <Route path="/boards/:id" component={PageBoard} />
          <Route path="/boards" component={PageBoards} />
          <Redirect from="/" to="/boards" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
