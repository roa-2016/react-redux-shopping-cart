import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import ProductList from './product-list.jsx'
import ProductDetail from './product-detail.jsx'
import Checkout from './checkout.jsx'
import CheckOutForm from './checkout-form.jsx'
import CheckOutFinal from './checkout-final.jsx'

export default (
  <Router>
    <Route path='/' component={ProductList} />
    <Route path='/products/:id' component={ProductDetail}/>
    <Route path='/checkout' component={Checkout}>
      <IndexRoute  component={CheckOutForm}/>
      <Route path='/checkout/final' component={CheckOutFinal}/>
    </Route>
  </Router>
)
