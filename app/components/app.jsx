import React, {Component} from 'react'
import routes from './routes.jsx'
import CartSummary from './cart-summary.jsx'
import WishlistSummary from './wishlist-summary.jsx'
import {Link } from 'react-router'
export default class App extends Component {

  render() {
    return (
      <div>
        <div id='main'>{routes}</div>
        <div id='side'>
          <CartSummary />
          <WishlistSummary />
        </div>
      </div>
    )
  }

}
