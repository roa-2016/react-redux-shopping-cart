import React, {Component} from 'react'
import {connect} from 'react-redux'
import Subtotal from './subtotal.jsx'
import CartItem from './cart-item.jsx'

class CartSummary extends Component {
  render() {
    const products = this.props.products.filter(p => {
      return this.props.cart.includes(p.get('id'))
    })
  
    return (
      <div id='cart'>
        <h4>Shopping Cart</h4>
        <div className='products'>
          {products.map((product, idx) => {
            return <CartItem key={idx} name={product.get('name')} id={product.get('id')} qty={this.props.cart.filter((p) => { return p === product.get('id') }).size} />}
          )}
        </div>
        <Subtotal />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.get('products'),
    cart: state.get('cart')
  };
}

export default connect(
  mapStateToProps
)(CartSummary)
