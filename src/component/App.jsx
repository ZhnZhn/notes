import {
  StrictMode  
} from './uiApi';

import {
  BrowserRouter
} from './zhn-router/BrowserRouter';
import {
  Routes,
  Route,
  Navigate
} from './zhn-router/Router';

import PageBoard from './page-board/PageBoard';
import PageBoards from './page-boards/PageBoards';
import WrapperContainer from './zhn-cont/WrapperContainer';

const App = ({
  basename,
  store
}) => (
  <StrictMode>
    <BrowserRouter basename={basename}>
        <WrapperContainer store={store} />
        <Routes>
          <Route path="/boards/:id" element={<PageBoard />} />
          <Route path="/boards" element={<PageBoards />} />
          <Route path="/" element={<Navigate to="/boards" replace={true} />} />
        </Routes>
    </BrowserRouter>
  </StrictMode>
);

export default App
