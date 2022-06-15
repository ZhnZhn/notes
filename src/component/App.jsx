import {
  StrictMode,
  useState,
  useEffect
} from './uiApi';

import { useSelector } from 'react-redux';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
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
  const [
    theme,
    setTheme
  ] = useState(initialTheme)
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
          <Routes>
            <Route path="/boards/:id" element={<PageBoard />} />
            <Route path="/boards" element={<PageBoards />} />
            <Route path="/" element={<Navigate to="/boards" replace={true} />} />
          </Routes>
        </ThemeContext.Provider>
      </BrowserRouter>
    </StrictMode>
  );
};

export default App
