import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import ProductList from './product-list.jsx'
import ProductDetail from './product-detail.jsx'
import CartSummary from './cart-summary.jsx'
import Checkout from './checkout.jsx'
import Hello from './hello-world.jsx'

export default (
  <Router>
    <IndexRoute component={Hello}/>
	  <Route path="/" component={Hello}/>
    <Route path='/products' component={ProductList}/>
    <Route path='/checkout' component={Checkout}/>
    <Route path='/products/:id' component={ProductDetail}/>
  </Router>
)
