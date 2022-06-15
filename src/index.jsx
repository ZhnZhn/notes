import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './flux/store'
import App from './component/App'

const basename = ((window || {}).location || {}).pathname;

render(
  (
    <Provider store={store}>
      <App
        basename={basename}
        store={store}
      />
    </Provider>
  ),
  document.getElementById('app')
)
