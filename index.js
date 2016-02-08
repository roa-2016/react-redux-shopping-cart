import React from 'react'
import { render } from 'react-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import reducer from './app/reducer'
import routes from './app/routes.jsx'

const store = createStore(reducer)

render(
  <Provider store={store}>
    {routes}
  </Provider>, 
  document.getElementById('app')
)

