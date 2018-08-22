import React, { Component, Fragment } from 'react'
import {
  BrowserRouter,
  Switch, Route, Redirect
} from 'react-router-dom'

import PageBoard from './board/PageBoard'
import PageBoards from './boards/PageBoards'
import WrapperContainer from './zhn-cont/WrapperContainer'

class App extends Component {

  render(){
    const { basename, store } = this.props;
    return (
      <BrowserRouter basename={basename}>
        <Fragment>
          <WrapperContainer store={store} />
          <Switch>
            <Route path="/boards/:id" component={PageBoard} />
            <Route path="/boards" component={PageBoards} />
            <Redirect from="/" to="/boards" />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App
