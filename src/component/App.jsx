import {
  StrictMode,
  useSelector,
  useState,
  useEffect
} from './uiApi';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router';

import ThemeContext from './hoc/ThemeContext';
import initialTheme from './style/theme';

import { selectAppUiTheme } from '../flux/selectors';

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
  , uiTheme = useSelector(selectAppUiTheme);

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
