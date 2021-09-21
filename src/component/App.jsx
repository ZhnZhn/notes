import { StrictMode, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Switch, Route, Redirect
} from 'react-router-dom';

import ThemeContext from './hoc/ThemeContext';
import initialTheme from './style/theme';

import { sApp } from '../flux/selectors';

import PageBoard from './page-board/PageBoard';
import PageBoards from './page-boards/PageBoards';
import WrapperContainer from './zhn-cont/WrapperContainer';

const App = ({
  basename,
  store
}) => {
  const [theme, setTheme] = useState(initialTheme)
  , uiTheme = useSelector(sApp.uiTheme);

  /*eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (theme.getThemeName !== uiTheme) {
       theme.setThemeName(uiTheme)
       setTheme({...theme})
    }
  }, [uiTheme])
  //theme
  /*eslint-enable react-hooks/exhaustive-deps */

  return (
    <StrictMode>
      <BrowserRouter basename={basename}>
        <ThemeContext.Provider value={theme}>
          <WrapperContainer store={store} />
          <Switch>
            <Route path="/boards/:id" component={PageBoard} />
            <Route path="/boards" component={PageBoards} />
            <Redirect from="/" to="/boards" />
          </Switch>
        </ThemeContext.Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App
