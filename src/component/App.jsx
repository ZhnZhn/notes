import React, { Component } from 'react'
import {
  BrowserRouter,
  Switch, Route, Redirect
} from 'react-router-dom'

import ThemeContext from './hoc/ThemeContext'
import initialTheme from './style/theme'

import { sApp } from '../flux/selectors'

import PageBoard from './page-board/PageBoard'
import PageBoards from './page-boards/PageBoards'
import WrapperContainer from './zhn-cont/WrapperContainer'

class App extends Component {

  constructor(props){
    super()
    const { store } = props
    , uiTheme = sApp.uiTheme(store.getState());

    initialTheme.setThemeName(uiTheme)

    this.state = {
      theme: initialTheme
    }
  }

  componentDidMount(){
    const { store } = this.props;
    this._unsubscribe = store.subscribe(this._onStore)
  }
  componentWillUnmount(){
    this._unsubscribe()
  }
  _onStore = () => {
    const { store } = this.props
    , { theme } = this.state
    , uiTheme = sApp.uiTheme(store.getState());
    if ( uiTheme !== theme.getThemeName()) {
      this.setState(prevState => {
         prevState.theme.setThemeName(uiTheme)
         return {
           theme: {...prevState.theme}
         };
      })
    }
  }

  render(){
    const {
      basename,
      store
    } = this.props
    , { theme } = this.state;
    return (
      <BrowserRouter basename={basename}>
        <ThemeContext.Provider value={theme}>
          <React.StrictMode>
            <WrapperContainer store={store} />
            <Switch>
              <Route path="/boards/:id" component={PageBoard} />
              <Route path="/boards" component={PageBoards} />
              <Redirect from="/" to="/boards" />
            </Switch>
          </React.StrictMode>
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App
