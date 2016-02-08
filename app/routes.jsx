import React, {Component} from 'react'
import { render } from 'react-dom'
import { Router, Route } from 'react-router'

import ProductList from './components/product-list.jsx'
import ProductDetail from './components/product-detail.jsx'

export default (
  <Router>
    <Route path='/' component={ProductList} />
    <Route path='/products/:id' component={ProductDetail}/>
  </Router>
)

