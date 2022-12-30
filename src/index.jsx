import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import store from './flux/store'
import App from './component/App'

const basename = ((window || {}).location || {}).pathname;

createRoot(document.getElementById('app'))
 .render((
    <Provider store={store}>
     <App
       basename={basename}
       store={store}
     />
    </Provider>
  ))
