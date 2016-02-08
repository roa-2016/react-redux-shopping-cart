import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import App from './app.jsx'

export default (
  <Router>
    <Route path='/' component={App} />
  </Router>
)

