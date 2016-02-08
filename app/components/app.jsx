import React, {Component} from 'react'
import routes from './routes.jsx'
import CartSummary from './cart-summary.jsx'
import WishList from './wishlist.jsx'

export default class App extends Component {

  render() {
    return (
      <div>
        <div id='main'>{routes}</div>
        <div id='side'><CartSummary /></div>
        <div id='wishlist'><WishList /></div>
      </div>
    )
  }

}
