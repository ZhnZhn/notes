import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './flux/store'
import App from './component/App'

let basename = "/notes";
/*eslint-disable no-undef*/
if (process.env.NODE_ENV === 'development'){
  basename = undefined
}
/*eslint-enable no-undef*/

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
